"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      void audio.play().then(() => {
        window.removeEventListener("pointerdown", tryPlay);
        window.removeEventListener("keydown", tryPlay);
      }).catch(() => {
        // Browsers may require a user gesture before allowing audio playback.
      });
    };

    tryPlay();
    window.addEventListener("pointerdown", tryPlay, { once: true });
    window.addEventListener("keydown", tryPlay, { once: true });

    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
      audio.pause();
    };
  }, []);

  return <audio ref={audioRef} src="/bg_music.mp3" autoPlay loop preload="auto" />;
}
