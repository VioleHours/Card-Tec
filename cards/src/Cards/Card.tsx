import React, { useState } from "react";

export interface Product {
    title: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    image: string;
    squareMeters?: string;
    bathrooms?: number;
    bedrooms?: number;
    garage?: string;
    pool?: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const closeDescription = () => {
    setShowDescription(false);
  };

  return (
    <div className="flex w-full p-4 font-lexend-deca justify-center items-center">
      <div
        className="w-[30rem] bg-white/30 rounded-xl overflow-hidden shadow-xl h-full cursor-pointer"
        onClick={toggleDescription}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full p-4 xl:h-[25rem]"
        />
        <div className="p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p className="text-green-600/75 font-bold text-xl">
              {" "}
              ${product.price.toLocaleString("en-US")}
            </p>
          </div>
          <p className="text-gray-700">{product.shortDescription}</p>
          <p className="text-green-500">Leer más</p>
        </div>
      </div>
      {showDescription && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-50 w-full h-full overflow-y-auto"
          onClick={closeDescription}
        >
          <div className="relative  flex flex-row bg-white p-4 rounded-xl shadow-lg max-w-screen-md w-full mx-4 md:h-full md:fixed md:overflow-y-auto">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 px-4 py-2 rounded shadow-md text-xl"
              onClick={closeDescription}
            >
              X
            </button>
              <div className="w-[50%] h-full flex flex-col gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-60 h-44 pr-4 pt-4"
                />
                <p className="text-green-600/75 font-bold text-2xl">
                  {" "}
                  ${product.price.toLocaleString("en-US")}
                </p>
                <p className="text-gray-700 font-bold text-lg">
                  Mts²: {product.squareMeters}
                </p>
                <p className="text-gray-700 font-bold text-lg">
                  Habitaciones: {product.bathrooms}
                </p>
                <p className="text-gray-700 font-bold text-lg">
                  Baños: {product.bedrooms}
                </p>
                <p className="text-gray-700 font-bold text-lg">
                  Garaje: {product.garage}
                </p>
                <p className="text-gray-700 font-bold text-lg">
                  Piscina: {product.pool}
                </p>
              </div>
              <div>
                <h2 className="text-green-600 text-2xl font-semibold mt-4">
                  {product.title}
                </h2>
                <div className="text-gray-700 mt-2 space-y-4">
                  {product.longDescription.split("\n").map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default Card;
