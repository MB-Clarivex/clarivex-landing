import React from 'react';

const PNG_SRC = '/atsakiklis-problema-sprendimas.png';
const WEBP_SRC = '/atsakiklis-problema-sprendimas.webp';
const WIDTH = 1024;
const HEIGHT = 1024;

const ALT =
  'Infografikas: nepraraskite klientų dėl vėluojančių atsakymų — problema ir Clarivex sprendimas';

export default function AtsakiklisInfographic({
  className = 'w-full h-auto',
  loading = 'lazy',
  fetchPriority,
}) {
  return (
    <picture>
      <source srcSet={WEBP_SRC} type="image/webp" />
      <img
        src={PNG_SRC}
        alt={ALT}
        width={WIDTH}
        height={HEIGHT}
        className={className}
        loading={loading}
        decoding="async"
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    </picture>
  );
}

export function AtsakiklisInfographicLightbox({ className }) {
  return (
    <picture>
      <source srcSet={WEBP_SRC} type="image/webp" />
      <img
        src={PNG_SRC}
        alt="Nepraraskite klientų dėl vėluojančių atsakymų — problema ir Clarivex sprendimas"
        width={WIDTH}
        height={HEIGHT}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}
