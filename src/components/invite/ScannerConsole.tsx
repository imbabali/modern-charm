"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Door check-in, built for a phone held by a steward at a gate.
 *
 * Scanning uses the browser's own BarcodeDetector where it exists, which on
 * Android Chrome it does, rather than shipping a decoder library to a device
 * on event-day mobile data. Every deployment also keeps manual entry, because
 * a gate at dusk with a cracked screen is not the place to discover that the
 * camera is the only way in.
 */

interface Props {
  scannerToken: string;
  coupleLine: string;
}

interface CheckInResponse {
  status?: "admitted" | "already-admitted" | "not-attending" | "no-response" | "unknown-guest";
  guestName?: string;
  seatsAdmitted?: number;
  seatsConfirmed?: number;
  previouslyAdmitted?: number;
  error?: string;
}

const MESSAGES: Record<string, { title: string; tone: "good" | "warn" | "bad" }> = {
  admitted: { title: "Admitted", tone: "good" },
  "already-admitted": { title: "Already admitted", tone: "warn" },
  "not-attending": { title: "Declined the invitation", tone: "bad" },
  "no-response": { title: "No response recorded", tone: "warn" },
  "unknown-guest": { title: "Code not recognised", tone: "bad" },
};

export default function ScannerConsole({ scannerToken, coupleLine }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const busyRef = useRef(false);

  const [scanning, setScanning] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [manualToken, setManualToken] = useState("");
  const [result, setResult] = useState<CheckInResponse | null>(null);
  const [stewardName, setStewardName] = useState("");

  const submitToken = useCallback(
    async (guestToken: string) => {
      if (busyRef.current || !guestToken) return;
      busyRef.current = true;

      try {
        const response = await fetch("/api/checkin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scannerToken, guestToken, scannedBy: stewardName || null }),
        });
        setResult(await response.json());
      } catch {
        setResult({ error: "No connection. The scan was not recorded." });
      } finally {
        // A short pause stops one code being read repeatedly while it stays
        // in front of the lens.
        setTimeout(() => {
          busyRef.current = false;
        }, 1500);
      }
    },
    [scannerToken, stewardName],
  );

  useEffect(() => {
    if (!scanning) return;

    const Detector = (window as unknown as {
      BarcodeDetector?: new (opts: { formats: string[] }) => {
        detect: (source: CanvasImageSource) => Promise<Array<{ rawValue: string }>>;
      };
    }).BarcodeDetector;

    if (!Detector) {
      setCameraError("This browser cannot scan. Please enter the code manually.");
      setScanning(false);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setInterval> | null = null;
    const detector = new Detector({ formats: ["qr_code"] });

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          void videoRef.current.play();
        }

        timer = setInterval(async () => {
          if (!videoRef.current || videoRef.current.readyState !== 4) return;
          try {
            const codes = await detector.detect(videoRef.current);
            if (codes.length > 0) void submitToken(codes[0].rawValue.trim());
          } catch {
            // A failed frame is normal; the next tick tries again.
          }
        }, 400);
      })
      .catch(() => {
        setCameraError("Camera access was refused. Please enter the code manually.");
        setScanning(false);
      });

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    };
  }, [scanning, submitToken]);

  const message = result?.status ? MESSAGES[result.status] : null;

  return (
    <main className="mx-auto max-w-md px-4 py-8">
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-accent-dark">
        Door check-in
      </p>
      <h1 className="mt-2 font-heading text-2xl text-dark">{coupleLine}</h1>

      <label className="mt-6 block">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
          Your name, optional
        </span>
        <input
          className="mt-1 w-full rounded-md border border-cream-dark px-3 py-2 text-sm"
          value={stewardName}
          onChange={(e) => setStewardName(e.target.value)}
          placeholder="Steward on the gate"
        />
      </label>

      {scanning ? (
        <video
          ref={videoRef}
          className="mt-4 w-full rounded-lg border border-cream-dark"
          muted
          playsInline
        />
      ) : null}

      <button
        type="button"
        onClick={() => {
          setCameraError(null);
          setScanning((s) => !s);
        }}
        className="mt-4 min-h-11 w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-cream"
      >
        {scanning ? "Stop camera" : "Scan a pass"}
      </button>

      {cameraError ? <p className="mt-3 text-sm text-accent-dark">{cameraError}</p> : null}

      <div className="mt-6 border-t border-cream-dark pt-6">
        <label className="block">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
            Or enter the code under the QR
          </span>
          <input
            className="mt-1 w-full rounded-md border border-cream-dark px-3 py-2 font-mono text-sm"
            value={manualToken}
            onChange={(e) => setManualToken(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={() => void submitToken(manualToken.trim())}
          className="mt-3 min-h-11 w-full rounded-full border border-accent px-5 py-3 text-sm text-accent-dark"
        >
          Check in
        </button>
      </div>

      {result ? (
        <div
          className={`mt-6 rounded-lg px-4 py-4 ${
            message?.tone === "good"
              ? "bg-primary/10 text-primary"
              : message?.tone === "warn"
                ? "bg-accent/15 text-accent-dark"
                : "bg-red-50 text-red-800"
          }`}
        >
          <p className="font-heading text-lg">{message?.title ?? result.error}</p>
          {result.guestName ? <p className="mt-1 text-sm">{result.guestName}</p> : null}
          {result.status === "admitted" ? (
            <p className="mt-1 text-sm">
              {result.seatsAdmitted} {result.seatsAdmitted === 1 ? "guest" : "guests"}
            </p>
          ) : null}
          {result.status === "already-admitted" ? (
            <p className="mt-1 text-sm">
              {result.previouslyAdmitted} already admitted on an earlier scan
            </p>
          ) : null}
        </div>
      ) : null}
    </main>
  );
}
