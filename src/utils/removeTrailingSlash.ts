export default function removeTrailingSlash(pathname: string) {
  const matchTrailingSlash = /\w+\/$/;
  if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1);
  return pathname;
}

// What it is
// The file removeTrailingSlash.ts exports a small utility that removes a trailing slash from a pathname string:

// Behavior: If the string ends with a slash and the character before the slash is a “word” character (letter, digit, underscore), it removes the final slash. Otherwise it returns the input unchanged.
// Why this is important
// Normalizing paths (ensuring /about and /about/ are treated consistently) helps in several places:

// Routing: Avoid duplicate routes or mismatches when generating links.
// Link generation: Produces consistent hrefs when building navs or sitemaps.
// SEO & canonical URLs: Prevents duplicate content / inconsistent canonical URLs (/page vs /page/).
// Comparison & caching: Makes string comparisons predictable and caches stable keys.