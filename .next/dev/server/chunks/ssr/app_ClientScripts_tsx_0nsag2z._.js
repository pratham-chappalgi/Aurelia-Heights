module.exports = [
"[project]/app/ClientScripts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientScripts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
// @ts-nocheck
"use client";
;
;
;
;
function ClientScripts() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        /* ==========================================================================
       1. LENIS SMOOTH SCROLLING
       ========================================================================== */ const lenis = undefined;
        // Integrate with GSAP Ticker
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        /* ==========================================================================
       2. CUSTOM CURSOR
       ========================================================================== */ const cursor = undefined;
        const follower = undefined;
        /* ==========================================================================
       3. PRELOADER & IMAGE CACHING
       ========================================================================== */ const frameCount = undefined;
        const frames = undefined;
        let loadedCount;
        const preloader = undefined;
        const loaderFill = undefined;
        const loaderPercentage = undefined;
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
            const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
                onComplete: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                }
            }, "-=0.5");
        }
        /* ==========================================================================
       4. SIGNATURE CANVAS EVOLUTION ANIMATION
       ========================================================================== */ const canvas = undefined;
        const context = undefined;
        let currentFrameIndex;
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
        /* ==========================================================================
       6. MICRO INTERACTIONS (TILT & MAGNETICS & CONTACT)
       ========================================================================== */ // 3D Card Mouse Tilt (featured estates & gallery)
        const tiltItems = undefined;
        // Magnetic CTA Button Effect
        const magneticTargets = undefined;
        // Inquiry Form Submission
        const inquiryForm = undefined;
        const successBox = undefined;
        /* ==========================================================================
       7. MOBILE NAVIGATION OVERLAY
       ========================================================================== */ const mobileMenuBtn = undefined;
        const mobileOverlay = undefined;
        const mobileLinks = undefined;
        /* ==========================================================================
       8. CINEMATIC HERO VIDEO
       ========================================================================== */ const heroVideo = undefined;
        /* ==========================================================================
       9. FLOATING LUXURY NAVIGATION BAR CONTROLLER
       ========================================================================== */ const floatNavContainer = undefined;
        const floatNavItems = undefined;
        const floatIndicator = undefined;
        const navSections = undefined;
        function updateFloatingIndicator(activeItem, animate = true) {
            if (!activeItem || !floatIndicator) return;
            const bar = activeItem.parentElement;
            if (!bar) return;
            const barRect = bar.getBoundingClientRect();
            const activeRect = activeItem.getBoundingClientRect();
            const left = activeRect.left - barRect.left;
            const width = activeRect.width;
            if (animate) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(floatIndicator, {
                    x: left,
                    width: width,
                    duration: 0.45,
                    ease: "power3.out",
                    overwrite: "auto"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(floatIndicator, {
                    x: left,
                    width: width
                });
            }
        }
        function setActiveNavItem(index) {
            floatNavItems.forEach((item, idx)=>{
                if (idx === index) {
                    item.classList.add("active");
                    updateFloatingIndicator(item, true);
                } else {
                    item.classList.remove("active");
                }
            });
        }
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=app_ClientScripts_tsx_0nsag2z._.js.map