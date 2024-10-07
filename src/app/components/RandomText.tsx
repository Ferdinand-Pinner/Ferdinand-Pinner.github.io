import React, { useState, useEffect } from "react";
import "./fade.css";

// Define the type for the JSON data structure
interface ParagraphsData {
  paragraphs: string[];
}

interface RandomTextProps {
  delay: number; // Delay to stagger start times
}

const RandomText: React.FC<RandomTextProps> = ({ delay }) => {
  const [currentText, setCurrentText] = useState<string | null>(null);
  const [fadeClass, setFadeClass] = useState<string>("fade-in");

  useEffect(() => {
    const fetchRandomParagraph = async () => {
      try {
        const response = await fetch("/randomTexts.json");
        const data: ParagraphsData = await response.json();

        const randomIndex = Math.floor(Math.random() * data.paragraphs.length);
        setCurrentText(data.paragraphs[randomIndex]);
      } catch (error) {
        console.error("Error loading random paragraphs:", error);
      }
    };

    const swapTextWithFade = () => {
      setFadeClass("fade-out");

      setTimeout(() => {
        fetchRandomParagraph();
        setFadeClass("fade-in");
      }, 1000);
    };

    const timeoutId = setTimeout(() => {
      swapTextWithFade();
      const intervalId = setInterval(swapTextWithFade, 7000);
      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return (
    <div className={`random-text-container ${fadeClass}`}>{currentText}</div>
  );
};

export default RandomText;
