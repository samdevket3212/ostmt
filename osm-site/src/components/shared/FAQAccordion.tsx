'use client';
import { useId, useState } from 'react';
import { Icon } from './Icon';

export function FAQAccordion({ items, defaultOpen = -1 }: { items: { question: string; answer: string }[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  const base = 'faq' + useId().replace(/[^A-Za-z0-9_-]/g, '');
  return (
    <div className="gg-faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.question} className={'gg-faq__item' + (isOpen ? ' gg-faq__item--open' : '')}>
            <h3 className="gg-faq__q">
              <button type="button" id={`${base}b${i}`} aria-expanded={isOpen} aria-controls={`${base}p${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span>{it.question}</span>
                <span className="gg-faq__icon">
                  <Icon name="plus" size={22} />
                </span>
              </button>
            </h3>
            <div id={`${base}p${i}`} role="region" aria-labelledby={`${base}b${i}`} className="gg-faq__panel" inert={!isOpen}>
              <div className="gg-faq__inner">
                <p>{it.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
