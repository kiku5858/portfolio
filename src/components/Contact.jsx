import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  const phoneLink = `tel:${profile.phone.replace(/\s/g, "")}`;

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact">
          <h2>Let's work together</h2>
          <p>I'm looking for a fresher Frontend or Full Stack role. Say hello:</p>
          <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="buttons">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn btn--ghost" href={phoneLink}>Call {profile.phone}</a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
