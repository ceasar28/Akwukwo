import React from "react";
import NftCard from "../components/NftCard";
import dummyData from "../data";

export default function Explore() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-6 lg:p-8">
          {dummyData.map((item, index) => (
            <NftCard
              key={index}
              image={item.image}
              title={item.title}
              author={item.author}
              owner={item.owner}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
