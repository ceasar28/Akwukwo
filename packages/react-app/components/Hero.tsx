import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Mint Your Exclusive Book NFTs
            </h1>
            <p className="text-lg">
              Own a piece of literary history through blockchain technology.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/book-illustration.png"
              alt="Book Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
