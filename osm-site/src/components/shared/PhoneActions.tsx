import { site } from '@/content/site';
import { Icon } from './Icon';

/**
 * The studio number with both actions: Call (tel:) and Text (sms:). Used wherever the
 * phone number appears so visitors can choose how to reach the studio.
 */
export function PhoneActions({ variant = 'inline', label = 'Call or text', className }: { variant?: 'inline' | 'pill' | 'big' | 'compact'; label?: string; className?: string }) {
  const { display, tel, sms } = site.phone;
  return (
    <div className={['phone-actions', `phone-actions--${variant}`, className].filter(Boolean).join(' ')}>
      <p className="phone-actions__line">
        <span className="phone-actions__label">{label}</span> <span className="phone-actions__number">{display}</span>
      </p>
      <div className="phone-actions__btns">
        <a className="phone-actions__btn" href={`tel:${tel}`} aria-label={`Call ${display}`}>
          <Icon name="phone" size={16} />
          Call
        </a>
        <a className="phone-actions__btn" href={`sms:${sms}`} aria-label={`Text ${display}`}>
          <Icon name="message" size={16} />
          Text
        </a>
      </div>
    </div>
  );
}
