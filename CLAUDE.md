# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page built for Paulo André Collet's Instagram authority course. It's a single-page marketing site featuring a sales funnel with multiple sections, testimonials, FAQs, and payment integration.

## Development Commands

- `npm run dev` - Start development server with Turbopack (fastest option)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Font System
The project uses multiple Google Fonts configured in `src/app/layout.tsx`:
- **DM Sans** (`--font-dm-sans`) - weights: 400, 500, 700
- **Manrope** (`--font-manrope`) - weights: 300, 500, 700 (primary body font)
- **Poppins** (`--font-poppins`) - weights: 300, 400, 600
- **Sora** (`--font-sora`) - weights: 400, 600, 700

Use CSS classes: `.sans`, `.manrope`, `.poppins`, `.sora` to apply specific fonts.

### Styling System
- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `src/app/globals.css` for:
  - Brand color: `#8EF27E` (primary green)
  - Background: `#031A09` (dark green)
  - Button hover animations (tremor + scale effects)
  - Custom scrollbar styling
- **Global button class**: `.button` adds custom shadow styling

### Component Structure
All components are in `src/app/components/` and follow these patterns:
- Use `'use client'` directive for interactive components
- Responsive design with mobile-first approach using Tailwind breakpoints
- Consistent CTA button styling and behavior
- Smooth scrolling navigation using `scrollIntoView()`

### Key Components
- **MainSection** - Hero with embedded YouTube video and mute/unmute functionality
- **ProblemSection**, **SolutionSection** - Content sections with animations
- **ImageCarousel** - Uses Swiper.js for testimonial/proof carousels  
- **CountdownTimer** - Time-sensitive offer components
- **Questions** - FAQ accordion functionality

### Analytics & Tracking
The site includes multiple tracking scripts in `src/app/page.tsx`:
- Facebook Pixel (ID: 2106196856417598)
- Microsoft Clarity (ID: qzo3zol10m)
- UTMify for UTM parameter tracking

### Assets
- Images stored in `src/images/` 
- Uses Next.js Image component for optimization
- Background elements using `Ellipse bg.svg` with opacity and blur effects

## Development Notes

- Components use TypeScript with proper typing
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All interactive elements have hover states and animations
- YouTube embeds use autoplay with initial mute state
- The layout includes decorative background ellipses positioned absolutely