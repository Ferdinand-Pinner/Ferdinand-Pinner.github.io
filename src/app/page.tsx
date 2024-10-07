"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import RandomTextsContainer from "./components/RandomTextsContainer";

export default function Home() {
  const imageUrls = [
    "/images/ferdi+artmuseum.jpg",
    "/images/ferdi+dandy_square.jpg",
    "/images/ferdi+squinting+giraffes.jpg",
    "/images/Ferdinand-arms-outstreched.jpg",
    "/images/ferdinand-twothumbsup.jpg",
  ];

  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomImage(imageUrls[randomIndex]);
  }, []);

  return (
    <div className="grid grid-cols-1 min-w-0 items-center justify-items-center min-h-screen gap-4 pb-20 mx-16 font-[family-name:var(--font-geist-sans)]">
      <main className="p-2 flex flex-col gap-8 row-start-2 sm:items-start bg-opacity-75 bg-black rounded border">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-4 gap-4">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
              <Image
                src={randomImage}
                alt="Randomly selected"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">
                welcome to the ferdinand
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium mt-2 text-center sm:text-left">
                contact: ferdinand.pinner@gmail.com
              </h2>
            </div>
            <h3>The truth is in the connections between</h3>
          </div>
          <RandomTextsContainer />
        </div>
      </main>
      <footer className="p-4 flex flex-col gap-8 row-start-3 items-center sm:items-start bg-opacity-90 bg-black rounded border">
        <a
          href="https://github.com/Ferdinand-Pinner/Ferdinand-Pinner.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="rainbow-link text-lg hover:text-gray-400 transition-colors duration-300"
        >
          Click here to go to the repo on github!
        </a>
      </footer>
    </div>
  );
}
