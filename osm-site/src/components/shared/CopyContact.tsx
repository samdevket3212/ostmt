'use client';
import { useState } from 'react';
import { Icon } from './Icon';

/** A contact link with a copy button, so the address works even where mailto:/tel: links can't open an app. */
export function CopyContact({ href, value, label }: { href: string; value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.getElementById(`cc-${label.replace(/\W+/g, '-')}`);
      if (el) {
        const r = document.createRange();
        r.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(r);
      }
    }
  }
  return (
    <span className="copy-contact">
      <a href={href} id={`cc-${label.replace(/\W+/g, '-')}`} className="copy-contact__link">
        {value}
      </a>
      <button type="button" className="copy-contact__btn" onClick={copy} aria-label={`Copy ${label}`}>
        <Icon name={copied ? 'check' : 'copy'} size={16} />
        <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </span>
  );
}
