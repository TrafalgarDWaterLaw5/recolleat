# Recolleat Beta — Build 3.11

Internal test build; upgrade on the existing site origin. Export your journal before updating. Storage identifiers and existing records are retained.

- Table, Collection, My Profile, Calendar, More; universal journal search via swipe up or Search button.
- Cleaner More, quick log, profiles, cuisine rankings, list rows and legal footer.
- Save Meal / Receipt / Deep Dive at top; food score field for detailed visit edits.
- Collapsible personal lists, searchable picker, insertion position and hold-to-reorder grip (keyboard position fallback).
- The Bucket List reuses previously saved wishlist data; successful matching meal log removes the saved place.
- Photo fallback: dish, restaurant, compact placeholder.
- Home backup panel and Calendar standalone spending panel hidden; exports remain available.
- Offline edition has no account, friend or shared-list functionality.

Testing: source syntax, archive and isolated browser interactions with simulated storage. No live Supabase or production service worker verification.

## Prior release notes

# Recolleat Beta — Build 3.10 (27 November 2026)

Internal testing only. Export and verify a backup before deployment. Keep the existing website origin and database identifiers.

- Profile opens at Palate Code; editing is separate. The connected account panel is in Settings, with separate founder and official publishing routes.
- Legal footer on main pages. Calendar no longer shows 12-month spending trend.
- Table reset clears collection search/filter/sort only. Missing values sort last.
- Daily private flashbacks unlock one per ten distinct restaurant/dish combinations rated at least 8/10, maximum three. Selection rotates daily through a deterministically shuffled pool.
- Culinary Stamps shows total completed levels and the three closest next levels. Existing thresholds preserved.
- Similar saved restaurant suggestions, normalized local searches and clearer branch passport links. No fuzzy automatic merge.
- Connected only: 7-day personal feed visibility, persistent authorised reviews and lists, expired reaction restrictions, locally ranked feed or Latest, friend profile list filter. Official announcements persist until removed.
- Privacy and terms amended for beta and current data flows. Operator identity, retention schedules, provider contracts and applicable assessments remain release blockers.

Connected: apply backend/4_51_feed.sql after 4.50 before testing. No new tables. Existing roles and shares stay intact. Old personal feed items remain available to authorised friends on profiles. Expired personal reactions are removed in the migration and subsequently on reaction activity by their owner; no scheduled purge configured.

Deferred: Google billing, enhanced external search and global cap, bulk duplicate merge and international location redesign, photo sharing and complete design overhaul. Google remains disabled.

Checks: JavaScript syntax and static assets; isolated Chromium tests use simulated local storage. Normal browser navigation blocked in this environment, live database and multi-account verification required.

---

## Previous release notes

# Build 3.8

First-run illustrated onboarding (replay in My Profile); three profile sections; consistent system sans typography; swipe adjacent tabs; fixed signature gallery visibility and duplicate calendar log action; legacy backup weight preferences normalised safely with warning if invalid. Fully offline; no friend or account service. 

# Build 3.5 — 25 November 2026

Permanent home metrics, one home add action, service contrast, centered Collection metrics, wider calendar month selector, privacy wording, and separate median price with minimum spread for Palate Code. Price spread threshold is a product heuristic, not a significance test. Database unchanged. Future accounts: personalise greeting using authenticated display name; not implemented yet.

---

# Build 3.4 — Original local journal

Based on 3.3, not the 4.x social draft. Fresh UI styling and external Maps search copied independently. Location cards replace bubbles on all screens; photo editing uses the same existing local location store. Add icon uses symmetric SVG, with no generated glyph. No schema changes, new account service, Google API calls or journal upload. Existing application identity and icon images retained. Upload all root files, including the new v3-4 CSS/JS files, to the original repository. Export a backup first.

## Verification

Chromium with 94 simulated restaurants: 320, 360, 393, 412, 844 and 1280 px, seven destinations, plus geometry (0 px horizontal and vertical offset), all six palettes in both modes on Home and Places, local search and location photo editing/navigation. Synthetic test photos; no real Android or IndexedDB persistence test. No new backend.

## Previous release
# Recolleat — Build 3.3

24 November 2026 · Base: supplied Build 3.2. Local IndexedDB database version 7; unchanged app installation identity.

