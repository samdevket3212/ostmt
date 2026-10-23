import { AppLink } from '@/lib/platform';
import type { Service } from '@/content/services';
import { ServiceArtwork } from '../visuals/ServiceArtwork';
import { Icon } from './Icon';

export function ServiceCard({ service, variant = 'standard' }: { service: Service; variant?: 'standard' | 'feature' | 'wide' | 'compact' }) {
  return (
    <article className={`osm-service osm-service--${variant}`} data-theme={service.theme === 'sand' ? 'white' : service.theme} data-reveal>
      <div className="osm-service__art">
        <ServiceArtwork kind={service.art} />
      </div>
      <div className="osm-service__body">
        <p className="osm-service__label">
          <span>{service.number}</span> {service.name}
        </p>
        <h3 className="osm-service__title">{service.cardHeadline}</h3>
        <p className="osm-service__desc">{service.cardText}</p>
        <AppLink className="osm-service__link" href={`/services/${service.slug}`}>
          <span>Explore {service.slug === 'branding' ? 'Branding' : service.name}</span>
          <Icon name="arrow" size={18} />
        </AppLink>
      </div>
    </article>
  );
}
