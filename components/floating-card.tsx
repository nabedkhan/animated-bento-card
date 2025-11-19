"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRightIcon, CircleXIcon } from "lucide-react";

export function FloatingCard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -300, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -300, filter: "blur(6px)" }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            type: "spring",
            damping: 14
          }}
          className="fixed z-10 bottom-10 right-10">
          <div className="max-w-[320px] bg-neutral-900 rounded-lg p-4 w-full">
            <div className="flex items-start h-full relative gap-3">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex h-full flex-col items-center justify-center border border-neutral-800 p-3 rounded-sm">
                  <p className="text-neutral-100 text-sm font-semibold text-center">20% off</p>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <p className="text-neutral-400 text-sm font-medium">
                    Complete your first order and get offer.
                  </p>

                  <a className="transition-all duration-300 hover:underline font-medium inline-flex items-center gap-1">
                    <span className="text-neutral-100 text-xs font-semibold">Check it out</span>
                    <ArrowRightIcon strokeWidth={2} className="size-3 shrink-0" />
                  </a>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex cursor-pointer items-center justify-center rounded-full transition-opacity duration-300 hover:opacity-75">
                <CircleXIcon className="size-4 shrink-0" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
