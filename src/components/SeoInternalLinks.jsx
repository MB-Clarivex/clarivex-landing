import React from 'react';
import { SEO_INTERNAL_LINKS, seoHref } from '@/lib/seoLinks';

export default function SeoInternalLinks({
  className = 'flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-4',
  linkClassName = 'text-gray-400 hover:text-white transition-colors',
}) {
  return (
    <nav aria-label="Vidinės nuorodos">
      <ul className={className}>
        {SEO_INTERNAL_LINKS.map(({ path, label }) => (
          <li key={path}>
            <a href={seoHref(path)} className={linkClassName}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
