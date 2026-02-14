# Suraj Patil - Advanced Portfolio Website

## Project Overview

This project is a personal portfolio website designed to showcase personal information, skills, projects, resume details, and contact information. The objective is to create a clean, user-friendly, visually appealing, and well-structured web page using HTML5, semantic elements, CSS, and JavaScript.

**Enhanced with advanced CSS techniques:** The website now implements CSS Grid, Flexbox, CSS variables, smooth animations, BEM methodology, and dark/light theme switching for a modern, professional appearance.

## 🎯 Project Objectives

✅ Showcase personal and professional details  
✅ Demonstrate understanding of HTML5, semantic tags, CSS, and JavaScript  
✅ Implement internal navigation  
✅ Create a validated contact form  
✅ Apply CSS styling for layout, animations, and responsiveness  
✅ Add JavaScript-based interactivity and dynamic content  
✅ Organize content in a structured and accessible manner  
✅ **Implement CSS Grid and Flexbox for advanced layouts**  
✅ **Apply CSS variables for centralized theme management**  
✅ **Create smooth animations and transitions**  
✅ **Implement dark/light theme switching functionality**  
✅ **Follow BEM methodology for CSS organization**  

## 💻 Technologies Used

### Core Technologies
- **HTML5** - Semantic markup with proper structure
- **CSS3** - Advanced techniques:
  - CSS Grid for complex layouts
  - Flexbox for component alignment
  - CSS Custom Properties (Variables)
  - Keyframe animations and transitions
  - Advanced selectors and pseudo-elements
  - Media queries for responsiveness
  - BEM naming convention
- **JavaScript** - Vanilla JS without external dependencies:
  - Form validation and error handling
  - DOM manipulation
  - Event listeners and handlers
  - LocalStorage for theme persistence
  - Dynamic content generation
  - Scroll interactions

### Libraries & Resources
- **Font Awesome 6.5.0** - Icon library for social links and UI elements
- **Google Fonts (Poppins)** - Modern, readable typography
- **Browser APIs** - LocalStorage, Fetch, Date/Time

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css              # Original styles (preserved)
├── script.js              # Core JavaScript functionality
├── css/
│   ├── main.css           # Main styles with CSS variables & BEM
│   ├── layout.css         # CSS Grid and Flexbox layouts
│   ├── animations.css     # Keyframe animations & transitions
│   └── theme.css          # Theme-specific styles (optional)
├── js/
│   └── theme-switcher.js  # Dark/light theme toggle
├── images/                # Project images and profile photo
├── screenshots/           # Portfolio screenshots
└── README.md              # This file
```

## 🎯 CSS Variables Reference

### Colors
```css
--color-primary: #22d3ee           /* Cyan - Primary accent */
--color-primary-dark: #06b6d4      /* Darker cyan */
--color-primary-light: #67e8f9     /* Lighter cyan */
--color-bg-dark: #020617           /* Dark background */
--color-bg-darker: #0f172a         /* Darker background */
--color-bg-card: #0a0d0e           /* Card background */
--color-text-primary: #e5e7eb      /* Main text */
--color-text-secondary: #9ca3af    /* Secondary text */
--color-error: #ef4444             /* Error messages */
```

### Spacing
```css
--spacing-xs: 0.25rem    /* 4px */
--spacing-sm: 0.5rem     /* 8px */
--spacing-md: 1rem       /* 16px */
--spacing-lg: 1.5rem     /* 24px */
--spacing-xl: 2rem       /* 32px */
--spacing-2xl: 3rem      /* 48px */
--spacing-3xl: 4rem      /* 64px */
```

### Typography
```css
--font-family: 'Poppins', sans-serif
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-base: 16px
--font-size-lg: 18px
--font-size-xl: 22px
--font-size-2xl: 28px
--font-size-3xl: 32px
--font-weight-light: 300
--font-weight-normal: 400
--font-weight-semibold: 600
--font-weight-bold: 700
```

### Transitions
```css
--transition-fast: 0.2s ease
--transition-base: 0.3s ease
--transition-slow: 0.4s ease
```

### Border Radius
```css
--radius-sm: 4px
--radius-md: 6px
--radius-lg: 10px
--radius-xl: 14px
--radius-full: 50%
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-base: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-glow: 0 0 20px var(--color-primary)
--shadow-glow-md: 0 0 30px rgba(26, 214, 243, 0.4)
```

## 🎬 Available Animations

### Keyframe Animations
- `fadeUp` - Fade in with upward movement
- `fadeIn` - Simple fade-in effect
- `slideDown` - Slide down from top
- `slideRight` - Slide in from left
- `slideLeft` - Slide in from right
- `scaleIn` - Scale up while fading in
- `bounce` - Bouncing effect
- `pulse` - Pulsing opacity
- `glow` - Glowing box shadow
- `rotate` - 360-degree rotation
- `swing` - Swinging motion
- `float` - Floating up and down
- `heartbeat` - Heartbeat effect
- `shimmer` - Loading shimmer effect

### Animation Utility Classes
```html
<div class="animate--fade-up">Fades up on load</div>
<div class="animate--bounce">Bounces infinitely</div>
<div class="hover-glow">Glows on hover</div>
<div class="hover-lift">Lifts on hover</div>
<div class="hover-scale">Scales on hover</div>
```

### Staggered Animations
```html
<div class="stagger-item">Item 1 - 0.1s delay</div>
<div class="stagger-item">Item 2 - 0.2s delay</div>
<div class="stagger-item">Item 3 - 0.3s delay</div>
```

## 🎨 BEM Naming Convention

The project follows BEM (Block Element Modifier) methodology:

```css
/* Block - Main component */
.project-card { }

