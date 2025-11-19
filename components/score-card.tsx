"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const candidates = [
  {
    id: 1,
    name: "John Doe",
    image: "https://assets.aceternity.com/pro/headshots/headshot-1.png",
    score: 92
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "https://assets.aceternity.com/pro/headshots/headshot-2.png",
    score: 88
  },
  {
    id: 3,
    name: "Jim Doe",
    image: "https://assets.aceternity.com/pro/headshots/headshot-3.png",
    score: 75
  },
  {
    id: 4,
    name: "Jill Doe",
    image: "https://assets.aceternity.com/pro/headshots/headshot-4.png",
    score: 60
  }
];

export function ScoreCard() {
  const [activeCandidate, setActiveCandidate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCandidate((prev) => (prev + 1) % candidates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group isolate flex flex-col overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
      <div className="p-6">
        <h3 className="font-sans text-sm font-medium tracking-tight text-neutral-100">
          Generate scores based on pictures
        </h3>
        <h3 className="mt-2 max-w-xs font-sans text-sm font-normal tracking-tight text-neutral-400">
          Rate your candidate&apos;s looks. As real as ATS scores.
        </h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 justify-center gap-4">
          <AnimatePresence>
            {candidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                className="relative"
                initial={false}
                animate={
                  index === activeCandidate
                    ? { opacity: 1, scale: 0.95, filter: "grayscale(0%)" }
                    : { opacity: 0.5, scale: 1, filter: "grayscale(100%)" }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                exit={{ opacity: 0, scale: 1, filter: "grayscale(100%)" }}>
                {index === activeCandidate && (
                  <>
                    <motion.div layoutId="border" className="absolute inset-0">
                      <div className="absolute -top-px -left-px size-4 rounded-tl-lg border-t-2 border-l-2 border-blue-500 bg-transparent" />
                      <div className="absolute -top-px -right-px size-4 rounded-tr-lg border-t-2 border-r-2 border-blue-500 bg-transparent" />
                      <div className="absolute -bottom-px -left-px size-4 rounded-bl-lg border-b-2 border-l-2 border-blue-500 bg-transparent" />
                      <div className="absolute -right-px -bottom-px size-4 rounded-br-lg border-r-2 border-b-2 border-blue-500 bg-transparent" />
                    </motion.div>

                    <motion.span
                      className="absolute inset-x-0 bottom-4 m-auto h-fit w-fit rounded-md border border-neutral-100 bg-white px-2 py-1 text-xs text-black"
                      initial={{ opacity: 0, translateY: -30 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut", type: "spring", delay: 0.5 }}>
                      score <span className="font-bold">{candidate.score}</span>
                    </motion.span>
                  </>
                )}

                <Image
                  alt="avatar"
                  width="100"
                  height="140"
                  className="h-[200px] w-full rounded-lg object-cover object-top"
                  src={candidate.image}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
