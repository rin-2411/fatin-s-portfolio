(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/cyber-effects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CyberEffects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const COLORS = [
    "#c87591",
    "#b9a7d0"
];
function CyberEffects() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorBlurRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CyberEffects.useEffect": ()=>{
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
            const resize = {
                "CyberEffects.useEffect.resize": ()=>{
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
                    }, {
                        "CyberEffects.useEffect.resize": ()=>({
                                x: Math.random() * width,
                                y: Math.random() * height,
                                vx: (Math.random() - 0.5) * 0.35,
                                vy: (Math.random() - 0.5) * 0.35,
                                size: Math.random() * 5 + 4,
                                rotation: Math.random() * Math.PI,
                                rotationSpeed: (Math.random() - 0.5) * 0.008,
                                color: COLORS[Math.random() > 0.5 ? 0 : 1]
                            })
                    }["CyberEffects.useEffect.resize"]);
                }
            }["CyberEffects.useEffect.resize"];
            const draw = {
                "CyberEffects.useEffect.draw": ()=>{
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
                }
            }["CyberEffects.useEffect.draw"];
            const movePointer = {
                "CyberEffects.useEffect.movePointer": (event)=>{
                    mouse = {
                        x: event.clientX,
                        y: event.clientY
                    };
                    cursor.style.left = `${event.clientX}px`;
                    cursor.style.top = `${event.clientY}px`;
                    window.setTimeout({
                        "CyberEffects.useEffect.movePointer": ()=>{
                            cursorBlur.style.left = `${event.clientX}px`;
                            cursorBlur.style.top = `${event.clientY}px`;
                        }
                    }["CyberEffects.useEffect.movePointer"], 50);
                }
            }["CyberEffects.useEffect.movePointer"];
            const resetPointer = {
                "CyberEffects.useEffect.resetPointer": ()=>{
                    mouse = {
                        x: null,
                        y: null
                    };
                }
            }["CyberEffects.useEffect.resetPointer"];
            const setInteractiveCursor = {
                "CyberEffects.useEffect.setInteractiveCursor": (event)=>{
                    const target = event.target;
                    if (!(target instanceof Element)) return;
                    const isInteractive = target.closest("a, button, .skill-node") !== null;
                    cursor.classList.toggle("cursor-active", isInteractive);
                    cursorBlur.classList.toggle("cursor-blur-active", isInteractive);
                }
            }["CyberEffects.useEffect.setInteractiveCursor"];
            resize();
            draw();
            window.addEventListener("resize", resize);
            window.addEventListener("pointermove", movePointer);
            window.addEventListener("pointerout", resetPointer);
            document.addEventListener("mouseover", setInteractiveCursor);
            return ({
                "CyberEffects.useEffect": ()=>{
                    cancelAnimationFrame(animationFrame);
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("pointermove", movePointer);
                    window.removeEventListener("pointerout", resetPointer);
                    document.removeEventListener("mouseover", setInteractiveCursor);
                }
            })["CyberEffects.useEffect"];
        }
    }["CyberEffects.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "particle-canvas",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/cyber-effects.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: "cursor-dot",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/cyber-effects.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(CyberEffects, "FtlVzJE7m8U6SX1U5eKH7MIheOg=");
_c = CyberEffects;
var _c;
__turbopack_context__.k.register(_c, "CyberEffects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/portfolio-interactions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioInteractions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function PortfolioInteractions() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioInteractions.useEffect": ()=>{
            const typedText = document.getElementById("typed-text");
            let typingTimer;
            let typeIndex = 0;
            const textToType = "administrative executive · organised · dependable";
            const typeNextCharacter = {
                "PortfolioInteractions.useEffect.typeNextCharacter": ()=>{
                    if (!typedText || typeIndex >= textToType.length) return;
                    typedText.textContent += textToType[typeIndex];
                    typeIndex += 1;
                    typingTimer = window.setTimeout(typeNextCharacter, 50 + Math.random() * 50);
                }
            }["PortfolioInteractions.useEffect.typeNextCharacter"];
            const startTypingTimer = window.setTimeout(typeNextCharacter, 1000);
            const revealObserver = new IntersectionObserver({
                "PortfolioInteractions.useEffect": (entries, observer)=>{
                    entries.forEach({
                        "PortfolioInteractions.useEffect": (entry)=>{
                            if (!entry.isIntersecting) return;
                            entry.target.classList.add("active");
                            observer.unobserve(entry.target);
                        }
                    }["PortfolioInteractions.useEffect"]);
                }
            }["PortfolioInteractions.useEffect"], {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            });
            document.querySelectorAll(".reveal").forEach({
                "PortfolioInteractions.useEffect": (element)=>revealObserver.observe(element)
            }["PortfolioInteractions.useEffect"]);
            return ({
                "PortfolioInteractions.useEffect": ()=>{
                    window.clearTimeout(startTypingTimer);
                    if (typingTimer !== undefined) window.clearTimeout(typingTimer);
                    revealObserver.disconnect();
                }
            })["PortfolioInteractions.useEffect"];
        }
    }["PortfolioInteractions.useEffect"], []);
    return null;
}
_s(PortfolioInteractions, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PortfolioInteractions;
var _c;
__turbopack_context__.k.register(_c, "PortfolioInteractions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/profile-photo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePhoto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PROFILE_PHOTO_KEY = "fatin-profile-photo";
function ProfilePhoto() {
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [photo, setPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProfilePhoto.useState": ()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.localStorage.getItem(PROFILE_PHOTO_KEY)
    }["ProfilePhoto.useState"]);
    const handlePhotoChange = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            event.target.value = "";
            return;
        }
        const reader = new FileReader();
        reader.onload = ()=>{
            if (typeof reader.result !== "string") return;
            setPhoto(reader.result);
            window.localStorage.setItem(PROFILE_PHOTO_KEY, reader.result);
        };
        reader.readAsDataURL(file);
        event.target.value = "";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "profile-photo-control",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "portrait-frame",
                onClick: ()=>inputRef.current?.click(),
                "aria-label": photo ? "Change profile picture" : "Choose a profile picture",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "portrait-inner",
                    children: photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        className: "profile-photo",
                        src: photo,
                        alt: "Fatin's profile picture",
                        fill: true,
                        unoptimized: true,
                        sizes: "272px"
                    }, void 0, false, {
                        fileName: "[project]/components/profile-photo.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-7xl",
                                children: "✿"
                            }, void 0, false, {
                                fileName: "[project]/components/profile-photo.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-5 right-5 rotate-12 font-hand text-xl text-rose",
                                children: "that's me!"
                            }, void 0, false, {
                                fileName: "[project]/components/profile-photo.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profile-photo.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/profile-photo.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profile-photo.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                className: "sr-only",
                type: "file",
                accept: "image/*",
                onChange: handlePhotoChange
            }, void 0, false, {
                fileName: "[project]/components/profile-photo.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "profile-photo-hint",
                children: [
                    "Click to ",
                    photo ? "change" : "add",
                    " photo"
                ]
            }, void 0, true, {
                fileName: "[project]/components/profile-photo.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profile-photo.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ProfilePhoto, "A/+B/+58VYcvCMF/UjwIKGJZxDQ=");
_c = ProfilePhoto;
var _c;
__turbopack_context__.k.register(_c, "ProfilePhoto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=components_15fnqd0gd2spm._.js.map