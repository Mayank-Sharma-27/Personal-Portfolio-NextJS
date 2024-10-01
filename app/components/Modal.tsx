import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl hover:text-gray-700 focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/images/resume.png"
            alt="Resume"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
