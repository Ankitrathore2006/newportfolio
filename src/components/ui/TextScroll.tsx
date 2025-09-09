import { useScroll } from "framer-motion";
import { useRef } from "react";
import { CharacterV1 } from "./skiper-ui/skiper31";

export default function TextScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const text = ["W", "E", "L", "C", "O", "M", "E","😁"];
  const centerIndex = Math.floor(text.length / 2); // define centerIndex

  return (
    <div
      ref={targetRef}
      className="relative box-border flex h-[180vh] items-center justify-center gap-[3vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
    >
      <div
        className="font-geist gap-1 w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-black"
        style={{
          perspective: "500px",
        }}
      >
        {text.map((char, index) => (
          <CharacterV1
            key={index}
            char={char}
            index={index}
            centerIndex={centerIndex} 
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
