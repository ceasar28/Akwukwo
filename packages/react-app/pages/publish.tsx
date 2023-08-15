import React, { useState, ChangeEvent } from "react";

export default function Publish() {
  const [name, setName] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedPDF, setSelectedPDF] = useState<File | null>(null);
  const [pdfFileName, setPDFFileName] = useState<string | null>(null);
  const [textBoxValue, setTextBoxValue] = useState<string>("");
  const [numberValue, setNumberValue] = useState<number | null>(null);
  const [priceValue, setPriceValue] = useState<number | null>(null);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", {
      name,
      selectedImage,
      selectedPDF,
      textBoxValue,
      numberValue,
      priceValue,
    });
  };

  return (
    <div className="p-4 border rounded shadow-md">
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
    </div>
  );
}
