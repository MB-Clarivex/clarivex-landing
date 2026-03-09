import { useEffect, useRef } from 'react';
import {
  hasMarketingConsent,
  CONSENT_EVENT,
} from '@/lib/cookieConsent';

const META_PIXEL_ID = '1277136654270443';

const loadMetaPixel = () => {
  if (typeof window === 'undefined' || window.fbq) return;
  const f = window;
  const b = document;
  const e = 'script';
  const v = 'https://connect.facebook.net/en_US/fbevents.js';
  const n = (f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  });
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  const t = b.createElement(e);
  t.async = !0;
  t.src = v;
  const s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
  n('init', META_PIXEL_ID);
  n('track', 'PageView');
};

const MetaPixel = () => {
  const loaded = useRef(false);

  useEffect(() => {
    const maybeLoad = () => {
      if (loaded.current) return;
      if (hasMarketingConsent()) {
        loadMetaPixel();
        loaded.current = true;
      }
    };

    maybeLoad();

    const handler = () => maybeLoad();
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  return null;
};

export default MetaPixel;
