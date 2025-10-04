import portalBundle from '@/data/portal.json';
import type { PortalBundle, PortalData } from '@/types/portal';

/**
 * Central portal content selector.
 * Keeps locale fallback logic in one place instead of repeating in every section component.
 */
export function getPortalData(locale: string): PortalData {
  const bundle = portalBundle as PortalBundle;
  return (bundle[locale as 'en' | 'es'] ?? bundle.en) as PortalData;
}
