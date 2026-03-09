export const CONSENT_STORAGE_KEY = 'clarivex-cookie-consent';

export const CONSENT_EVENT = 'cookie-consent-updated';
export const OPEN_SETTINGS_EVENT = 'open-cookie-settings';

export const getConsent = () => {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return {
      essential: true,
      analytics: data.analytics ?? false,
      marketing: data.marketing ?? false,
      timestamp: data.timestamp,
    };
  } catch {
    return null;
  }
};

export const setConsent = (consent) => {
  const data = {
    ...consent,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: data }));
};

export const hasConsent = () => getConsent() !== null;

export const hasMarketingConsent = () => {
  const c = getConsent();
  return c?.marketing === true;
};
