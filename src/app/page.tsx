"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="p-4 flex flex-col gap-8 row-start-2 items-center sm:items-start bg-opacity-80 bg-black rounded border">
        <div className="text-center max-w-2xl mx-auto px-4">
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
          </div>
          <p className="text-base mb-4">
            I&apos;m just a
            <span
              className="text-transparent bg-clip-text bg-center bg-cover bg-no-repeat text-xl px-2"
              style={{
                backgroundImage:
                  'url("/images/Flag_of_the_United_Kingdom.svg")',
              }}
            >
              British
            </span>
            guy making his way through life with a healthy helping of computers,
            I could list out all my likes and loves here but that&apos;s so
            blasé, I would never
          </p>
          <p className="text-base mb-4">
            though in it&apos;s own way this is a useful page, its here as a
            part of me online for all to see, oh how vulnerable but there
            ain&apos;t nothing as secure as openess how can you break into
            something that was never there?
          </p>
          <p className="text-base mb-4">
            enough pointless musings that obviously have no other metaphorical
            implications, I&apos;m here to wrench and drag out the ideas
            encrusted into the universe, spoken by people and then put them in a
            computer so other people, and sometimes even me, never have to think
            about them ever again.
          </p>
          <p className="text-base mb-4">
            The thing I&apos;m most serious about is having fun (I love irony)
            while doing a little engineering, there&apos;s no point doing
            anything if you don&apos;t enjoy it, and if you don&apos;t enjoy
            either make doing it fun or find something else to do, luckily I
            find myself tending to like doing it, but as everyone knows
            throughout all the moments in their life it&apos;s never the it
            that&apos;s the problem it&apos;s the everything else
          </p>
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
