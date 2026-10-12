import Reveal from "./Reveal";
import { profile } from "../data";
import photo from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="h2">About me</Reveal>
        <div className="bento bento--about">
          <Reveal className="tile tile--main">
            <div className="about-head">
              <img src={photo} alt={`Portrait of ${profile.name}`} width="104" height="104" />
              <div>
                <h3>{profile.name}</h3>
                <span className="tile__label">{profile.role}</span>
              </div>
            </div>
            {profile.about.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </Reveal>
          {profile.facts.map(({ label, value }, i) => (
            <Reveal className="tile" delay={(i + 1) * 80} key={label}>
              <span className="tile__label">{label}</span>
              <b className="tile__value">{value}</b>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
