# Radio Prophets Events - Design Guidelines

This document outlines the core styling and design guidelines for the Radio Prophets Events website, based on the existing home page and global CSS structure.

## 1. Theme Identity
- **Vibe**: Elegant Wedding Theme – Light, airy, and sophisticated.
- **Frameworks**: Next.js, Tailwind CSS, shadcn/ui.
- **Theme Color**: `#f8f6f3`

## 2. Typography
The website uses a mix of generic sans-serif for body text and elegant serif fonts for headings to create a sophisticated feel.

- **Sans-serif (Body)**: `Almarai`, `Geist` (`font-sans`). Used for paragraphs, buttons, and eyebrow labels.
- **Serif (Headings)**: `Libre Baskerville` (`font-serif`). Used for all major page headings and large stat numbers.
- **Eyebrow Labels**: `text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4`
  - High letter-spacing (tracking) is consistently used for small, uppercase labels above headings to create an airy feel.
- **Section Headings (H2)**: `font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance`
- **Body Text**: `text-muted-foreground leading-relaxed` (often `space-y-4` for multiple paragraphs).

## 3. Color Palette
Colors are defined using `oklch` in `app/globals.css`. It supports both light and dark modes, but defaults to the light, airy aesthetic.

- **Background**: `oklch(0.98 0.005 80)` (Off-white/light warm gray)
- **Foreground**: `oklch(0.18 0.02 50)` (Dark gray/black)
- **Primary**: `oklch(0.25 0.02 50)`
- **Accent**: `oklch(0.65 0.12 55)`
- **Muted Elements**: `bg-muted` and `text-muted-foreground` for subtle backgrounds and secondary text.

## 4. Layout & Spacing
- **Container Wrapper**: Most sections use a standard max-width wrapper to keep content centered:
  ```html
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">...</div>
  ```
- **Vertical Spacing**: Standard section padding is `py-24`.
- **Grids**: Often uses `grid lg:grid-cols-2 gap-16 items-center` for side-by-side image/text layouts.

## 5. Components
### Buttons
- Use shadcn/ui `<Button>`.
- **Sizing**: `size="lg"` is frequently used for primary calls to action.
- **Typography styling**: Always include `font-medium tracking-wide`.

### Imagery
- Images are primarily handled using `next/image` component.
- **Styling**: `object-cover` applied frequently.
- **Aspect Ratio Box**: Often wrapped in containers with fixed aspect ratios like `aspect-[4/5]` for portrait or `aspect-video` for landscape to ensure consistency.

### Hero Sections
- **Full Height**: `h-screen min-h-[600px]`.
- **Overlays**: Dark semi-transparent overlays (`bg-foreground/50`) are used over background images to ensure white text is readable.
- **Headings**: Specifically huge (`text-4xl sm:text-5xl md:text-6xl lg:text-7xl`) and `font-serif`.

## 6. General Best Practices for the Site
- Keep things **uncluttered**: Use ample white space (`py-24`, `gap-16`).
- **Text Balance**: Apply `text-balance` to headings to prevent orphaned words and create aesthetically pleasing line breaks.
- **Subtle Elegance**: Stick strictly to the defined CSS variables instead of ad-hoc utility colors.
