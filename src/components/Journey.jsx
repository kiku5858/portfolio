import Reveal from "./Reveal";
import { journey } from "../data";

export default function Journey() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <Reveal as="h2">Journey</Reveal>
        <ol className="timeline">
          {journey.map(({ time, title, text }, i) => (
            <Reveal as="li" delay={i * 80} key={title}>
              <time>{time}</time>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
