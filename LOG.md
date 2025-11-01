# LOG — Change History and Debug Records

This file is the chronological record of notable debugging sessions, changes proposed/applied to the repository, and approvals.  
Additions to this file should be made whenever a change is made to the codebase that the maintainer has approved or that documents an important debugging session or decision.

Format
- Entries are ordered newest-first.
- Each entry includes:
  - Date (YYYY-MM-DD)
  - Summary title
  - Details (what happened, root cause, fix applied or proposed)
  - Files created/changed (if applicable)
  - Action items / follow-up

---

## 2025-11-01 — Expo SDK patch applied; OTA update mismatch resolved
- Author: Assistant (on behalf of repo maintainer)
- Summary:
  - Updated the project's Expo SDK patch version to match the runtime expected by Expo Go. This resolved the "failed to download remote update" error caused by a version mismatch (app expected 54.0.21 while project had 54.0.20).
  - Restarted the dev server in Tunnel mode with a cleared Metro cache to ensure the device connects to the correct development bundle.
- Files changed:
  - `package.json` (expo dependency updated to `~54.0.21`)
  - `package-lock.json` (updated by npm)
- Commands run:
  ```powershell
  npm install expo@~54.0.21
  npx expo start --tunnel --clear
  ```
- Verification:
  - Opened the app in Expo Go via the tunnel QR code; the previous Runtime/OTA error no longer appears and the app loads successfully on Android.
- Action items / follow-up:
  - None at this time. If you later publish OTA updates, ensure the SDK versions remain compatible with your target Expo Go or custom clients.

### Notes — Why tunnel mode fixed it
- Tunnel exposes your local dev server on a stable `exp.direct` URL, bypassing LAN/router firewalls, NAT, and flaky local DNS/discovery. Expo Go connects over HTTPS/WebSocket to that public endpoint reliably.
- Using `--clear` ensures Metro serves a fresh bundle built against the updated SDK (54.0.21), avoiding stale caches that could trigger runtime/version mismatches.
- With `updates.enabled: false` in `app.json`, Expo Go doesn’t attempt to fetch OTA updates during development, eliminating remote download attempts that previously failed when versions diverged.


## 2025-10-31 — Navigation header restored on Android
- Author: Assistant (on behalf of repo maintainer)
- Summary:
  - Initialized `react-native-gesture-handler` and `react-native-screens` in the root component to fix the missing stack header on Android devices.
  - Wrapped the app with `GestureHandlerRootView` and `SafeAreaProvider` to ensure proper native gesture handling and safe-area padding.
- Files changed:
  - `App.tsx`
- Verification:
  - `npx expo start --clear` (recommended) then load the app in Expo Go on Android; stack navigator headers now render with the configured styling.
- Action items / follow-up:
  - None.

## 2025-10-30 — LOG.md created; .gitignore update proposed (pending application)
- Author: Assistant (on behalf of repo maintainer)
- Summary:
  - Created this `LOG.md` to centralize change logs and debugging records.
  - Proposed and documented a comprehensive `.gitignore` to be applied to the repository.
  - Note: I could not write files to the repository automatically from here. Please apply the `.gitignore` patch below (or ask me to apply it if you enable me to write directly).
- Files created:
  - `Aigenapp/LOG.md` (this file, to be committed by you)
- Files to be updated (proposed):
  - `.gitignore` (root)
- Proposed `.gitignore` content (please copy into `./.gitignore` or let me commit it for you):

  ```
  # Node dependencies
  node_modules/
  .pnpm-store/
  .pnp.*

  # Expo / React Native / build artifacts
  .expo/
  .expo-shared/
  web-build/
  dist/
  build/
  android/app/build/
  ios/build/
  ios/Pods/
  ios/Podfile.lock
  expo-env.d.ts

  # Generated native folders (managed workflow)
  android/
  ios/

  # Metro / packager
  .metro-cache/
  .metro-health-check*
  /tmp/metro-*

  # TypeScript build cache
  *.tsbuildinfo

  # Environment / secret files
  .env
  .env.*
  .env.local
  .env.*.local

  # Key stores / signing keys
  *.jks
  *.keystore
  *.p12
  *.p8
  *.pem
  *.key
  *.mobileprovision

  # Editor directories and files
  .vscode/
  .idea/
  *.sublime-workspace
  *.sublime-project

  # OS files
  .DS_Store
  Thumbs.db

  # Logs
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  pnpm-debug.log*

  # Test coverage and caches
  coverage/
  .vitest/
  jest-cache/
  .nyc_output/

  # Temporary / local
  *.tmp
  *.log
  *.swp
  *.swo
  *.orig.*

  # Gradle / Android local config
  .gradle/
  **/gradle-wrapper.jar
  /local.properties

  # Xcode
  *.xcuserdata/
  *.xcworkspace/
  xcuserdata/

  # Misc
  .vscode-test/
  ```

