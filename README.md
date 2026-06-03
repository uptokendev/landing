# MemeWarzone Landing Page - Live War Console

Standalone Vite + React landing page for `https://memewar.zone`.

## URLs

- Public landing page: `https://memewar.zone`
- App and primary CTAs: `https://app.memewar.zone`

## Install

```bash
npm install
npm run build
npm run dev
```

## Build Direction

This rebuild turns the public page into a motion-first command console. Every chapter has a moving system element: boot sequence, scanlines, radar, ticker, animated mission route, live battle state, war-room rows, reward router, squad ladder, league timer, or lock-on CTA.

## Notes

- Hero image is eager-loaded; lower section images use lazy loading.
- Reduced-motion users skip the boot overlay and get near-static effects.
- Exact duplicate public images were removed while preserving distinct source artwork.
- The Vite React plugin was removed because this app does not need it for JSX compilation.
