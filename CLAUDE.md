# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Development Commands

- **Start development server**: `deno task dev` - Runs the app with file
  watching and auto-reload
- **Build for production**: `deno task build` - Creates optimized production
  build
- **Run production server**: `deno task start` - Starts the production server
- **Check code quality**: `deno task check` - Runs formatting, linting, and type
  checking
- **Update Fresh**: `deno task update` - Updates Fresh framework to latest
  version

## Architecture

This is a **Fresh + GSAP** project using Deno runtime. Fresh is a web framework
for Deno that provides server-side rendering with islands architecture.

### Key Technologies

- **Runtime**: Deno (not Node.js)
- **Framework**: Fresh (Deno's full-stack web framework)
- **Frontend**: Preact with JSX precompilation
- **Styling**: TailwindCSS
- **Animation**: GSAP (npm:gsap@^3.13.0)
- **State**: Preact Signals

### Project Structure

- `main.ts` - Application entry point and route setup
- `dev.ts` - Development server with TailwindCSS plugin
- `routes/` - File-based routing (SSR pages)
- `islands/` - Client-side interactive components
- `components/` - Shared UI components (server-rendered)
- `static/` - Static assets served directly

### Fresh Islands Architecture

- **Routes** (`routes/`) are server-rendered by default
- **Islands** (`islands/`) are client-side interactive components that hydrate
  on the browser
- **Components** (`components/`) are reusable server-rendered components
- Islands should be used sparingly for interactivity; components for static UI

### State Management

Uses `createDefine<State>()` from Fresh for type-safe middleware and handlers.
The global `State` interface is defined in `utils.ts`.

### Styling

TailwindCSS is configured to scan `{routes,islands,components}/**/*.{ts,tsx}`
files. The config is minimal and uses default Tailwind classes.
