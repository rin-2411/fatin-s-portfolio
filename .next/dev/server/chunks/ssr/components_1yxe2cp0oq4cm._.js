(()=>{"use strict";module.exports = [
"[project]/components/cyber-effects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CyberEffects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const COLORS = [
    "#c87591",
    "#b9a7d0"
];
function CyberEffects() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorBlurRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const cursor = cursorRef.current;
        const cursorBlur = cursorBlurRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !cursor || !cursorBlur || !context) {
            return;
        }
        let animationFrame = 0;
        let width = 0;
        let height = 0;
        let particles = [];
        let mouse = {
            x: null,
            y: null
        };
        const resize = ()=>{
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            const particleCount = Math.min(140, Math.floor(width * height / 15000));
            particles = Array.from({
                length: particleCount
            }, ()=>({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
                    size: Math.random() * 5 + 4,
                    rotation: Math.random() * Math.PI,
                    rotationSpeed: (Math.random() - 0.5) * 0.008,
                    color: COLORS[Math.random() > 0.5 ? 0 : 1]
                }));
        };
        const draw = ()=>{
            context.clearRect(0, 0, width, height);
            for (const particle of particles){
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.rotation += particle.rotationSpeed;
                if (particle.x < 0 || particle.x > width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > height) particle.vy *= -1;
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - particle.x;
                    const dy = mouse.y - particle.y;
                    const distance = Math.hypot(dx, dy);
                    if (distance > 0 && distance < 150) {
                        const force = (150 - distance) / 150;
                        particle.x -= dx / distance * force * 5;
                        particle.y -= dy / distance * force * 5;
                    }
                }
                context.save();
                context.translate(particle.x, particle.y);
                context.rotate(particle.rotation);
                context.globalAlpha = 0.65;
                for(let petal = 0; petal < 5; petal += 1){
                    context.rotate(Math.PI * 2 / 5);
                    context.beginPath();
                    context.ellipse(0, -particle.size * 0.65, particle.size * 0.42, particle.size, 0, 0, Math.PI * 2);
                    context.fillStyle = particle.color;
                    context.fill();
                }
                context.beginPath();
                context.arc(0, 0, particle.size * 0.28, 0, Math.PI * 2);
                context.fillStyle = "#f2c783";
                context.fill();
                context.restore();
            }
            animationFrame = requestAnimationFrame(draw);
        };
        const movePointer = (event)=>{
            mouse = {
                x: event.clientX,
                y: event.clientY
            };
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
            window.setTimeout(()=>{
                cursorBlur.style.left = `${event.clientX}px`;
                cursorBlur.style.top = `${event.clientY}px`;
            }, 50);
        };
        const resetPointer = ()=>{
            mouse = {
                x: null,
                y: null
            };
        };
        const setInteractiveCursor = (event)=>{
            const target = event.target;
            if (!(target instanceof Element)) return;
            const isInteractive = target.closest("a, button, .skill-node") !== null;
            cursor.classList.toggle("cursor-active", isInteractive);
            cursorBlur.classList.toggle("cursor-blur-active", isInteractive);
        };
        resize();
        draw();
        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", movePointer);
        window.addEventListener("pointerout", resetPointer);
        document.addEventListener("mouseover", setInteractiveCursor);
        return ()=>{
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", movePointer);
            window.removeEventListener("pointerout", resetPointer);
            document.removeEventListener("mouseover", setInteractiveCursor);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "particle-canvas",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/cyber-effects.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: "cursor-dot",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/cyber-effects.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorBlurRef,
                className: "cursor-blur",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/cyber-effects.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cyber-effects.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/happy-fish-gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HappyFishGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const images = [
    {
        src: "/hf1.jpg",
        alt: "Happy Fish Swim School memory one"
    },
    {
        src: "/hf2.jpg",
        alt: "Happy Fish Swim School memory two"
    },
    {
        src: "/hf3.jpg",
        alt: "Happy Fish Swim School memory three"
    }
];
function HappyFishGallery() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "happy-fish-gallery",
                onClick: ()=>setIsOpen(true),
                "aria-label": "Open Happy Fish Swim School photo gallery",
                children: [
                    images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            className: `happy-fish-photo happy-fish-photo-${index + 1}`,
                            src: image.src,
                            alt: image.alt,
                            width: 240,
                            height: 180
                        }, image.src, false, {
                            fileName: "[project]/components/happy-fish-gallery.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "happy-fish-gallery-label",
                        children: "View memories"
                    }, void 0, false, {
                        fileName: "[project]/components/happy-fish-gallery.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/happy-fish-gallery.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            isOpen && typeof document !== "undefined" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-modal",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Happy Fish Swim School memories",
                onClick: ()=>setIsOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gallery-modal-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery-modal-grid",
                        children: images.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                src: image.src,
                                alt: image.alt,
                                width: 700,
                                height: 700,
                                className: "gallery-modal-image",
                                unoptimized: true
                            }, image.src, false, {
                                fileName: "[project]/components/happy-fish-gallery.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/happy-fish-gallery.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/happy-fish-gallery.tsx",
                    lineNumber: 46,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/happy-fish-gallery.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this), document.body) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/happy-fish-gallery.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/portfolio-interactions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioInteractions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function PortfolioInteractions() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const typedText = document.getElementById("typed-text");
        let typingTimer;
        let typeIndex = 0;
        const textToType = "administrative executive · organised · dependable";
        const typeNextCharacter = ()=>{
            if (!typedText || typeIndex >= textToType.length) return;
            typedText.textContent += textToType[typeIndex];
            typeIndex += 1;
            typingTimer = window.setTimeout(typeNextCharacter, 50 + Math.random() * 50);
        };
        const startTypingTimer = window.setTimeout(typeNextCharacter, 1000);
        const revealObserver = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if (!entry.isIntersecting) return;
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });
        document.querySelectorAll(".reveal").forEach((element)=>revealObserver.observe(element));
        return ()=>{
            window.clearTimeout(startTypingTimer);
            if (typingTimer !== undefined) window.clearTimeout(typingTimer);
            revealObserver.disconnect();
        };
    }, []);
    return null;
}
}),
];})()

//# sourceMappingURL=components_1yxe2cp0oq4cm._.js.map