# Focusly — Pomodoro Desktop App

Cross-platform Pomodoro timer with daily goals and history, built with Electron.

## Features
- Pomodoro timer (Focus / Short break / Long break) with customizable durations
- Sound chime + optional desktop notifications on completion
- Daily focus goal with progress ring and celebration
- History: per-day focus time, sessions, streak, best day, 7/14/30-day chart
- Manual time logging
- Auto-cycling between focus and breaks
- Keyboard shortcuts: Space (start/pause), R (reset), S (skip)

## Run from source
```bash
npm install
npm start
```

## Build
```bash
# Linux (AppImage)
npm run build:linux

# Windows (run on a Windows machine for a proper .exe installer)
npm run build:win
```

Cross-building Windows from Linux requires Wine; without it, use the pre-built portable package in `dist/`.

## Pre-built packages
- `dist/Focusly-1.0.0.AppImage` — Linux (make executable: `chmod +x`)
- `dist/Focusly-1.0.0-win-portable.zip` — Windows (extract and run `win-unpacked/Focusly.exe`)

## Web version
The original single-file web app is in `/home/bhushan/Documents/pomodoro/index.html` — open it in any browser, no install needed.
