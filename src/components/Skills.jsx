import Reveal from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="h2">Skills</Reveal>
        <div className="bento bento--skills">
          {skills.map(({ title, items }, i) => (
            <Reveal className={`tile tile--skill-${i}`} delay={i * 80} key={title}>
              <h3>{title}</h3>
              <div className="chips">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
