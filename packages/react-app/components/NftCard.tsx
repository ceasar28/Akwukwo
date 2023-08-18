import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "../components/DetailModal";

interface CardProps {
  image: string;
  title: string;
  author: string;
  //   volume: number;
  owner: string;
  price: number;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  author,
  //   volume,
  owner,
  price,
}) => {
  const [isOpen, Close] = useState<boolean | null>(false);
  const router: any = useRouter();

  const handleModal = () => {
    Close(true);
  };
  const closeModal = () => {
    Close(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-1">By {author}</p>
        {/* <p className="text-gray-600 mb-1"> {volume} available</p> */}
        <p className="text-gray-600 mb-1"> {owner}</p>
        <p className="text-green-600 font-semibold">
          {price.toFixed(2)} Ethers
        </p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleModal}
        >
          {router.route === "/profile" ? "Read" : "View"}
          {/* View */}
        </button>
        {router.route === "/explore" ? (
          <button className="mt-2 mx-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Buy
          </button>
        ) : (
          <button
            className="mt-2 mx-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleModal}
          >
            View
          </button>
        )}
      </div>
      {isOpen === true ? (
        <Modal
          onClose={closeModal}
          image={image}
          title={title}
          author={author}
          description="uweporwoeorwklkejrpoweowpwpl"
          owner={owner}
          price={price}
        ></Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
