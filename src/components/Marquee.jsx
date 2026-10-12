import { skills } from "../data";

// Endless scrolling strip of every skill. The list is repeated so the loop has no gap.
export default function Marquee() {
  const items = skills.flatMap((group) => group.items);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
