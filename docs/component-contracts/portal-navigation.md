# Component Contract: Portal Navigation

## Purpose

Provides the Alumni and Friends portal navigation as a separate reusable component. The structure is inspired by the University of Chicago homepage navigation: a utility row, a primary horizontal navigation row, strong uppercase labels, maroon hover/focus states, and a mobile menu.

Reference:

https://www.uchicago.edu/

## Public Controls

No public properties yet. Links are static until navigation governance and content-manager ownership are finalized.

## Dependencies

- Can be used directly on an Experience Cloud page.
- Is composed inside `portalBrandHeader` for the current portal shell.

## Links

Utility links:

- `UChicago.edu`
- `Contact`
- `Directory`
- `Search`

Primary links:

- `Home`
- `Events`
- `Stories`
- `Giving`
- `Volunteer`
- `Groups`
- `Profile`

## Accessibility

- Utility and primary navigation must use explicit `aria-label` values.
- Mobile menu button must expose `aria-controls` and `aria-expanded`.
- Keyboard focus must be visible.
- Navigation must remain usable at mobile widths.

## Future Enhancements

- Make links configurable through Salesforce records or Experience Builder properties.
- Add current-page state when route information is available.
- Replace text search affordance with the approved Experience Cloud search implementation.

