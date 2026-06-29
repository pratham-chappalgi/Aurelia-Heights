(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/ClientScripts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientScripts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
// @ts-nocheck
"use client";
;
;
;
;
function ClientScripts() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientScripts.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            /* ==========================================================================
   AURELIA HEIGHTS - CORE JAVASCRIPT & ANIMATION
   ========================================================================== */ // Register ScrollTrigger plugin
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            /* ==========================================================================
       1. LENIS SMOOTH SCROLLING
       ========================================================================== */ const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.6,
                easing: {
                    "ClientScripts.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["ClientScripts.useEffect"],
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false
            });
            // Update ScrollTrigger on scroll
            lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            // Integrate with GSAP Ticker
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            // Bind navigation clicks to Lenis scroll-to
            document.querySelectorAll('a[href^="#"]').forEach({
                "ClientScripts.useEffect": (anchor)=>{
                    anchor.addEventListener('click', {
                        "ClientScripts.useEffect": function(e) {
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
                                lenis.scrollTo(target, {
                                    offset: -60
                                });
                            }
                        }
                    }["ClientScripts.useEffect"]);
                }
            }["ClientScripts.useEffect"]);
            /* ==========================================================================
       2. CUSTOM CURSOR
       ========================================================================== */ const cursor = document.getElementById("custom-cursor");
            const follower = document.getElementById("custom-cursor-follower");
            if (cursor && follower) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cursor, {
                    xPercent: -50,
                    yPercent: -50
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(follower, {
                    xPercent: -50,
                    yPercent: -50
                });
                window.addEventListener("mousemove", {
                    "ClientScripts.useEffect": (e)=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor, {
                            duration: 0.1,
                            x: e.clientX,
                            y: e.clientY,
                            ease: "power2.out"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(follower, {
                            duration: 0.35,
                            x: e.clientX,
                            y: e.clientY,
                            ease: "power3.out"
                        });
                    }
                }["ClientScripts.useEffect"]);
                // Interactive cursor triggers
                const interactives = document.querySelectorAll("a, button, select, input, textarea, .estate-card, .gallery-item");
                interactives.forEach({
                    "ClientScripts.useEffect": (el)=>{
                        el.addEventListener("mouseenter", {
                            "ClientScripts.useEffect": ()=>{
                                document.body.classList.add("hover-interactive");
                            }
                        }["ClientScripts.useEffect"]);
                        el.addEventListener("mouseleave", {
                            "ClientScripts.useEffect": ()=>{
                                document.body.classList.remove("hover-interactive");
                            }
                        }["ClientScripts.useEffect"]);
                    }
                }["ClientScripts.useEffect"]);
            }
            /* ==========================================================================
       3. PRELOADER & IMAGE CACHING
       ========================================================================== */ const frameCount = 240;
            const frames = [];
            let loadedCount = 0;
            const preloader = document.getElementById("preloader");
            const loaderFill = document.getElementById("loader-fill");
            const loaderPercentage = document.getElementById("loader-percentage");
            // Preload signature image sequence
            function preloadImageSequence() {
                for(let i = 1; i <= frameCount; i++){
                    const img = new Image();
                    img.onload = onAssetLoaded;
                    img.onerror = onAssetLoaded; // Avoid blocking the site if an frame errors
                    img.src = `ezgif-8b56f7980b868e0e-jpg/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
                    frames.push(img);
                }
            }
            function onAssetLoaded() {
                loadedCount++;
                const progress = Math.min(100, Math.floor(loadedCount / frameCount * 100));
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
                const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
                    onComplete: {
                        "ClientScripts.useEffect.revealLandingPage": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                        }
                    }["ClientScripts.useEffect.revealLandingPage"]
                }, "-=0.5");
            }
            // Initialize asset preloading
            preloadImageSequence();
            /* ==========================================================================
       4. SIGNATURE CANVAS EVOLUTION ANIMATION
       ========================================================================== */ const canvas = document.getElementById("transformation-canvas");
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
                const transSequence = {
                    frame: 0
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(transSequence, {
                    frame: frameCount - 1,
                    snap: "frame",
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#transformation",
                        start: "top top",
                        end: "+=200%",
                        pin: true,
                        scrub: true,
                        onUpdate: {
                            "ClientScripts.useEffect": (self)=>{
                                currentFrameIndex = Math.floor(transSequence.frame);
                                drawCanvasFrame(currentFrameIndex);
                                // Update bottom scroll progress bar
                                const fill = document.getElementById("trans-progress-fill");
                                if (fill) fill.style.width = self.progress * 100 + "%";
                                // Update Text states based on progression percentage
                                const progress = self.progress;
                                const phaseText = document.getElementById("phase-text");
                                const textWrap = document.getElementById("trans-text-wrap");
                                const completeUI = document.getElementById("trans-complete-ui");
                                if (phaseText && textWrap && completeUI) {
                                    if (progress < 0.3) {
                                        phaseText.textContent = "PHASE 01: THE UNTOUCHED LAND";
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textWrap, {
                                            opacity: 1,
                                            y: 0,
                                            duration: 0.3,
                                            ease: "power2.out"
                                        });
                                        completeUI.classList.remove("visible");
                                    } else if (progress >= 0.3 && progress < 0.75) {
                                        phaseText.textContent = "PHASE 02: STRUCTURAL ELEVATION";
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textWrap, {
                                            opacity: 1,
                                            y: 0,
                                            duration: 0.3,
                                            ease: "power2.out"
                                        });
                                        completeUI.classList.remove("visible");
                                    } else {
                                        phaseText.textContent = "PHASE 03: THE COMPLETED ICON";
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textWrap, {
                                            opacity: 0,
                                            y: -20,
                                            duration: 0.3,
                                            ease: "power2.out"
                                        });
                                        // High-end reveal at the very end
                                        if (progress > 0.90) {
                                            completeUI.classList.add("visible");
                                        } else {
                                            completeUI.classList.remove("visible");
                                        }
                                    }
                                }
                            }
                        }["ClientScripts.useEffect"]
                    }
                });
            }
            /* ==========================================================================
       5. GENERAL GSAP SCROLL TRIGGERS
       ========================================================================== */ // Header shadow change on scroll
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                start: "top -50px",
                onEnter: {
                    "ClientScripts.useEffect": ()=>document.querySelector(".luxury-header").classList.add("scrolled")
                }["ClientScripts.useEffect"],
                onLeaveBack: {
                    "ClientScripts.useEffect": ()=>document.querySelector(".luxury-header").classList.remove("scrolled")
                }["ClientScripts.useEffect"]
            });
            // Hero Section Parallax elements
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".hero-video", {
                scale: 1.15,
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".hero-content-wrapper", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".parallax-img", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".stat-num").forEach({
                "ClientScripts.useEffect": (stat)=>{
                    const val = parseInt(stat.getAttribute("data-val"));
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(stat, {
                        innerText: val,
                        duration: 2.2,
                        snap: {
                            innerText: 1
                        },
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: stat,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    });
                }
            }["ClientScripts.useEffect"]);
            // Featured Properties entrance animations
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".estate-card", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".land-showcase-image", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".land-feature-card", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".land-highlights-row", {
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
            // Interior Showcase animations
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".interior-main-image", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".interior-detail-block", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".interior-spec", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".secondary-img-wrap", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".gallery-item").forEach({
                "ClientScripts.useEffect": (item)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(item, {
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
                }
            }["ClientScripts.useEffect"]);
            // Investment Metric bar progressions
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".metric-progress span").forEach({
                "ClientScripts.useEffect": (span)=>{
                    const targetWidth = span.style.width;
                    span.style.width = "0%"; // Reset initial state
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(span, {
                        width: targetWidth,
                        duration: 1.8,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: span,
                            start: "top 95%"
                        }
                    });
                }
            }["ClientScripts.useEffect"]);
            // Testimonials Card Rotations
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".testimonial-card").forEach({
                "ClientScripts.useEffect": (card, index)=>{
                    const offsetRotation = index % 2 === 0 ? -3 : 3;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(card, {
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
                }
            }["ClientScripts.useEffect"]);
            /* ==========================================================================
       6. MICRO INTERACTIONS (TILT & MAGNETICS & CONTACT)
       ========================================================================== */ // 3D Card Mouse Tilt (featured estates & gallery)
            const tiltItems = document.querySelectorAll(".hover-tilt");
            tiltItems.forEach({
                "ClientScripts.useEffect": (item)=>{
                    item.addEventListener("mousemove", {
                        "ClientScripts.useEffect": (e)=>{
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
                            const rotX = dy / yc * -6;
                            const rotY = dx / xc * 6;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(item, {
                                transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`,
                                duration: 0.5,
                                ease: "power3.out"
                            });
                        }
                    }["ClientScripts.useEffect"]);
                    item.addEventListener("mouseleave", {
                        "ClientScripts.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(item, {
                                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                                duration: 0.8,
                                ease: "power3.out"
                            });
                        }
                    }["ClientScripts.useEffect"]);
                }
            }["ClientScripts.useEffect"]);
            // Magnetic CTA Button Effect
            const magneticTargets = document.querySelectorAll(".magnetic-target");
            magneticTargets.forEach({
                "ClientScripts.useEffect": (btn)=>{
                    btn.addEventListener("mousemove", {
                        "ClientScripts.useEffect": (e)=>{
                            const rect = btn.getBoundingClientRect();
                            const x = e.clientX - rect.left - rect.width / 2;
                            const y = e.clientY - rect.top - rect.height / 2;
                            // Move button slightly (40% offset strength)
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
                                x: x * 0.4,
                                y: y * 0.4,
                                duration: 0.35,
                                ease: "power2.out"
                            });
                        }
                    }["ClientScripts.useEffect"]);
                    btn.addEventListener("mouseleave", {
                        "ClientScripts.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
                                x: 0,
                                y: 0,
                                duration: 0.6,
                                ease: "power3.out"
                            });
                        }
                    }["ClientScripts.useEffect"]);
                }
            }["ClientScripts.useEffect"]);
            // Inquiry Form Submission
            const inquiryForm = document.getElementById("inquiry-form-el");
            const successBox = document.getElementById("form-success-el");
            if (inquiryForm && successBox) {
                inquiryForm.addEventListener("submit", {
                    "ClientScripts.useEffect": (e)=>{
                        e.preventDefault();
                        // Gather targets to fade
                        const innerElements = inquiryForm.querySelectorAll("input, select, textarea, button, label, .form-row");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(innerElements, {
                            opacity: 0,
                            y: -20,
                            stagger: 0.05,
                            duration: 0.6,
                            ease: "power3.inOut",
                            onComplete: {
                                "ClientScripts.useEffect": ()=>{
                                    successBox.classList.add("active");
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(successBox, {
                                        scale: 0.92,
                                        opacity: 0
                                    }, {
                                        scale: 1,
                                        opacity: 1,
                                        duration: 1,
                                        ease: "power4.out"
                                    });
                                }
                            }["ClientScripts.useEffect"]
                        });
                    }
                }["ClientScripts.useEffect"]);
            }
            /* ==========================================================================
       7. MOBILE NAVIGATION OVERLAY
       ========================================================================== */ const mobileMenuBtn = document.querySelector(".mobile-menu-toggle");
            const mobileOverlay = document.querySelector(".mobile-nav-overlay");
            const mobileLinks = document.querySelectorAll(".mobile-nav-link");
            if (mobileMenuBtn && mobileOverlay) {
                mobileMenuBtn.addEventListener("click", {
                    "ClientScripts.useEffect": ()=>{
                        const isActive = mobileMenuBtn.classList.toggle("active");
                        mobileOverlay.classList.toggle("active", isActive);
                        // Prevent body scrolling when mobile menu is open
                        if (isActive) {
                            lenis.stop();
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".mobile-nav-link", {
                                opacity: 0,
                                y: 30,
                                stagger: 0.08,
                                duration: 0.6,
                                ease: "power3.out"
                            });
                        } else {
                            lenis.start();
                        }
                    }
                }["ClientScripts.useEffect"]);
                // Close menu when links clicked
                mobileLinks.forEach({
                    "ClientScripts.useEffect": (link)=>{
                        link.addEventListener("click", {
                            "ClientScripts.useEffect": ()=>{
                                mobileMenuBtn.classList.remove("active");
                                mobileOverlay.classList.remove("active");
                                lenis.start();
                            }
                        }["ClientScripts.useEffect"]);
                    }
                }["ClientScripts.useEffect"]);
            }
            // Force ScrollTrigger refresh once all assets are fully loaded
            window.addEventListener("load", {
                "ClientScripts.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                }
            }["ClientScripts.useEffect"]);
            /* ==========================================================================
       8. CINEMATIC HERO VIDEO
       ========================================================================== */ const heroVideo = document.getElementById("hero-cinematic-video");
            if (heroVideo) {
                // Fade in when enough data has loaded to play
                heroVideo.addEventListener("canplay", {
                    "ClientScripts.useEffect": ()=>{
                        heroVideo.classList.add("loaded");
                    }
                }["ClientScripts.useEffect"]);
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
                prefersReducedMotion.addEventListener('change', {
                    "ClientScripts.useEffect": (e)=>{
                        if (e.matches) {
                            heroVideo.pause();
                        } else {
                            heroVideo.play().catch({
                                "ClientScripts.useEffect": (err)=>console.log("Autoplay prevented", err)
                            }["ClientScripts.useEffect"]);
                        }
                    }
                }["ClientScripts.useEffect"]);
            }
            /* ==========================================================================
       9. FLOATING LUXURY NAVIGATION BAR CONTROLLER
       ========================================================================== */ const floatNavContainer = document.querySelector(".floating-nav-container");
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(floatIndicator, {
                        x: left,
                        width: width,
                        duration: 0.45,
                        ease: "power3.out",
                        overwrite: "auto"
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(floatIndicator, {
                        x: left,
                        width: width
                    });
                }
            }
            function setActiveNavItem(index) {
                floatNavItems.forEach({
                    "ClientScripts.useEffect.setActiveNavItem": (item, idx)=>{
                        if (idx === index) {
                            item.classList.add("active");
                            updateFloatingIndicator(item, true);
                        } else {
                            item.classList.remove("active");
                        }
                    }
                }["ClientScripts.useEffect.setActiveNavItem"]);
            }
            if (floatNavContainer && floatNavItems.length > 0 && floatIndicator) {
                // Track section scroll using ScrollTrigger
                navSections.forEach({
                    "ClientScripts.useEffect": (section, idx)=>{
                        if (!section) return;
                        let startVal = "top 50%";
                        let endVal = "bottom 50%";
                        if (idx === 0) {
                            startVal = "top top";
                        }
                        if (idx === navSections.length - 1) {
                            endVal = "bottom bottom";
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                            trigger: section,
                            start: startVal,
                            end: endVal,
                            onToggle: {
                                "ClientScripts.useEffect": (self)=>{
                                    if (self.isActive) {
                                        setActiveNavItem(idx);
                                    }
                                }
                            }["ClientScripts.useEffect"]
                        });
                    }
                }["ClientScripts.useEffect"]);
                // Toggle floating navbar visibility (hide on Hero, show on scroll down)
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                    trigger: "#hero",
                    start: "bottom 80%",
                    onEnter: {
                        "ClientScripts.useEffect": ()=>floatNavContainer.classList.add("visible")
                    }["ClientScripts.useEffect"],
                    onLeaveBack: {
                        "ClientScripts.useEffect": ()=>floatNavContainer.classList.remove("visible")
                    }["ClientScripts.useEffect"]
                });
                // Manual click handling to update indicator immediately
                floatNavItems.forEach({
                    "ClientScripts.useEffect": (item, idx)=>{
                        item.addEventListener("click", {
                            "ClientScripts.useEffect": ()=>{
                                setActiveNavItem(idx);
                            }
                        }["ClientScripts.useEffect"]);
                    }
                }["ClientScripts.useEffect"]);
                // Window resize adjustment
                window.addEventListener("resize", {
                    "ClientScripts.useEffect": ()=>{
                        const activeItem = document.querySelector(".floating-nav-item.active");
                        if (activeItem) {
                            updateFloatingIndicator(activeItem, false);
                        }
                    }
                }["ClientScripts.useEffect"]);
                // Initialize position on load
                setTimeout({
                    "ClientScripts.useEffect": ()=>{
                        const activeItem = document.querySelector(".floating-nav-item.active");
                        if (activeItem) {
                            updateFloatingIndicator(activeItem, false);
                        }
                    }
                }["ClientScripts.useEffect"], 100);
            }
            return ({
                "ClientScripts.useEffect": ()=>{
                    // cleanup if necessary
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "ClientScripts.useEffect": (t)=>t.kill()
                    }["ClientScripts.useEffect"]);
                }
            })["ClientScripts.useEffect"];
        }
    }["ClientScripts.useEffect"], []);
    return null;
}
_s(ClientScripts, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ClientScripts;
var _c;
__turbopack_context__.k.register(_c, "ClientScripts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_ClientScripts_tsx_0jg6q-f._.js.map