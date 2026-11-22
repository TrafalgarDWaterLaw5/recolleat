# Recolleat Build 44 — Local-first journal

## Improvements
- Returning users see a private home snapshot: this month's dated visits, rated dishes, cuisines and personal payments with explicit coverage.
- One-tap repeat logging at recently visited restaurants; the visit form defaults to today's local date.
- Useful dish prompt even for a one-restaurant collection, and one-click access to add it.
- Calendar empty states offer a direct log action.
- Gentle monthly backup reminder, a download shortcut and an explicit confirmation for destructive Replace imports.
- Optional browser persistent-storage request. This is **not** a backup and cannot prevent all data loss.
- Clarified that the 'Listed price' restaurant estimate differs from actual personal payments.
- Accessible table photo controls and consistent sizing for the new dashboard.
- Large inline CSS and JavaScript moved to two locally cached versioned files; existing component CSS still needs longer-term refactoring.

## Not added
No accounts, cloud backup, notifications, analytics tracking, remote receipt recognition or online bill splitting.

## Data and quality
No database schema changes. Back up the original journal before updating. Browser storage belongs to each website origin and device. Replacing site files on the **same URL** normally retains it, but a tested JSON export is still important.
This release is not verified with physical iPhone/Android devices or live user retention cohorts. Do not assign an evidence-based 8.5/10 score without those tests.

## Four-colour milestone progression
- Always available: Recolleat Classic, Black & White.
- Unlock at current saved restaurant count: 10 Plum & Champagne, 20 Electric Citrus, 30 Crimson Red, 40 Golden Hour.
- Drafts, dish counts, and repeat visits do not count; JSON imported saved restaurants do.
- On deleting enough restaurants to fall below a threshold, locked colours become unavailable and an affected selection safely falls back to Classic.
- Unlocks are based on persisted restaurant records, not an unprotected cosmetic counter. No account or internet needed.
- Large More-menu colour entry, previews, milestone explanation, home goal bar, and immediate progress updates.
