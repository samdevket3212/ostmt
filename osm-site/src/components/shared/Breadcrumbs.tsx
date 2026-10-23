import { AppLink } from '@/lib/platform';
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="gg-crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i}>
              {last || !it.href ? <span aria-current={last ? 'page' : undefined}>{it.label}</span> : <AppLink href={it.href}>{it.label}</AppLink>}
              {!last && (
                <span className="gg-crumbs__sep" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
