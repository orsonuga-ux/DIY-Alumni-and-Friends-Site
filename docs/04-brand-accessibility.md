# Brand and Accessibility

## Source Guidance

This project should follow official University of Chicago web brand and identity guidance. Current source references checked on 2026-05-26:

- UChicago Website Resource Center, Web Brand Identity Guidelines: https://websites.uchicago.edu/policies-standards/web-brand-identity-guidelines/
- UChicago Creative, Brand Identity Guidelines: https://creative.uchicago.edu/brand-identity-guidelines-3/

## UChicago Web Brand Requirements

- Preserve the UChicago brand bar treatment.
- Do not alter the maroon bar with the phoenix and University wordmark.
- Keep the brand bar linked to `www.uchicago.edu`.
- Keep the search location and expected header/footer treatment aligned with University web guidance.
- Use approved University logos only.
- Treat the area between navigation and footer as customizable, but still brand-governed.
- Use Gotham for web content where licensed and available.
- Use Helvetica or Arial as acceptable fallbacks when Gotham is unavailable.
- Use Phoenix Maroon, Light Greystone, Dark Greystone, and Footer Grey as dominant website colors.
- Use secondary colors sparingly and only where they complement the primary palette.

## Practical Design Tokens

Exact token values must be validated against the approved University brand assets before implementation. Until then, use semantic names instead of hard-coded assumptions.

| Token | Purpose |
| --- | --- |
| `--color-uchicago-maroon` | Brand bar, primary emphasis, key actions where approved. |
| `--color-greystone-light` | Light page surfaces and section backgrounds. |
| `--color-greystone-dark` | Primary text and dark utility surfaces. |
| `--color-footer-grey` | Footer surfaces and related utility regions. |
| `--font-brand` | Gotham when available. |
| `--font-brand-fallback` | Helvetica, Arial, sans-serif. |

## Portal UI Direction

- The portal should feel quiet, institutional, and efficient.
- Use restrained layouts built for scanning and repeated use.
- Avoid ornamental gradients, decorative blobs, or overly promotional landing-page patterns.
- Make the first viewport functional: personalized content, upcoming events, and clear account actions.
- Use readable typography, clear headings, and predictable navigation.
- Keep content cards compact and purposeful.

## Accessibility Requirements

- Meet WCAG 2.2 AA unless the University requires a stricter standard.
- Validate contrast for all text and interactive states.
- Require alt text for every content-managed image.
- Make focus states visible and brand-consistent.
- Ensure portal components are keyboard navigable.
- Avoid using color alone to convey status, priority, or action.
- Provide accessible names for icon-only controls.
- Test authenticated pages with screen reader-friendly semantic structure.

## Review Checklist

- Header, footer, brand bar, logo, and search treatment are compliant.
- Content uses approved typography or approved fallback.
- Colors use semantic tokens and pass contrast checks.
- Images have meaningful alt text or are marked decorative where appropriate.
- CTAs are clear out of context.
- No internal-only Salesforce fields are exposed.
- Mobile and desktop layouts are tested.
- Content manager fields support accessible publishing.

