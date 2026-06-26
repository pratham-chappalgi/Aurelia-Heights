/* ==========================================================================
   AURELIA HEIGHTS - CORE JAVASCRIPT & ANIMATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    /* ==========================================================================
       1. LENIS SMOOTH SCROLLING
       ========================================================================== */
    const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Heavy momentum ease
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false, // Turn off on mobile for native performance
        touchMultiplier: 2,
        infinite: false
    });

    // Update ScrollTrigger on scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Integrate with GSAP Ticker
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Bind navigation clicks to Lenis scroll-to
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            // Close mobile menu overlay if open
            const mobileMenu = document.querySelector('.mobile-menu-toggle');
            const mobileOverlay = document.querySelector('.mobile-nav-overlay');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileOverlay.classList.remove('active');
            }

            if (target === '#') {
                lenis.scrollTo(0);
            } else {
                lenis.scrollTo(target, { offset: -60 });
            }
        });
    });

    /* ==========================================================================
       2. CUSTOM CURSOR
       ========================================================================== */
    const cursor = document.getElementById("custom-cursor");
    const follower = document.getElementById("custom-cursor-follower");

    if (cursor && follower) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        window.addEventListener("mousemove", (e) => {
            gsap.to(cursor, { duration: 0.1, x: e.clientX, y: e.clientY, ease: "power2.out" });
            gsap.to(follower, { duration: 0.35, x: e.clientX, y: e.clientY, ease: "power3.out" });
        });

        // Interactive cursor triggers
        const interactives = document.querySelectorAll("a, button, select, input, textarea, .estate-card, .gallery-item");
        interactives.forEach(el => {
            el.addEventListener("mouseenter", () => {
                document.body.classList.add("hover-interactive");
            });
            el.addEventListener("mouseleave", () => {
                document.body.classList.remove("hover-interactive");
            });
        });
    }

    /* ==========================================================================
       3. PRELOADER & IMAGE CACHING
       ========================================================================== */
    const frameCount = 240;
    const frames = [];
    let loadedCount = 0;
    const preloader = document.getElementById("preloader");
    const loaderFill = document.getElementById("loader-fill");
    const loaderPercentage = document.getElementById("loader-percentage");

    // Preload signature image sequence
    function preloadImageSequence() {
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.onload = onAssetLoaded;
            img.onerror = onAssetLoaded; // Avoid blocking the site if an frame errors
            img.src = `ezgif-8b56f7980b868e0e-jpg/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
            frames.push(img);
        }
    }

    function onAssetLoaded() {
        loadedCount++;
        const progress = Math.min(100, Math.floor((loadedCount / frameCount) * 100));
        
        if (loaderFill) loaderFill.style.width = progress + '%';
        if (loaderPercentage) loaderPercentage.textContent = progress + '%';

        if (loadedCount === frameCount) {
            // Short delay for a high-end reveal feeling
            setTimeout(revealLandingPage, 500);
        }
    }

    function revealLandingPage() {
        if (!preloader) return;

        // Animate canvas to initial state so we don't start with a blank screen
        resizeCanvas();

        const timeline = gsap.timeline();

        // Slide Preloader Away
        timeline.to(preloader, {
            duration: 1.4,
            yPercent: -100,
            ease: "power4.inOut"
        });

        // Animate Header and Hero elements in
        timeline.from(".luxury-header", {
            duration: 1.2,
            y: -50,
            opacity: 0,
            ease: "power4.out"
        }, "-=0.6");

        timeline.from(".hero-tagline", {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.8");

        timeline.from(".hero-title", {
            duration: 1.2,
            y: 80,
            opacity: 0,
            ease: "power4.out"
        }, "-=0.8");

        timeline.from(".hero-subtitle", {
            duration: 1.2,
            y: 60,
            opacity: 0,
            ease: "power4.out"
        }, "-=1.0");

        timeline.from(".hero-desc", {
            duration: 1.2,
            y: 40,
            opacity: 0,
            ease: "power3.out"
        }, "-=1.0");

        timeline.from(".hero-cta-group", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power3.out"
        }, "-=1.0");

        timeline.from(".scroll-prompt-container", {
            duration: 1,
            opacity: 0,
            y: 20,
            ease: "power3.out",
            onComplete: () => {
                ScrollTrigger.refresh();
            }
        }, "-=0.5");
    }

    // Initialize asset preloading
    preloadImageSequence();

    /* ==========================================================================
       4. SIGNATURE CANVAS EVOLUTION ANIMATION
       ========================================================================== */
    const canvas = document.getElementById("transformation-canvas");
    const context = canvas ? canvas.getContext("2d") : null;
    let currentFrameIndex = 0;

    function resizeCanvas() {
        if (!canvas || !context) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        drawCanvasFrame(currentFrameIndex);
    }

    function drawCanvasFrame(index) {
        if (!canvas || !context || !frames[index]) return;
        
        const img = frames[index];
        if (!img.complete || img.naturalWidth === 0) return; // Wait for image to fully load

        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.naturalWidth / img.naturalHeight;
        
        let drawWidth, drawHeight, drawX, drawY;
        
        // Similar to object-fit: cover
        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            drawX = 0;
            drawY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            drawX = (canvas.width - drawWidth) / 2;
            drawY = 0;
        }
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }

    window.addEventListener("resize", resizeCanvas);

    // Canvas Transformation ScrollTrigger setup
    if (canvas) {
        const transSequence = { frame: 0 };
        
        gsap.to(transSequence, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: "#transformation",
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: true,
                onUpdate: (self) => {
                    currentFrameIndex = Math.floor(transSequence.frame);
                    drawCanvasFrame(currentFrameIndex);
                    
                    // Update bottom scroll progress bar
                    const fill = document.getElementById("trans-progress-fill");
                    if (fill) fill.style.width = (self.progress * 100) + "%";
                    
                    // Update Text states based on progression percentage
                    const progress = self.progress;
                    const phaseText = document.getElementById("phase-text");
                    const textWrap = document.getElementById("trans-text-wrap");
                    const completeUI = document.getElementById("trans-complete-ui");
                    
                    if (phaseText && textWrap && completeUI) {
                        if (progress < 0.3) {
                            phaseText.textContent = "PHASE 01: THE UNTOUCHED LAND";
                            gsap.to(textWrap, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
                            completeUI.classList.remove("visible");
                        } else if (progress >= 0.3 && progress < 0.75) {
                            phaseText.textContent = "PHASE 02: STRUCTURAL ELEVATION";
                            gsap.to(textWrap, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
                            completeUI.classList.remove("visible");
                        } else {
                            phaseText.textContent = "PHASE 03: THE COMPLETED ICON";
                            gsap.to(textWrap, { opacity: 0, y: -20, duration: 0.3, ease: "power2.out" });
                            
                            // High-end reveal at the very end
                            if (progress > 0.90) {
                                completeUI.classList.add("visible");
                            } else {
                                completeUI.classList.remove("visible");
                            }
                        }
                    }
                }
            }
        });
    }

    /* ==========================================================================
       5. GENERAL GSAP SCROLL TRIGGERS
       ========================================================================== */
    
    // Header shadow change on scroll
    ScrollTrigger.create({
        start: "top -50px",
        onEnter: () => document.querySelector(".luxury-header").classList.add("scrolled"),
        onLeaveBack: () => document.querySelector(".luxury-header").classList.remove("scrolled")
    });

    // Hero Section Parallax elements
    gsap.to(".hero-video", {
        scale: 1.15,
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to(".hero-content-wrapper", {
        opacity: 0,
        y: -80,
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "80% top",
            scrub: true
        }
    });

    // Brand Story Parallax Image
    gsap.to(".parallax-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
            trigger: ".story-image-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Brand Story Stat Count Up
    gsap.utils.toArray(".stat-num").forEach(stat => {
        const val = parseInt(stat.getAttribute("data-val"));
        gsap.to(stat, {
            innerText: val,
            duration: 2.2,
            snap: { innerText: 1 },
            ease: "power4.out",
            scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
    });

    // Featured Properties entrance animations
    gsap.from(".estate-card", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        stagger: 0.2,
        ease: "power4.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".estates-grid",
            start: "top 85%"
        }
    });

    // Land Intro Showcase Image reveal
    gsap.from(".land-showcase-image", {
        y: 60,
        opacity: 0,
        scale: 0.97,
        duration: 1.4,
        ease: "power4.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".land-showcase-image",
            start: "top 85%"
        }
    });

    // Land Feature Cards stagger reveal
    gsap.from(".land-feature-card", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".land-features-grid",
            start: "top 85%"
        }
    });

    // Land Highlights Row reveal
    gsap.from(".land-highlights-row", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".land-highlights-row",
            start: "top 90%"
        }
    });

    // Amenities Grid stagger reveal
    gsap.from(".amenity-card", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".amenities-grid",
            start: "top 85%"
        }
    });

    // Cinematic Video Scrubbing Trigger
    const scrubVideoEl = document.getElementById("scrub-video-el");
    if (scrubVideoEl) {
        ScrollTrigger.create({
            trigger: "#video-scrub",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                if (scrubVideoEl.duration && !isNaN(scrubVideoEl.duration)) {
                    scrubVideoEl.currentTime = self.progress * scrubVideoEl.duration;
                }
                // Cross-fade local day/night fallback images based on progress
                const nightFallback = document.getElementById("scrub-fallback-night");
                if (nightFallback) {
                    nightFallback.style.opacity = self.progress;
                }
            }
        });

        // Fade in video once first frame loaded to replace fallback image seamlessly
        scrubVideoEl.addEventListener("loadeddata", () => {
            gsap.to(scrubVideoEl, { opacity: 1, duration: 0.8 });
        });
    }

    // Interior Showcase animations
    gsap.from(".interior-main-image", {
        x: -80,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".interiors-grid",
            start: "top 80%"
        }
    });

    gsap.from(".interior-detail-block", {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".interiors-grid",
            start: "top 80%"
        }
    });

    gsap.from(".interior-spec", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".interior-specs-grid",
            start: "top 90%"
        }
    });

    gsap.from(".secondary-img-wrap", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
            trigger: ".interior-secondary-images",
            start: "top 90%"
        }
    });

    // Gallery elements fade & scale reveal
    gsap.utils.toArray(".gallery-item").forEach(item => {
        gsap.from(item, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: item,
                start: "top 90%"
            }
        });
    });

    // Investment Metric bar progressions
    gsap.utils.toArray(".metric-progress span").forEach(span => {
        const targetWidth = span.style.width;
        span.style.width = "0%"; // Reset initial state

        gsap.to(span, {
            width: targetWidth,
            duration: 1.8,
            ease: "power4.out",
            scrollTrigger: {
                trigger: span,
                start: "top 95%"
            }
        });
    });

    // Testimonials Card Rotations
    gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
        const offsetRotation = index % 2 === 0 ? -3 : 3;
        gsap.from(card, {
            rotation: offsetRotation,
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            clearProps: "transform,opacity,rotation",
            scrollTrigger: {
                trigger: card,
                start: "top 95%"
            }
        });
    });

    /* ==========================================================================
       6. MICRO INTERACTIONS (TILT & MAGNETICS & CONTACT)
       ========================================================================== */
    
    // 3D Card Mouse Tilt (featured estates & gallery)
    const tiltItems = document.querySelectorAll(".hover-tilt");
    tiltItems.forEach(item => {
        item.addEventListener("mousemove", (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const width = rect.width;
            const height = rect.height;
            const xc = width / 2;
            const yc = height / 2;
            const dx = x - xc;
            const dy = y - yc;
            
            // Limit tilt values to 6 degrees max
            const rotX = (dy / yc) * -6;
            const rotY = (dx / xc) * 6;
            
            gsap.to(item, {
                transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`,
                duration: 0.5,
                ease: "power3.out"
            });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                duration: 0.8,
                ease: "power3.out"
            });
        });
    });

    // Magnetic CTA Button Effect
    const magneticTargets = document.querySelectorAll(".magnetic-target");
    magneticTargets.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Move button slightly (40% offset strength)
            gsap.to(btn, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.35,
                ease: "power2.out"
            });
        });

        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            });
        });
    });

    // Inquiry Form Submission
    const inquiryForm = document.getElementById("inquiry-form-el");
    const successBox = document.getElementById("form-success-el");

    if (inquiryForm && successBox) {
        inquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Gather targets to fade
            const innerElements = inquiryForm.querySelectorAll("input, select, textarea, button, label, .form-row");
            
            gsap.to(innerElements, {
                opacity: 0,
                y: -20,
                stagger: 0.05,
                duration: 0.6,
                ease: "power3.inOut",
                onComplete: () => {
                    successBox.classList.add("active");
                    gsap.fromTo(successBox, 
                        { scale: 0.92, opacity: 0 }, 
                        { scale: 1, opacity: 1, duration: 1, ease: "power4.out" }
                    );
                }
            });
        });
    }

    /* ==========================================================================
       7. MOBILE NAVIGATION OVERLAY
       ========================================================================== */
    const mobileMenuBtn = document.querySelector(".mobile-menu-toggle");
    const mobileOverlay = document.querySelector(".mobile-nav-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    if (mobileMenuBtn && mobileOverlay) {
        mobileMenuBtn.addEventListener("click", () => {
            const isActive = mobileMenuBtn.classList.toggle("active");
            mobileOverlay.classList.toggle("active", isActive);
            
            // Prevent body scrolling when mobile menu is open
            if (isActive) {
                lenis.stop();
                gsap.from(".mobile-nav-link", {
                    opacity: 0,
                    y: 30,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power3.out"
                });
            } else {
                lenis.start();
            }
        });

        // Close menu when links clicked
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("active");
                mobileOverlay.classList.remove("active");
                lenis.start();
            });
        });
    }

    // Force ScrollTrigger refresh once all assets are fully loaded
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

    /* ==========================================================================
       8. CINEMATIC HERO VIDEO
       ========================================================================== */
    const heroVideo = document.getElementById("hero-cinematic-video");
    if (heroVideo) {
        // Fade in when enough data has loaded to play
        heroVideo.addEventListener("canplay", () => {
            heroVideo.classList.add("loaded");
        });
        
        // If it's already loaded (e.g. from cache)
        if (heroVideo.readyState >= 3) {
            heroVideo.classList.add("loaded");
        }

        // Accessibility: prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches) {
            heroVideo.pause();
            // The poster image set in HTML will act as the fallback
        }

        prefersReducedMotion.addEventListener('change', (e) => {
            if (e.matches) {
                heroVideo.pause();
            } else {
                heroVideo.play().catch(err => console.log("Autoplay prevented", err));
            }
        });
    }

    /* ==========================================================================
       9. FLOATING LUXURY NAVIGATION BAR CONTROLLER
       ========================================================================== */
    const floatNavContainer = document.querySelector(".floating-nav-container");
    const floatNavItems = document.querySelectorAll(".floating-nav-item");
    const floatIndicator = document.querySelector(".floating-nav-indicator");
    
    const navSections = [
        document.getElementById("hero"),
        document.getElementById("story"),
        document.getElementById("transformation"),
        document.getElementById("estates"),
        document.getElementById("amenities"),
        document.getElementById("gallery"),
        document.getElementById("contact")
    ];

    function updateFloatingIndicator(activeItem, animate = true) {
        if (!activeItem || !floatIndicator) return;
        const bar = activeItem.parentElement;
        if (!bar) return;
        const barRect = bar.getBoundingClientRect();
        const activeRect = activeItem.getBoundingClientRect();
        
        const left = activeRect.left - barRect.left;
        const width = activeRect.width;
        
        if (animate) {
            gsap.to(floatIndicator, {
                x: left,
                width: width,
                duration: 0.45,
                ease: "power3.out",
                overwrite: "auto"
            });
        } else {
            gsap.set(floatIndicator, {
                x: left,
                width: width
            });
        }
    }

    function setActiveNavItem(index) {
        floatNavItems.forEach((item, idx) => {
            if (idx === index) {
                item.classList.add("active");
                updateFloatingIndicator(item, true);
            } else {
                item.classList.remove("active");
            }
        });
    }

    if (floatNavContainer && floatNavItems.length > 0 && floatIndicator) {
        // Track section scroll using ScrollTrigger
        navSections.forEach((section, idx) => {
            if (!section) return;
            
            let startVal = "top 50%";
            let endVal = "bottom 50%";
            
            if (idx === 0) {
                startVal = "top top";
            }
            if (idx === navSections.length - 1) {
                endVal = "bottom bottom";
            }
            
            ScrollTrigger.create({
                trigger: section,
                start: startVal,
                end: endVal,
                onToggle: (self) => {
                    if (self.isActive) {
                        setActiveNavItem(idx);
                    }
                }
            });
        });

        // Toggle floating navbar visibility (hide on Hero, show on scroll down)
        ScrollTrigger.create({
            trigger: "#hero",
            start: "bottom 80%",
            onEnter: () => floatNavContainer.classList.add("visible"),
            onLeaveBack: () => floatNavContainer.classList.remove("visible")
        });

        // Manual click handling to update indicator immediately
        floatNavItems.forEach((item, idx) => {
            item.addEventListener("click", () => {
                setActiveNavItem(idx);
            });
        });

        // Window resize adjustment
        window.addEventListener("resize", () => {
            const activeItem = document.querySelector(".floating-nav-item.active");
            if (activeItem) {
                updateFloatingIndicator(activeItem, false);
            }
        });

        // Initialize position on load
        setTimeout(() => {
            const activeItem = document.querySelector(".floating-nav-item.active");
            if (activeItem) {
                updateFloatingIndicator(activeItem, false);
            }
        }, 100);
    }

});
