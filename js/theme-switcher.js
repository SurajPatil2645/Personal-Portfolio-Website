class ThemeSwitcher {
    constructor() {
        this.STORAGE_KEY = 'portfolio-theme';
        this.THEME_DARK = 'dark';
        this.THEME_LIGHT = 'light';
        this.init();
    }

    /**
     * Initialize theme switcher
     */
    init() {
        this.createThemeSwitcher();
        this.loadTheme();
        this.attachEventListeners();
    }

    /**
     * Create theme switcher button
     */
    createThemeSwitcher() {
        const themeSwitcher = document.createElement('button');
        themeSwitcher.classList.add('theme-switcher');
        themeSwitcher.setAttribute('aria-label', 'Toggle theme');
        themeSwitcher.innerHTML = `
            <span class="theme-switcher__icon">🌙</span>
        `;
        
        // Add to navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.appendChild(themeSwitcher);
        }
        
        this.themeSwitcher = themeSwitcher;
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        this.themeSwitcher.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
                this.loadTheme();
            });
        }
    }

    /**
     * Load and apply theme
     */
    loadTheme() {
        let theme = localStorage.getItem(this.STORAGE_KEY);

        // If no preference stored, check system preference
        if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches 
                ? this.THEME_DARK 
                : this.THEME_LIGHT;
        }

        this.applyTheme(theme);
    }

    /**
     * Apply theme to document
     */
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
        
        // Update icon
        const icon = this.themeSwitcher.querySelector('.theme-switcher__icon');
        if (icon) {
            icon.textContent = theme === this.THEME_DARK ? '☀️' : '🌙';
        }
        
        // Update theme colors
        this.updateThemeColors(theme);
    }

    /**
     * Toggle theme
     */
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || this.THEME_DARK;
        const newTheme = currentTheme === this.THEME_DARK ? this.THEME_LIGHT : this.THEME_DARK;
        this.applyTheme(newTheme);
    }

    /**
     * Update CSS variables based on theme
     */
    updateThemeColors(theme) {
        const root = document.documentElement;
        
        if (theme === this.THEME_LIGHT) {
            // Light theme colors
            root.style.setProperty('--color-bg-dark', '#ffffff');
            root.style.setProperty('--color-bg-darker', '#f8fafc');
            root.style.setProperty('--color-bg-card', '#f1f5f9');
            root.style.setProperty('--color-text-primary', '#1e293b');
            root.style.setProperty('--color-text-secondary', '#64748b');
        } else {
            // Dark theme colors
            root.style.setProperty('--color-bg-dark', '#020617');
            root.style.setProperty('--color-bg-darker', '#0f172a');
            root.style.setProperty('--color-bg-card', '#0a0d0e');
            root.style.setProperty('--color-text-primary', '#e5e7eb');
            root.style.setProperty('--color-text-secondary', '#9ca3af');
        }
    }
}

// Initialize theme switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});