## Changes
- Home: equally sized Add restaurant (Quick Log) and New restaurant (full editor) buttons, full-width Scan receipt, six centered unnumbered statistics, smaller International label, centered disclosure titles without arrows.
- Dish data: one derived catalogue of dated visit dishes and undated review dishes. Ranked views include valid ratings only; counts distinguish all recorded dishes from rated dishes. Passport and desktop table show both sources. The full review shows existing visit dishes separately. Duplicate-name warnings are advisory, never delete or automatically merge existing records.
- Receipt workflow: selected items become editable Quick Log dish rows with prices and optional ratings. Cancelling a scan returns the in-memory form, preserving existing dishes, note, photo and payment state. Save & review saves once then opens the saved restaurant. Basic Quick Log drafts retain text, ratings and receipt prices; draft photos are still not persistent across a browser restart.
- Independent meal value and personal payment inputs with Same as meal value shortcuts; treated meals save zero payment. Existing unknown amounts remain unknown.
- Memories: rotates up to three eligible dated visits each local day (at least 30 days old), prioritizes anniversaries, refreshes after a date change or resume. With very few eligible visits, the selection may repeat; no invented memories.
- Cuisines: compact clickable ranking by mean or median overall restaurant rank, mean default unless a prior preference exists. Overview, restaurants and dishes pages, 210 ms incoming slide, swipe and button/keyboard navigation, reduced-motion support. Provisional cuisines remain separate.
- Hall of Flavour: simplified header, scrollable rows with compact score and rank, expandable long text and direct source editing.
- Install icon: crisp mint speech-bubble and utensils symbol, opaque emerald background, separate mask-safe icon. Root-level install assets and diagnostics retained. Manifest icon URLs versioned.
- Extra safeguards: missing score is not automatically converted to 0 or 8, photo-only migration check includes dish photos, confirmation before removing a detailed visit, Quick Log double-submit guard.

## Verification and limitations
- Chromium rendering with simulated storage, using a synthetic 94-restaurant collection, 24 visits and 121 recorded dishes (119 rated); 320, 360, 393, 412, 844 landscape and 1280 desktop widths for Home. Hall at 320, 393 and 844. No document horizontal overflow or reported JavaScript exceptions in the tested paths.
- Tested daily rotation and same-day stability; cuisine passport button and synthetic touch-swipe; both dish sources and unrated labels; visit edit preserves unknown payment; receipt cancel and continuation retain existing form values; receipt quantity £9.01 splits to £4.51 and £4.50; Save & review creates exactly one restaurant and one visit with three dishes.
- JavaScript syntax, CSS top-level parsing, unique HTML IDs, manifest icon dimensions, asset references, and ZIP integrity checked.
- The browser environment blocked real HTTP navigation. These tests use the actual rendering and application code with an in-memory test adapter, not an independent IndexedDB persistence or real-device test. Android launcher icon refresh, actual touch feel, receipt OCR support, offline service-worker update, migration and full accessibility across themes are not newly verified. Native receipt image recognition remains dependent on device/browser support.
- A complete CSS architecture refactor and actual usage/retention testing remain future work. No accounts, cloud database or additional online dependencies were introduced.

## Deployment
Export a JSON backup before replacing files. Extract the ZIP, upload all contents (including .assetsignore) to the existing GitHub repository root, and commit to main. Keep the existing Cloudflare configuration. Check /recolleat-release.txt and accept the app's update prompt when offered. Existing installed icons can refresh later than the app itself; avoid clearing site data or uninstalling merely to refresh the launcher icon.

## Build 3.7 — 26 November 2026
- Local-only baseline 3.5; approved logo, Profile navigation and paired More tiles.
- New logo for header, splash, favicon, home-screen icons; same storage schema and local data keys.
- Profile is one of five mobile tabs; Places and Dishes are equal adjacent tiles.
- Derived from verified offline 3.5; 3.6 already used for a separate experimental branch. No accounts or social functionality.


## Build 3.9 — local journal and profile refresh
- Original SVG profile banner patterns: Banana Club, Electric Citrus (yellow kiwis), Strawberry Fields, Golden Orchard. Unlocks 10/20/30/40; selection stays on device.
- Backup warning and status, last restaurant deletion undo (current page session only), independent Places results, undated records excluded from most-recent sort, seasonal January recap, removed permanent yearly finance and Log Again panels, removed stamp chips, larger local profile edit, logo returns Home.
- Visit mean mode, manual score preserved, explicit branch creation, group mean across branches, searchable ranked/unranked list selection with desktop drag and mobile arrow controls, local wishlist. Save & Review opens detailed editor after saving a single visit.
- Legal drafts updated; no new paid service, no cloud journal.
- Offline: no online accounts, social feed or server publishing.
- Checks: JS syntax and static references; isolated browser rendering and core synthetic tests with mocked persistence. Full hosted browser navigation blocked, no live SQL execution or device acceptance testing. Keep backups and do not release publicly until risk register and legal prerequisites are completed.
