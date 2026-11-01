# Floating settings panel

Implemented from Figma nodes 23:17 (panel) and 39:73 (toggle poses).

- `src/components/SettingsPanel.js` renders the 292px floating panel, appearance radio cards, switch, and English language selector. Preview images and icons are downloaded from Figma into `src/assets/settings/`.
- `src/components/SquashToggle.js` uses the original SVG endpoints with a CSS thumb during the transition. The canvas supplies a 12px resting thumb, a 16×12px stretched thumb, and intermediate positions. Figma returned no motion tracks or transition timing; the implementation uses an adjustable 420ms sequence, with a slight landing squash. This timing is an implementation choice, not exported Figma timing.
- Reduced-motion preferences skip the transition and show the selected endpoint immediately. Keyboard activation uses a native button with switch semantics.
- `src/hooks/usePortfolioSettings.js` owns preference updates and persistence. `src/utils/portfolioSettings.js` validates stored values, and `src/hooks/useAppearanceEffects.js` applies the CSS body attributes. `src/hooks/useNavigationState.js` coordinates panel dismissal and menu visibility.
- Appearance and animation preferences persist under the existing `portfolio-settings` localStorage key. Dark theme uses shared surface/text variables while retaining existing light-mode fallbacks.
- English is the only available language. Add translations before offering additional options.
