import InterviewDemo from "./InterviewDemo";
import Marquee from "./Marquee";
import { stats } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div>
          <p className="status"><i /> Open to fresher Frontend / Full Stack roles</p>
          <h1>I build React apps that listen and talk back.</h1>
          <p className="hero__lead">
            I'm Kiran, a React.js frontend developer from Jamshedpur. My main project is an AI mock
            interview platform with voice input, voice questions and live scoring.
          </p>
          <div className="buttons">
            <a className="btn btn--primary" href="#projects">See my projects</a>
            <a className="btn btn--ghost" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="glow-frame">
          <InterviewDemo />
        </div>
      </div>

      <dl className="container stats">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>

      <Marquee />
    </section>
  );
}
