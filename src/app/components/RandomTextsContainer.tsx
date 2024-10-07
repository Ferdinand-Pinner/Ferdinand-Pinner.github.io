import React from "react";
import RandomText from "./RandomText";

const RandomTextsContainer: React.FC = () => {
  const numberOfTexts = 4;

  return (
    <div className="random-texts-container">
      {[...Array(numberOfTexts)].map((_, index) => (
        <RandomText key={index} />
      ))}
    </div>
  );
};

export default RandomTextsContainer;