- Recommended cleanup commands (run locally in the repo root after adding the `.gitignore`):
  - Stage the new `.gitignore`:
    - `git add .gitignore`
  - Untrack already-committed build/artifact folders (adjust the list as necessary to match what is currently tracked):
    - `git rm -r --cached node_modules .expo android ios web-build build dist coverage`
  - Commit:
    - `git commit -m "Update .gitignore: ignore build artifacts, node_modules, secrets, and editor files"`
  - Push to remote:
    - `git push`

- Action items:
  1. Apply the `.gitignore` content above to `./.gitignore` and run the cleanup commands, OR allow me to apply the change if you enable me to write to the repo.
  2. After the `.gitignore` is applied, I will append this `LOG.md` entry to record that the change has been performed.

---

## 2025-10-28 — Debugging Session Summary
(Detailed record of the debugging session; consolidated here as the canonical source.)

### Initial Issues
1. App crashed in Expo Go with error:
   - "Uncaught Error: java.io.IOException: Failed to download remote update"
   - App worked in web but failed on Android device
2. Missing navigation header in Android (blue "My Profile" header visible in web but not on device)

### Solutions Implemented

#### 1. Remote Update Crash Fix
- Root Cause: Expo Go attempting to download OTA updates during development
- Solution: Disabled updates in `app.json`:
  ```json
  {
    "expo": {
      "updates": {
        "enabled": false,
        "fallbackToCacheTimeout": 0
      }
    }
  }
  ```
- Additional Step: Switched to Tunnel mode for reliable device connection
  ```bash
  npx expo start --tunnel --clear
  ```

#### 2. Navigation Dependencies
- Installed required native navigation packages:
  ```bash
  npx expo install react-native-screens react-native-gesture-handler
  ```

#### 3. Debugging Process
1. Isolated app components:
   - Temporarily rendered `ProfileScreen` directly (bypassing navigation)
   - Confirmed issue was navigation-related when direct rendering worked
2. Restored navigation setup:
   - Reverted `App.tsx` to use `AppNavigator`
   - Added native dependencies for React Navigation

### Follow-up
- Navigation header fix was applied on 2025-10-31 (see entry above). No pending items from this session.

### Development Tips
1. For device testing:
   - Use Tunnel mode if LAN connection fails
   - Keep updates disabled during development
   - Ensure all React Navigation native dependencies are installed
2. Platform differences:
   - Web may show navigation elements that require additional setup on native platforms
   - Some styles (like cursor: 'pointer') are web-only

### Related Files Modified (during that debugging session)
- `app.json`: Added updates configuration
- `App.tsx`: Temporary isolation testing, then restored navigation
- `package.json`: Added navigation dependencies

### Useful Commands from the Session
```bash
# Clear cache and start with tunnel
npx expo start --tunnel --clear

# Install navigation dependencies
npx expo install react-native-screens react-native-gesture-handler
```

---

## Notes on Process and Future Logging
- This `LOG.md` is the canonical file for recording debugging sessions, proposals, and applied changes.
- When a change is applied and verified, the entry will be updated to reflect status: `Proposed` → `Applied` with date and committer details.
- If you want me to continue applying approved patches directly, enable repository write access for me; otherwise I will continue to prepare patches and instructions for you to apply locally.

--- 

## How to append to this log
- When a change is applied and approved, append a new entry at the top with:
  - Date
  - Short title
  - Details
  - Files changed
  - Commands run / verification steps
  - Approval note (who approved)

---

End of log (current).