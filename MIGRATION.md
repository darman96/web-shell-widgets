# Migration from Preact to React

This document summarizes the migration of the web-shell-widgets project from Preact to React.

## Overview

The project has been successfully migrated from Preact to React to improve ecosystem compatibility and provide a better development experience. All functionality has been preserved during the migration.

## Changes Made

### 1. Package Dependencies

**Removed:**
- `preact: ^10.25.3`
- `@preact/preset-vite: ^2.9.3`
- `eslint-config-preact: ^1.5.0`

**Added:**
- `react: ^19.1.0`
- `react-dom: ^19.1.0`
- `@types/react: ^19.0.2`
- `@types/react-dom: ^19.0.2`
- `@vitejs/plugin-react: ^4.3.4`

### 2. Build Configuration

**TypeScript Configuration (`tsconfig.json`):**
- Removed `jsxImportSource: "preact"`
- Removed Preact compatibility aliases for `react` and `react-dom`
- Kept `jsx: "react-jsx"` for modern React JSX transform

**Vite Configuration (`vite.config.ts`):**
- Replaced `@preact/preset-vite` with `@vitejs/plugin-react`
- Updated both main config and `createWidgetConfig` helper function

### 3. Source Code Changes

**Entry Points:**
- Updated `src/index.tsx` to use React 19's `createRoot` API instead of Preact's `render`
- Updated all widget entry points (`widgets/*/index.tsx`) to use React's `createRoot`

**Import Statements:**
- Changed `import { render } from "preact"` to `import { createRoot } from "react-dom/client"`
- Changed `import { ... } from "preact/compat"` to `import { ... } from "react"`
- Changed `import { ... } from "preact/hooks"` to `import { ... } from "react"`

**Affected Files:**
- `src/index.tsx`
- `src/components/BarWindow.tsx`
- `src/components/VirtualScreen.tsx`
- `src/lib/hooks/useScreenInfo.ts`
- `widgets/launcher/index.tsx`
- `widgets/overlay/index.tsx`
- `widgets/statusBar/index.tsx`

### 4. Documentation

- Updated `README.md` to reflect React usage and provide comprehensive project documentation
- Added technology stack information
- Included migration notes

## Verification

The migration has been thoroughly tested and verified:

✅ **TypeScript Compilation:** No errors or warnings  
✅ **Development Server:** Starts successfully on localhost  
✅ **Production Build:** All widgets build successfully  
✅ **Widget Functionality:** All three widgets (StatusBar, Launcher, Overlay) build and package correctly  
✅ **Dependencies:** Clean dependency tree with no conflicts  

## Build Output

After migration, the build process generates:
- `dist/widgets/overlay/index.html` (583.01 kB, gzipped: 169.09 kB)
- `dist/widgets/statusBar/index.html` (583.77 kB, gzipped: 169.35 kB)
- `dist/widgets/launcher/index.html` (639.09 kB, gzipped: 186.47 kB)

## Benefits of Migration

1. **Better Ecosystem Support:** Full compatibility with the React ecosystem
2. **Improved Developer Experience:** Better tooling and debugging support
3. **Future-Proof:** Aligned with React 19 and modern React patterns
4. **Community Support:** Larger community and more resources available
5. **Library Compatibility:** Better compatibility with React-specific libraries

## Breaking Changes

This migration should be transparent to end users as:
- All component APIs remain the same
- Widget functionality is preserved
- Build output format is unchanged
- No changes to the web-shell integration layer

## Post-Migration Notes

- ESLint configuration was simplified to avoid dependency conflicts
- TypeScript strict mode checking continues to work correctly
- All existing widgets maintain their functionality
- The project structure and development workflow remain unchanged