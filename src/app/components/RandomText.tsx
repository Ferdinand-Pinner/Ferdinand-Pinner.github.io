import React, { useState, useEffect } from "react";
import "./fade.css";

interface ParagraphsData {
  paragraphs: string[];
}

const calculateFontSize = (text: string | null) => {
  if (!text) return "1rem";

  const length = text.length;
  if (length <= 50) {
    return "2rem";
  } else if (length <= 100) {
    return "1.5rem";
  } else if (length <= 150) {
    return "1.25rem";
  } else if (length <= 200) {
    return "1.1rem";
  } else {
    return "1rem";
  }
};

const getRandomInterval = (min: number, max: number) => {
  return Math.random() * (max - min) * 1000 + min * 1000;
};

const RandomText: React.FC = () => {
  const [currentText, setCurrentText] = useState<string | null>(null);
  const [fadeClass, setFadeClass] = useState<string>("fade-in");

  const fontSize = calculateFontSize(currentText);

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
      }, 800);
    };

    swapTextWithFade();
    const intervalId = setInterval(() => {
      swapTextWithFade();
    }, getRandomInterval(13, 19));

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`random-text-container ${fadeClass}`} style={{ fontSize }}>
      {currentText}
    </div>
  );
};

export default RandomText;
