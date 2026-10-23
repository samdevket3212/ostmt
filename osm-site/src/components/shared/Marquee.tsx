const ITEMS = ['2D Art', '3D Design', 'Game Worlds', 'Brand Identity', 'UI/UX', 'Web Development', 'Software', 'Digital Marketing'];
export function Marquee({ items = ITEMS }: { items?: string[] }) {
  const run = (hidden: boolean) => (
    <ul className="osm-marquee__run" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>
          <span>{t}</span>
          <span className="osm-marquee__star" aria-hidden="true">
            ✳
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="osm-marquee" data-theme="coral" aria-label="Our disciplines">
      <div className="osm-marquee__track">
        {run(false)}
        {run(true)}
      </div>
    </section>
  );
}
