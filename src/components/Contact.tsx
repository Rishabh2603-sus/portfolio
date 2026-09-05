import { useState, useCallback } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, []);

  return (
    <section id="contact" className={`section section-alt-wrap ${styles.contact}`}>
      <Reveal as="p" className="eyebrow">
        Contact
      </Reveal>
      <Reveal delay={60}>
        <h2 className={styles.contactHeading}>Let's work together</h2>
      </Reveal>
      <Reveal delay={120}>
        <p className={styles.contactCopy}>
          Have a project in mind, or just want to say hello? My inbox is always open.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <div className={styles.contactEmailWrap}>
          <span
            className={styles.contactEmail}
            onClick={handleCopyEmail}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleCopyEmail(); }}
            title="Click to copy email"
          >
            {profile.email}
          </span>
          <span className={`${styles.copiedToast} ${copied ? styles.copiedToastVisible : ""}`}>
            Copied!
          </span>
        </div>
      </Reveal>
      <Reveal delay={240}>
        <ul className={`${styles.contactSocials} ${styles.contactSocialsPrimary}`}>
          {profile.socials.connect.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={300}>
        <ul className={`${styles.contactSocials} ${styles.contactSocialsCoding}`}>
          {profile.socials.coding.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
