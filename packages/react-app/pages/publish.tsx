import React, { useState, ChangeEvent, useEffect } from "react";
import { uploadJSONToIPFS, uploadFileToIPFS } from "../pinata";
declare var window: any;

const getEthereumObject = () => window.ethereum;

/*
 * This function returns the first linked account found.
 * If there is no account linked, it will return null.
 */
const findMetaMaskAccount = async (): Promise<string | null> => {
  try {
    const ethereum = getEthereumObject();

    /*
     * First make sure we have access to the Ethereum object.
     */
    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      alert("get metamask account");
      return null;
    }

    console.log("We have the Ethereum object", ethereum);
    const accounts = (await ethereum.request({
      method: "eth_accounts",
    })) as string[];

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function Publish() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedPDF, setSelectedPDF] = useState<File | null>(null);
  const [pdfFileName, setPDFFileName] = useState<string | null>(null);
  const [textBoxValue, setTextBoxValue] = useState<string>("");
  const [numberValue, setNumberValue] = useState<number | null>(null);
  const [priceValue, setPriceValue] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handlePDFChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedPDF(file);
      setPDFFileName(file.name);
    }
  };

  const handleTextBoxChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextBoxValue(event.target.value);
  };

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setNumberValue(isNaN(value) ? null : value);
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setPriceValue(isNaN(value) ? null : value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", {
      name,
      author,
      selectedImage,
      selectedPDF,
      textBoxValue,
      numberValue,
      priceValue,
    });
    setMessage("Pining to IPFS, this usually take some mins.......");
    const pinPdf = await uploadFileToIPFS(selectedPDF);
    const pinImg = await uploadFileToIPFS(selectedImage);

    try {
      if (pinPdf && pinImg) {
        const meta = await uploadJSONToIPFS({
          name: name,
          author: author,
          decription: textBoxValue,
          imageurl: pinImg.pinataURL,
          resourcesUrl: pinPdf.pinataURL,
        });
        if (meta.pinataURL) {
          setMessage("Minting..........");
          // call the createtoken function here
        }
        console.log(meta);
      }
    } catch (error) {
      setMessage("Please try again, there was an error");
      console.log(error);
    }
  };

  useEffect(() => {
    const findAccount = async () => {
      const account = await findMetaMaskAccount();
      if (account !== null) {
        setWallet(account);
      }
    };

    findAccount();
  }, []);

  return (
    <div className="p-4 border rounded shadow-md ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Title
          </label>
          <input
            type="text"
            id="name"
            className="form-input w-full"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            className="form-input w-full"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Cover Image
          </label>
          <input
            type="file"
            id="image"
            className="form-input w-full"
            onChange={handleImageChange}
          />
          {previewImage && (
            <img src={previewImage} alt="Preview" className="mt-2 h-24" />
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="pdf">
            Book/Article pdf
          </label>
          <input
            type="file"
            id="pdf"
            className="form-input w-full"
            accept=".pdf"
            onChange={handlePDFChange}
          />
          {pdfFileName && (
            <p className="mt-2">{`Selected PDF: ${pdfFileName}`}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="textBox"
          >
            Description
          </label>
          <textarea
            id="textBox"
            className="form-input w-full"
            rows={4}
            value={textBoxValue}
            onChange={handleTextBoxChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="number"
          >
            Number to Publish
          </label>
          <input
            type="number"
            id="number"
            className="form-input w-full"
            value={numberValue !== null ? numberValue : ""}
            onChange={handleNumberChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="form-input w-full"
            value={priceValue !== null ? priceValue : ""}
            onChange={handlePriceChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Mint
        </button>
      </form>
      <h4>{message}</h4>
    </div>
  );
}
