"use client";

import { useEffect } from "react";

export default function PortfolioInteractions() {
  useEffect(() => {
    const typedText = document.getElementById("typed-text");
    let typingTimer: number | undefined;
    let typeIndex = 0;
    const textToType = "administrative executive · organised · dependable";

    const typeNextCharacter = () => {
      if (!typedText || typeIndex >= textToType.length) return;
      typedText.textContent += textToType[typeIndex];
      typeIndex += 1;
      typingTimer = window.setTimeout(typeNextCharacter, 50 + Math.random() * 50);
    };

    const startTypingTimer = window.setTimeout(typeNextCharacter, 1000);
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    return () => {
      window.clearTimeout(startTypingTimer);
      if (typingTimer !== undefined) window.clearTimeout(typingTimer);
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
