import Reveal from "./Reveal";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <Reveal as="h2">Certificates</Reveal>
        <div className="certs">
          {certificates.map(({ title, issuer, link, tags }, i) => (
            <Reveal as="article" className="cert" delay={i * 80} key={title}>
              <h3>{title}</h3>
              {issuer && <p className="cert__issuer">{issuer}</p>}
              <div className="chips">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {link && (
                <a className="cert__link" href={link} target="_blank" rel="noreferrer">
                  View certificate
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
