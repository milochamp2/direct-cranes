import React from "react";
import { Helmet } from "react-helmet-async";

const SITE = "https://directcranes.au";
const DEFAULT_DESC =
  "Complete crane hire & lifting solutions across Melbourne, Brisbane and South Australia — Frannas, all-terrains, crawlers, tower cranes, heavy haulage and helicopter lifting.";

/**
 * Per-page SEO — unique <title>, description, canonical and Open Graph tags.
 * `title` is the page name; the brand suffix is appended automatically.
 */
export default function Seo({ title, description = DEFAULT_DESC, path = "/" }) {
  const fullTitle = title
    ? `${title} · Direct Cranes`
    : "Direct Cranes · Crane Hire & Lifting Solutions";
  const url = `${SITE}${path}`;
  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
