import { useState, useEffect } from "react";

interface TypingAnimationProps {
  lines: string[];
  speed?: number;
}

export const TypingAnimation = ({
  lines,
  speed = 50,
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const newText = [...prev];
          if (!newText[currentLineIndex]) {
            newText[currentLineIndex] = "";
          }
          newText[currentLineIndex] += currentLine[currentCharIndex];
          return newText;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentLineIndex < lines.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex, lines, speed]);

  return (
    <div className="font-mono text-sm md:text-base leading-relaxed">
      {displayedText.map((line, index) => (
        <div key={index} className="whitespace-pre-wrap">
          {line}
          {index === currentLineIndex && showCursor && (
            <span className="inline-block w-2 h-5 bg-elegant-purple ml-1 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
};
