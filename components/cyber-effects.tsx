"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
};

const COLORS = ["#c87591", "#b9a7d0"] as const;

export default function CyberEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBlurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    let particles: Particle[] = [];
    let mouse: { x: number | null; y: number | null } = {
      x: null,
      y: null,
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const particleCount = Math.min(140, Math.floor((width * height) / 15000));
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 5 + 4,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
        color: COLORS[Math.random() > 0.5 ? 0 : 1],
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
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
            particle.x -= (dx / distance) * force * 5;
            particle.y -= (dy / distance) * force * 5;
          }
        }

        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.rotation);
        context.globalAlpha = 0.65;

        for (let petal = 0; petal < 5; petal += 1) {
          context.rotate((Math.PI * 2) / 5);
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

    const movePointer = (event: PointerEvent) => {
      mouse = { x: event.clientX, y: event.clientY };
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      window.setTimeout(() => {
        cursorBlur.style.left = `${event.clientX}px`;
        cursorBlur.style.top = `${event.clientY}px`;
      }, 50);
    };

    const resetPointer = () => {
      mouse = { x: null, y: null };
    };

    const setInteractiveCursor = (event: Event) => {
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

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", movePointer);
      window.removeEventListener("pointerout", resetPointer);
      document.removeEventListener("mouseover", setInteractiveCursor);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <div ref={cursorBlurRef} className="cursor-blur" aria-hidden="true" />
    </>
  );
}
