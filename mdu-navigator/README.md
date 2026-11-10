# MDU Navigator

Unofficial student prototype for **MDU Campus Västerås**. One codebase that runs as an **Android app**, an **iPhone app** and a **web app** (PWA).

- **Schedule:** paste your KronoX iCal subscription link (it updates itself in the apps) or upload an `.ics` file. Shows your next session, the room, and a button that takes you there.
- **Map and routes:** floor plans of R Block (floors 1–3) and T/U Block (floors 1–3), digitised from MDU's public premises guide (Lokalguide Västerås). Step-by-step routes inside R Block, including which stairs to take.
- **Search and places:** every room code and named hall, plus toilets, café, lunch areas, the calm room, the helpdesk and defibrillators.
- **Languages:** English and Swedish. Swedish is picked automatically when the phone is set to Swedish.
- **Privacy:** no account, no server, no tracking. The schedule is stored on the device only.

> Not affiliated with or published by Mälardalen University.

## Project layout

```
www/                 the whole app (plain HTML/CSS/JS, no build step)
  index.html
  css/app.css
  js/app.js          UI, routing (Dijkstra on a corridor graph), iCal parsing
  js/data.js         rooms, corridor graphs, map metadata
  maps/*.png         floor plan images
  sw.js, manifest.webmanifest   offline web app (PWA)
android/             Android Studio project (Capacitor)
ios/                 Xcode project (Capacitor, Swift Package Manager)
resources/           source images for the app icon and splash screen
.github/workflows/   automatic Android APK build and web deploy
```

## Build

Requirements: Node.js 22+. Android also needs Android Studio (JDK 21). iOS needs a Mac with Xcode 16+.

```bash
npm install
npx cap sync          # copies www/ into the native projects
npx cap open android  # Android Studio → Run
npx cap open ios      # Xcode → choose your Team → Run
```

After any change in `www/`, run `npx cap sync` again. When you change files in `www/`, also bump `VERSION` in `www/sw.js` so web users get the update.

### Without installing anything (GitHub)
- **Android APK:** push the repository to GitHub. The *Android APK* workflow builds `app-debug.apk`, which you download from the run's **Artifacts**.
- **Web / iPhone without a Mac:** enable GitHub Pages (Settings → Pages → Source: *GitHub Actions*). The *Web version* workflow publishes `www/`. On iPhone, open the link in Safari → Share → **Add to Home Screen**.

## Known limits
- Routes exist for R Block only. T/U rooms are marked on the map without a route.
- Corridors were traced from a schematic PDF without a scale, so distances and walking times are estimates.
- Lift locations aren't marked in the guide, so routes use stairs.
- In the web version, browsers block loading KronoX links directly (CORS). Use file upload there. The Android and iOS apps load links natively.

## Data source
Floor plans: *Lokalguide Västerås* (MDU, updated August 2026), public PDF on mdu.se.
