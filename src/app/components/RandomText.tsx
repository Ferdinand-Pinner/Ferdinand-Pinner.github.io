import React, { useState, useEffect } from "react";
import "./fade.css";

interface ParagraphsData {
  paragraphs: string[];
}

const RandomText: React.FC = () => {
  const [currentText, setCurrentText] = useState<string | null>(null);
  const [fadeClass, setFadeClass] = useState<string>("fade-in");

  useEffect(() => {
    const fetchRandomParagraph = async () => {
      try {
        const response = await fetch("/randomTexts.json");
        const data: ParagraphsData = await response.json();

        const randomIndex = Math.floor(Math.random() * data.paragraphs.length);
        setCurrentText(data.paragraphs[randomIndex]);

        setFadeClass("fade-in");

        setTimeout(() => {
          setFadeClass("");
        }, 1000);
      } catch (error) {
        console.error("Error loading random paragraphs:", error);
      }
    };

    fetchRandomParagraph();
    const interval = setInterval(fetchRandomParagraph, 3000);

    return () => clearInterval(interval);
  }, []);

  const calculateFontSize = (text: string | null) => {
    if (!text) return "1rem"; // Default size for no text
    const length = text.length;

    if (length < 50) return "2rem"; // Large text for shorter paragraphs
    if (length < 100) return "1.5rem"; // Medium size for moderate-length text
    return "1rem"; // Smaller size for longer text
  };

  return (
    <div
      className={`random-text-container ${fadeClass}`}
      style={{ fontSize: calculateFontSize(currentText) }}
    >
      {currentText}
    </div>
  );
};

export default RandomText;
