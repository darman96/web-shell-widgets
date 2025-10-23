# Web Shell Widgets

A collection of desktop widgets built with React, TypeScript, and Vite for web-based shell environments.

## Overview

This project provides modular desktop widgets that can be embedded in web-based shell environments. Each widget is built as a standalone component that can be loaded independently.

## Available Widgets

- **StatusBar** - System status information display
- **Launcher** - Application launcher with search functionality
- **Overlay** - General-purpose overlay component

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
npm install
```

### Development

- `npm run dev` - Starts a dev server at http://localhost:5173/
- `npm run build` - Builds all widgets for production, emitting to `dist/`
- `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

### Building Individual Widgets

The build process automatically builds all widgets with their individual configurations. Each widget is packaged as a single HTML file containing all necessary JavaScript and CSS.

## Project Structure

```
src/
├── components/     # Shared React components
├── widgets/        # Widget implementations
├── lib/           # Utilities and hooks
├── theme/         # Chakra UI theme configuration
└── types/         # TypeScript type definitions

widgets/
├── launcher/      # Launcher widget entry point
├── overlay/       # Overlay widget entry point
└── statusBar/     # StatusBar widget entry point
```

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Chakra UI** - Component library
- **React Icons** - Icon library

## Widget Development

Each widget is a self-contained React component that can be developed and built independently. Widgets share common components and utilities from the `src/` directory.

To create a new widget:

1. Create a new directory in `widgets/`
2. Add an `index.tsx` entry point
3. Add an `index.html` file
4. Create a `vite.config.ts` using the `createWidgetConfig` helper

## Migration Notes

This project was recently migrated from Preact to React for better ecosystem compatibility and enhanced development experience.