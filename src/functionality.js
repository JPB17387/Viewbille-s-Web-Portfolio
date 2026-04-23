document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Modern Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Dark Mode Theming Core
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Retrieve user's saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        // Fallback to check the system/OS preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            body.setAttribute('data-theme', 'dark');
            updateThemeIcon('dark');
        }
    }

    // Toggle mechanism
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // Helper to flip the icon depending on theme
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.setAttribute('data-lucide', 'sun');
        } else {
            themeIcon.setAttribute('data-lucide', 'moon');
        }
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // 3. Mobile Menu Handling Strategy
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navBar = document.getElementById('navigation-bar');
    
    if (mobileMenuBtn && navBar) {
        mobileMenuBtn.addEventListener('click', () => {
            navBar.classList.toggle('active');
            // Toggle hamburger and X icon logic
            const iconToUse = navBar.classList.contains('active') ? 'x' : 'menu';
            mobileMenuBtn.innerHTML = `<i data-lucide="${iconToUse}"></i>`;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        });

        // Whenever a link is clicked, close the mobile menu immediately
        const navLinks = navBar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navBar.classList.remove('active');
                mobileMenuBtn.innerHTML = `<i data-lucide="menu"></i>`;
                if (typeof lucide !== 'undefined') lucide.createIcons();
            });
        });
    }

    // 4. Smooth Scrolling Math Alignment
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip strict empty hash tags
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Determine the live height of sticky header for math offset
                const headerHeight = document.querySelector('#main-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Scroll Visual Progression Animation Tracker
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15 // Render visibility when object is at least 15% visible
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });

    // 6. Dynamic Header State Mapping 
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
