# Overview

This is a full-stack portfolio website for Raksha H V, a Computer Science Engineering student specializing in AI/ML. The application showcases personal projects, achievements, educational timeline, and provides contact functionality. Built as a modern single-page application with a React frontend and Express.js backend, it features a professional design system using shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for consistent theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Custom CSS animations and intersection observer for scroll-triggered effects

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: Hot reload with Vite middleware integration
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage)
- **API Design**: RESTful API structure with `/api` prefix
- **Error Handling**: Centralized error middleware with structured error responses

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for rapid development
- **Database Provider**: Neon Database (serverless PostgreSQL)

## Design System
- **Component Library**: Comprehensive UI component system with shadcn/ui
- **Theme System**: CSS variables for light/dark mode support
- **Typography**: Custom font stack with Inter, JetBrains Mono, and system fonts
- **Color Palette**: Consistent color system with semantic naming
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Development Experience
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Path Mapping**: Absolute imports with `@/` prefix for clean import paths
- **Hot Reload**: Development server with instant updates
- **Build Process**: Optimized production builds with code splitting

# External Dependencies

## Database & ORM
- **Drizzle ORM**: Type-safe database operations and schema management
- **Neon Database**: Serverless PostgreSQL hosting
- **connect-pg-simple**: Session storage for PostgreSQL

## UI Framework & Styling
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library with consistent design
- **Lucide React**: Icon library for UI elements

## Frontend Libraries
- **TanStack Query**: Server state management and data fetching
- **Wouter**: Lightweight client-side routing
- **React Hook Form**: Form state management with validation
- **date-fns**: Date manipulation and formatting

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

## Replit Integration
- **Vite Plugins**: Runtime error overlay, cartographer, and dev banner
- **Development Banner**: Replit-specific development indicators
- **Error Handling**: Enhanced error reporting in development environment