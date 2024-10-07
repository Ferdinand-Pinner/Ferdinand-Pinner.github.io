import React, { useState, useEffect } from "react";
import "./fade.css";

// Define the type for the JSON data structure
interface ParagraphsData {
  paragraphs: string[];
}

interface RandomTextProps {
  delay: number; // Delay to stagger start times
}

const getRandomDuration = () => {
  // Random duration between 10 and 15 seconds (in milliseconds)
  return Math.floor(Math.random() * 5000) + 10000; // 10000ms to 15000ms
};

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
      const randomDuration = getRandomDuration(); // Get a random duration

      // Trigger fade-out animation
      setFadeClass("fade-out");

      // Wait for fade-out to finish (matches CSS fade duration)
      setTimeout(() => {
        fetchRandomParagraph(); // Change the text
        setFadeClass("fade-in"); // Trigger fade-in animation

        // After the fade-in, wait for the random duration before triggering the next change
        setTimeout(swapTextWithFade, randomDuration); // Recursively set next text change
      }, 1000); // Wait for the fade-out (1s animation duration)
    };

    // Initial delay to stagger start times
    const timeoutId = setTimeout(() => {
      swapTextWithFade(); // Start the first text swap with fade
    }, delay);

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [delay]);

  return (
    <div className={`random-text-container ${fadeClass}`}>{currentText}</div>
  );
};

export default RandomText;
