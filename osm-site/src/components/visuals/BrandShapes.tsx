/** Floating modular shapes from the OSM system: used behind calls to action. Decorative only. */
export function BrandShapes({ className }: { className?: string }) {
  return (
    <div className={['brand-shapes', className].filter(Boolean).join(' ')} aria-hidden="true">
      <span className="brand-shapes__ring" />
      <span className="brand-shapes__half" />
      <span className="brand-shapes__block" />
      <span className="brand-shapes__dot" />
    </div>
  );
}
