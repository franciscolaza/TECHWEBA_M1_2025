import React from 'react';

const ProductCard = ({ image, brand, name, price }) => {
  return ( 
      <div className=" p-4 h-full flex flex-col items-center  ">
        <img
          src={image}
          alt={name}
          className="h-[100%] w-full mb-4"
        />
        <h1 className="font-bold">{brand}</h1>
        <p className="text-gray-500 text-center">{name}</p>
        <h1 className="font-bold">${price}</h1>
      </div>
    
  );
};

export default ProductCard;
