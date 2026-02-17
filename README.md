# ThirdBud 🎧

**When there's only two earbuds but three friends.**

Sync music across phones in real-time. One person DJs, everyone vibes.

## Features
- 🎵 6 generative synth tracks (Tone.js)
- 🔄 Real-time sync via Firebase Realtime Database
- 🎧 DJ controls playback for the whole room
- 💜 Live floating emoji reactions
- 📱 Mobile-first, zero install
- ⚡ Single HTML file — deploy anywhere

## Tech Stack
- Vanilla JS · Tone.js · Firebase Realtime DB · Vercel

## Quick Start
1. Open app → name → **Create a Room**
2. Share 5-letter code with friends
3. Friends open URL → paste code → **Join**
4. DJ picks track → everyone hears it in sync 🔥

## Deploy
```bash
vercel --prod
```

## Why Tone.js?
- Spotify API needs Premium + backend + 250k MAU for public access
- External MP3 CDNs block hotlinking
- Tone.js generates music client-side with zero dependencies
- Seeded PRNG = all clients hear identical melodies

MIT License
