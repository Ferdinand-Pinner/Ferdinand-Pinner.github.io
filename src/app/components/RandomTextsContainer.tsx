import React from "react";
import RandomText from "./RandomText";

// Function to generate a random delay between min and max milliseconds
const getRandomDelay = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RandomTextsContainer: React.FC = () => {
  const randomDelays = [
    getRandomDelay(0, 2000), // Random delay between 0ms and 2000ms
    getRandomDelay(2000, 4000), // Random delay between 2000ms and 4000ms
    getRandomDelay(4000, 6000), // Random delay between 4000ms and 6000ms
    getRandomDelay(6000, 8000), // Random delay between 6000ms and 8000ms
  ];

  return (
    <div className="random-texts-container">
      {/* Each RandomText component gets a different random delay */}
      {randomDelays.map((delay, index) => (
        <RandomText key={index} delay={delay} />
      ))}
    </div>
  );
};

export default RandomTextsContainer;
