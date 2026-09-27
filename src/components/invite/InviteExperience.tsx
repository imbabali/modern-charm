"use client";

import { useMemo, useState } from "react";
import type { InviteBundle } from "@/lib/invites/types";
import styles from "./invite.module.css";

interface Props {
  bundle: InviteBundle;
  token: string;
}

type Answer = "yes" | "no" | null;

function formatDate(iso: string): { weekday: string; day: string; month: string; year: string } {
  const date = new Date(`${iso}T12:00:00Z`);
  return {
    weekday: date.toLocaleDateString("en-GB", { weekday: "long", timeZone: "UTC" }),
    day: date.toLocaleDateString("en-GB", { day: "numeric", timeZone: "UTC" }),
    month: date.toLocaleDateString("en-GB", { month: "long", timeZone: "UTC" }),
    year: date.toLocaleDateString("en-GB", { year: "numeric", timeZone: "UTC" }),
  };
}

export default function InviteExperience({ bundle, token }: Props) {
  const { event, guest, moments } = bundle;

  const [opened, setOpened] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);

  const [answer, setAnswer] = useState<Answer>(
    bundle.rsvp ? (bundle.rsvp.attending ? "yes" : "no") : null,
  );
  const [seats, setSeats] = useState<number>(bundle.rsvp?.seats_confirmed || guest.seats);
  const [message, setMessage] = useState(bundle.rsvp?.message ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(Boolean(bundle.rsvp));
  const [error, setError] = useState<string | null>(null);

  const date = useMemo(() => formatDate(event.event_date), [event.event_date]);

  const scenes = useMemo(() => {
    const list: Array<{ key: string; node: React.ReactNode }> = [];

    if (event.families_intro) {
      list.push({
        key: "families",
        node: (
          <>
            <p className={styles.eyebrow}>{event.families_intro}</p>
            <div className={styles.divider} />
            <p className={styles.headline}>invite you to their wedding</p>
          </>
        ),
      });
    }

    list.push({
      key: "couple",
      node: (
        <>
          <h1 className={styles.names}>
            {event.couple_a_name}
            <span className={styles.ampersand}>&amp;</span>
            {event.couple_b_name}
          </h1>
          <div className={styles.divider} />
          <div className={styles.dateLockup}>
            <span>{date.weekday}</span>
            <span className={styles.dateDay}>{date.day}</span>
            <span>
              {date.month} {date.year}
            </span>
          </div>
        </>
      ),
    });

    for (const moment of moments) {
      list.push({
        key: `moment-${moment.id}`,
        node: (
          <>
            <p className={styles.detailLabel}>{moment.label}</p>
            {moment.time_text ? <p className={styles.detailMain}>{moment.time_text}</p> : null}
            {moment.venue_name ? <p className={styles.headline}>{moment.venue_name}</p> : null}
            {moment.venue_note ? <p className={styles.detailSub}>{moment.venue_note}</p> : null}
            {moment.map_url ? (
              <div className={styles.linkRow}>
                <a className={styles.textLink} href={moment.map_url} target="_blank" rel="noreferrer">
                  Directions
                </a>
              </div>
            ) : null}
          </>
        ),
      });
    }

    if (event.dress_code) {
      list.push({
        key: "dress",
        node: (
          <>
            <p className={styles.detailLabel}>Dress code</p>
            <p className={styles.headline}>{event.dress_code}</p>
          </>
        ),
      });
    }

    if (event.personal_message) {
      list.push({
        key: "message",
        node: (
          <>
            <p className={styles.detailLabel}>A note for you</p>
            <p className={styles.body}>{event.personal_message}</p>
          </>
        ),
      });
    }

    list.push({
      key: "admission",
      node: (
        <>
          <p className={styles.eyebrow}>This invitation is for</p>
          <div className={styles.admission}>
            <p className={styles.guestName}>{guest.display_name}</p>
            <div className={styles.divider} />
            <p className={styles.admitCount}>
              Admits {guest.seats} {guest.seats === 1 ? "guest" : "guests"}
            </p>
          </div>
        </>
      ),
    });

    list.push({ key: "rsvp", node: null });

    return list;
  }, [event, guest, moments, date]);

  const lastIndex = scenes.length - 1;
  const isRsvpScene = sceneIndex === lastIndex;

  async function submit() {
    if (!answer) {
      setError("Please choose whether you can join us.");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          attending: answer === "yes",
          seats: answer === "yes" ? seats : 0,
          message: message.trim() || null,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setError(payload.error ?? "We could not save your response. Please try again.");
        return;
      }

      setSeats(payload.seatsConfirmed ?? seats);
      setSaved(true);
    } catch {
      setError("We could not reach the server. Please check your connection and try again.");
    } finally {
      setSaving(false);
    }
  }

  if (!opened) {
    return (
      <div className={styles.stage}>
        <div
          className={styles.envelope}
          role="button"
          tabIndex={0}
          aria-label={`Open the invitation for ${guest.display_name}`}
          onClick={() => setOpened(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpened(true);
            }
          }}
        >
          <div className={styles.flap} />
          <div className={styles.seal} aria-hidden>
            {event.monogram_a}&nbsp;{event.monogram_b}
          </div>
          <p className={styles.openPrompt}>Tap to open</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.stage} ${styles.envelopeOpen}`}>
      <div>
        <article className={styles.card}>
          <div className={styles.scene} key={scenes[sceneIndex].key}>
            {isRsvpScene ? (
              saved ? (
                <div className={styles.confirmed}>
                  <p className={styles.detailLabel}>
                    {answer === "yes" ? "We will see you there" : "Thank you for letting us know"}
                  </p>
                  <p className={styles.headline}>
                    {answer === "yes"
                      ? `${seats} ${seats === 1 ? "seat" : "seats"} reserved`
                      : "Your response is recorded"}
                  </p>
                  <div className={styles.divider} />
                  {answer === "yes" ? (
                    <div className={styles.linkRow}>
                      <a className={styles.textLink} href={`/invite/${token}/pass`}>
                        Your admission pass
                      </a>
                      <a className={styles.textLink} href={`/invite/${token}/calendar`}>
                        Add to calendar
                      </a>
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className={styles.navButton}
                    onClick={() => setSaved(false)}
                  >
                    Change response
                  </button>
                </div>
              ) : (
                <div className={styles.form}>
                  <p className={styles.detailLabel}>Will you join us?</p>

                  <div className={styles.choiceRow}>
                    <button
                      type="button"
                      className={`${styles.choice} ${answer === "yes" ? styles.choiceSelected : ""}`}
                      aria-pressed={answer === "yes"}
                      onClick={() => setAnswer("yes")}
                    >
                      Joyfully accept
                    </button>
                    <button
                      type="button"
                      className={`${styles.choice} ${answer === "no" ? styles.choiceSelected : ""}`}
                      aria-pressed={answer === "no"}
                      onClick={() => setAnswer("no")}
                    >
                      Regretfully decline
                    </button>
                  </div>

                  {answer === "yes" && guest.seats > 1 ? (
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>How many of you, up to {guest.seats}</span>
                      <input
                        className={styles.input}
                        type="number"
                        inputMode="numeric"
                        min={1}
                        max={guest.seats}
                        value={seats}
                        onChange={(e) => setSeats(Number(e.target.value))}
                      />
                    </label>
                  ) : null}

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>A note for the couple, optional</span>
                    <textarea
                      className={styles.textarea}
                      value={message}
                      maxLength={500}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>

                  {error ? <p className={`${styles.note} ${styles.error}`}>{error}</p> : null}

                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={submit}
                    disabled={saving}
                  >
                    {saving ? "Sending" : "Send response"}
                  </button>
                </div>
              )
            ) : (
              scenes[sceneIndex].node
            )}
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => setSceneIndex((i) => Math.max(0, i - 1))}
              disabled={sceneIndex === 0}
            >
              Back
            </button>

            <div className={styles.progress} aria-hidden>
              {scenes.map((scene, i) => (
                <span
                  key={scene.key}
                  className={`${styles.pip} ${i === sceneIndex ? styles.pipActive : ""}`}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.navButton}
              onClick={() => setSceneIndex((i) => Math.min(lastIndex, i + 1))}
              disabled={isRsvpScene}
            >
              Next
            </button>
          </div>
        </article>

        <p className={styles.credit}>
          <a href="https://moderncharmevents.com" target="_blank" rel="noreferrer">
            Modern Charm
          </a>
        </p>
      </div>
    </div>
  );
}
