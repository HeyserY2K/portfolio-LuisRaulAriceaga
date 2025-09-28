// Adapter wrapper to avoid bare re-export confusing Next's type checker.
// Previously this file did: `export { default, metadata } from '...';` which caused
// the generated `.next/types/...` entry to infer an unexpected Promise type for `params`.
// Defining an explicit component here with concrete props resolves the mismatch.

import type { Metadata } from 'next';

import ResumePageImpl, { metadata as implMetadata } from '../../../sections/resume/page';

// Ensure static generation compatibility
export const dynamic = 'force-static';

// Re-expose metadata (fallback provided just in case implementation stops exporting it)
export const metadata: Metadata = implMetadata ?? {
  title: 'Resume - Luis Raul Ariceaga',
  description: 'Professional Resume for Luis Raul Ariceaga',
};

// Explicit route/search param types for this dynamic segment
type RouteParams = { locale: string };
type SearchParams = Record<string, string | string[] | undefined>;
// NOTE: Next 15 generated types sometimes wrap `params` in a Promise for dynamic segments.
// We mirror that here so the checker is satisfied.
// Some Next.js 15 internal generated types wrap both params and searchParams in Promises.
// We align with that to appease the `.next/types` checker.
type Props = { params: Promise<RouteParams>; searchParams?: Promise<SearchParams> };

// NOTE: We deliberately forward props via a function call instead of JSX to
// avoid re-checking the implementation's generic constraints; cast keeps it minimal.
export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params; // unwrap only params (required for correct locale)
  // DO NOT await searchParams to keep route fully static and avoid dynamic rendering flag
  const unresolvedSearch = searchParams as unknown as SearchParams | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Adapter casting keeps implementation untouched
  return (ResumePageImpl as any)({ params: resolvedParams, searchParams: unresolvedSearch });
}
