"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./imageModal.css";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
};

export default function PreviewModal({ open, onClose, src, alt }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>
        &times;
      </span>
    <div className="modal-content" id="style-3">
      <img
        className=""
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>

      {alt && <div id="caption">{alt}</div>}
    </div>,
    document.body
  );
}
