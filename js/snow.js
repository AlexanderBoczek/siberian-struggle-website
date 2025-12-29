/**
 * Enhanced Snowfall Effect
 * - Dynamic snow accumulation on UI elements
 * - Subtle wind drift with occasional gusts
 * - Responsive flake count
 */

// Snow Accumulator Class
class SnowAccumulator {
    constructor() {
        this.piles = [];
        this.maxPileHeight = 12;
        this.growthInterval = null;
        this.isPageVisible = true;
    }

    // Register all target elements for snow accumulation
    registerElements() {
        const selectors = [
            '.nav',
            '.btn',
            '.newsletter-btn',
            '.feature-card',
            '.screenshot-item',
            '.devlog-entry-home',
            '.devlog-entry',
            '.cookie-btn'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                this.addPileToElement(element);
            });
        });
    }

    // Add a snow pile div to an element
    addPileToElement(element) {
        // Skip if already has a pile
        if (element.querySelector('.snow-pile')) return;

        // Ensure element has relative positioning for absolute child
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.position === 'static') {
            element.style.position = 'relative';
        }

        const pile = document.createElement('div');
        pile.className = 'snow-pile';
        element.appendChild(pile);

        this.piles.push({
            element: pile,
            currentHeight: 0,
            maxHeight: this.maxPileHeight + (Math.random() * 4 - 2) // Vary max height slightly
        });
    }

    // Start growing snow piles over time
    startGrowth() {
        // Grow piles every 3 seconds
        this.growthInterval = setInterval(() => {
            if (!this.isPageVisible) return;

            this.piles.forEach(pile => {
                if (pile.currentHeight < pile.maxHeight) {
                    // Random growth amount between 0.3 and 0.6 pixels
                    const growth = 0.3 + Math.random() * 0.3;
                    pile.currentHeight = Math.min(pile.currentHeight + growth, pile.maxHeight);
                    pile.element.style.height = pile.currentHeight + 'px';
                }
            });
        }, 3000);

        // Handle page visibility
        document.addEventListener('visibilitychange', () => {
            this.isPageVisible = !document.hidden;
        });
    }

    // Initialize accumulation system
    init() {
        this.registerElements();
        this.startGrowth();
    }
}


// Get appropriate flake count based on device
function getFlakeCount() {
    const isMobile = window.innerWidth < 768;
    return isMobile ? 50 : 80;
}

// Drift patterns for variety
const driftPatterns = ['drift', 'drift2', 'drift3'];

// Create enhanced snowfall
function createEnhancedSnowfall() {
    const snowfall = document.getElementById('snowfall');
    if (!snowfall) return;

    const flakeCount = getFlakeCount();

    for (let i = 0; i < flakeCount; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.innerHTML = '&#10052;'; // Snowflake character

        // Random horizontal position
        flake.style.left = Math.random() * 100 + '%';

        // Random fall duration (10-20 seconds)
        const fallDuration = Math.random() * 10 + 10;

        // Random drift pattern and duration
        const driftPattern = driftPatterns[Math.floor(Math.random() * driftPatterns.length)];
        const driftDuration = Math.random() * 3 + 2; // 2-5 seconds

        // Apply dual animation
        flake.style.animation = `fall ${fallDuration}s linear infinite, ${driftPattern} ${driftDuration}s ease-in-out infinite`;

        // Random animation delay (stagger start)
        flake.style.animationDelay = `${Math.random() * 10}s, ${Math.random() * 2}s`;

        // Random size for depth effect (less variation: 0.5-0.9rem)
        flake.style.fontSize = (Math.random() * 0.4 + 0.5) + 'rem';

        // Consistent opacity (less variation: 0.4-0.6)
        flake.style.opacity = Math.random() * 0.2 + 0.4;

        snowfall.appendChild(flake);
    }
}

// Handle window resize - recreate snowflakes if crossing mobile/desktop threshold
let lastFlakeCount = 0;
function handleResize() {
    const newCount = getFlakeCount();
    if (newCount !== lastFlakeCount) {
        const snowfall = document.getElementById('snowfall');
        if (snowfall) {
            // Clear existing snowflakes
            snowfall.innerHTML = '';
            createEnhancedSnowfall();
            lastFlakeCount = newCount;
        }
    }
}

// Debounced resize handler
let resizeTimeout;
function debouncedResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 200);
}

// Main initialization function
function initEnhancedSnowfall() {
    // Create snowflakes
    createEnhancedSnowfall();
    lastFlakeCount = getFlakeCount();

    // Initialize snow accumulation
    const accumulator = new SnowAccumulator();
    accumulator.init();

    // Handle resize
    window.addEventListener('resize', debouncedResize);
}

// Export for use in HTML
window.initEnhancedSnowfall = initEnhancedSnowfall;
