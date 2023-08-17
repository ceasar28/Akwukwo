import React from "react";

interface CardProps {
  image: string;
  title: string;
  author: string;
  owner: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, title, author, owner, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-1">By {author}</p>
        <p className="text-gray-600 mb-1"> {owner}</p>
        <p className="text-green-600 font-semibold">${price.toFixed(2)}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
          View
        </button>
        <button className="mt-2 mx-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
