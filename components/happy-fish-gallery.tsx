"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useState } from "react";

const images = [
  { src: "/hf1.jpg", alt: "Happy Fish Swim School memory one" },
  { src: "/hf2.jpg", alt: "Happy Fish Swim School memory two" },
  { src: "/hf3.jpg", alt: "Happy Fish Swim School memory three" },
];

export default function HappyFishGallery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="happy-fish-gallery"
        onClick={() => setIsOpen(true)}
        aria-label="Open Happy Fish Swim School photo gallery"
      >
        {images.map((image, index) => (
          <Image
            key={image.src}
            className={`happy-fish-photo happy-fish-photo-${index + 1}`}
            src={image.src}
            alt={image.alt}
            width={240}
            height={180}
          />
        ))}
        <span className="happy-fish-gallery-label">View memories</span>
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className="gallery-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Happy Fish Swim School memories"
              onClick={() => setIsOpen(false)}
            >
              <div className="gallery-modal-content">
                <div className="gallery-modal-grid">
                  {images.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={700}
                      height={700}
                      className="gallery-modal-image"
                      unoptimized
                    />
                  ))}
                </div>
              </div>
            </div>
          , document.body)
        : null}
    </>
  );
}
