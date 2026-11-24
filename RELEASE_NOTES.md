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
