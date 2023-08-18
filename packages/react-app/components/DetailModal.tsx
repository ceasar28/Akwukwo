import React from "react";
import { useRouter } from "next/router";

interface ModalProps {
  //   isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  author: string;
  description: string;
  owner: string;
  price: number;
}

const Modal: React.FC<ModalProps> = ({
  //   isOpen,
  onClose,
  image,
  title,
  author,
  description,
  owner,
  price,
}) => {
  //   if (!isOpen) {
  //     return null;
  //   }
  const router: any = useRouter();
  return (
    <div className="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-4 rounded-lg w-70vw  shadow-lg flex">
        <div className="modal-image mr-4">
          <img src={image} alt={title} className="w-40 h-auto object-cover" />
          {router.route === "/profile" ? (
            <></>
          ) : (
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg w-full">
              Buy
            </button>
          )}
        </div>
        <div className="modal-details flex-grow overflow-x-auto ">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-1">By {author}</p>
          <p className="mb-2 whitespace-pre-wrap">{description}</p>
          <p className="mb-2">Owner: {owner}</p>
          <p className="text-green-600 font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="modal-close absolute top-2 right-0 p-5 text-black-500 hover:text-gray-1700 font-bold text-xl"
      >
        Close &#10005;
      </button>
    </div>
  );
};

export default Modal;
