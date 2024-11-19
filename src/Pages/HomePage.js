import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section className="bg-gray-50 w-screen h-screen dark:bg-gray-900 dark:text-gray-200 min-h-[60vh] flex items-center bg-fit"
        style={{
          backgroundImage: "url('https://avatars.mds.yandex.net/i?id=611f24a74ec19566a000492b0e74784a900383d0-4080597-images-thumbs&n=13')",
          backgroundSize: 'cover',
        }}

      >
        <div className="container mx-auto flex flex-col items-center px-6 py-24 md:py-32 md:px-10 lg:px-32 xl:max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Elevate Your Style with <span className="text-white">Sneakers</span>
          </h1>
          <p className="mt-8 mb-12 text-lg text-black leading-relaxed">
            Discover top-quality sneakers that combine comfort, durability, and style, designed for the modern trendsetter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 text-lg font-semibold rounded bg-white text-black hover:bg-black hover:text-white transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 text-lg font-semibold rounded  border-white border-2 dark:border-gray-700 text-black dark:text-gray-200 hover:bg-black hover:text-white dark:hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