/* Element - Part of block */
.project-card__title { }
.project-card__image { }
.project-card__button { }

/* Modifier - Variation */
.project-card--featured { }
.form__input--error { }
```

## 📱 Responsive Breakpoints

- **Mobile First Approach** - Base styles for mobile (< 480px)
- **Tablet** - Adjustments for 481px - 768px
- **Desktop** - Full experience for 769px - 1024px
- **Large Desktop** - Optimized for 1025px+

```css
@media (max-width: 480px) {
    /* Mobile styles */
}

@media (max-width: 768px) {
    /* Tablet styles */
}

@media (min-width: 1024px) {
    /* Desktop styles */
}
```

## 🌙 Theme Switching

The theme switcher automatically:
- Detects system preference on first visit
- Saves preference to localStorage
- Smoothly transitions between themes
- Updates all CSS variables based on theme

### Toggle Theme
Click the moon/sun icon in the navbar to switch themes.

### Customizing Themes
Edit `js/theme-switcher.js` and update the `updateThemeColors()` method:

```javascript
if (theme === this.THEME_LIGHT) {
    root.style.setProperty('--color-bg-dark', '#ffffff');
    root.style.setProperty('--color-text-primary', '#1e293b');
    // ... more colors
}
```

## 🔧 Customization Guide

### Change Primary Color
Update the CSS variable in `:root`:
```css
:root {
    --color-primary: #YOUR_COLOR;
}
```

### Modify Spacing
Update spacing variables for a different layout feel:
```css
:root {
    --spacing-lg: 2rem;  /* Increase from 1.5rem */
}
```

### Add New Animation
1. Create keyframes in `css/animations.css`:
```css
@keyframes myAnimation {
    from { /* start state */ }
    to { /* end state */ }
}
```

2. Add utility class:
```css
.animate--my-animation {
    animation: myAnimation 0.6s ease forwards;
}
```

## 🚀 Performance Features

- **CSS-only animations** - No JavaScript animation libraries needed
- **Will-change optimization** - Proper performance hints for animated elements
- **Reduced motion support** - Respects `prefers-reduced-motion` for accessibility
- **Optimized transitions** - Using `transform` and `opacity` for smooth 60fps animations
- **Minimal JavaScript** - Only essential functionality with vanilla JS
- **Efficient DOM queries** - Cached selectors for better performance

## ♿ Accessibility

- **ARIA labels** - Proper labels for interactive elements
- **Semantic HTML** - Proper heading hierarchy and structure
- **Color contrast** - WCAG compliant color combinations
- **Keyboard navigation** - Full keyboard support for all interactive elements
- **Focus states** - Visible focus indicators
- **Reduced motion** - Respects user's motion preferences
- **Alt text** - Descriptive image descriptions

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Getting Started

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Open in Browser
Simply open `index.html` in your preferred browser:
```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### 3. Customize
- Edit `index.html` to add your content
- Update images in the `images/` folder
- Modify colors via CSS variables
- Update personal information throughout

## 📝 File Descriptions

### `index.html`
Main HTML structure with semantic sections for home, about, projects, resume, and contact. Contains all content and form elements.

### `style.css`
Original styles (preserved for reference). Contains foundational styling for all sections.

### `script.js`
Core JavaScript functionality including:
- Form validation with error handling
- Dynamic greeting based on time of day
- Navigation highlighting on click
- Scroll-to-top button functionality
- Project card hover interactions
- DOM manipulation for interactive elements

### `css/main.css`
Core styling with CSS variables, BEM classes, typography, and component styles. Includes all color definitions and responsive design rules for all sections.

### `css/layout.css`
CSS Grid and Flexbox layouts with utility classes for responsive design. Mobile-first approach with progressive enhancement. Includes grid templates and flex utilities.

### `css/animations.css`
Keyframe animations and transition utilities for smooth, professional movement and effects. Includes staggered animations and hover effects.

### `js/theme-switcher.js`
Dark and light theme toggle functionality with localStorage persistence and smooth transitions between themes.

## 🎯 Usage Examples

### Using CSS Variables
```css
/* Override colors anywhere in your CSS */
:root {
    --color-primary: #your-color;
    --spacing-lg: 2rem;
}
```

### Using Grid Utilities
```html
<div class="grid grid--3-col grid--gap-lg">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>
```

### Using Flexbox Utilities
```html
<div class="flex flex--center flex--gap-md">
    <button>Button 1</button>
    <button>Button 2</button>
</div>
```

### Using Animations
```html
<div class="animate--fade-up">Content fades up on load</div>
<div class="hover-glow">Glows on hover</div>
```

## 🔗 Related Resources

- [MDN - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [BEM Methodology](https://en.bem.info/methodology/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 📧 Contact Information

- **Email:** surajpatil2645@gmail.com
- **Phone:** +91 72188 30209
- **Location:** Pune, Maharashtra, India
- **LinkedIn:** [Suraj Patil](https://www.linkedin.com/in/suraj-patil-52a0b7287/)
- **GitHub:** [SurajPatil2645](https://github.com/SurajPatil2645)

## 📄 License

This portfolio project is open source and available for personal and educational use.

## ✨ Credits

- Font: [Poppins](https://fonts.google.com/specimen/Poppins)
- Icons: [Font Awesome](https://fontawesome.com/)
- Design Inspiration: Modern portfolio design best practices
- Built with vanilla HTML, CSS, and JavaScript

---