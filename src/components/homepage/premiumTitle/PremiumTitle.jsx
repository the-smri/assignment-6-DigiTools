import React, { use, useState } from "react";
import { TiTick } from "react-icons/ti";
import ProductCard from "../productCards/ProductCard";
import Cart from "../productCards/Cart";

const PremiumTitle = ({promiseData, cart, setCart}) => {
  const [selectedType, setSelectedType] = useState("products");
  const handleSelectedType = (selectedRef) => {
    setSelectedType(selectedRef);
  };
  const [selectedProduct, setSelectedProduct]=useState([])
  const productsData=use(promiseData);
  
  
  return (
    <div className="container mx-auto my-16 space-y-5 ">
      <div className="text-center space-y-3">
        <h2 className="text-4xl">Premium Digital Tools</h2>
        <p className="text-gray-400 text-base">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
        <div className="inline-flex items-center bg-white p-1 rounded-full shadow-md border border-gray-100">
          <button
            className={`px-8 py-3 rounded-full ${selectedType === "products" ? " text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-tra"}  font-semibold transition-all hover:opacity-90`}
            onClick={() => handleSelectedType("products")}
          >
            Products
          </button>

          <button
            className={`px-8 py-3 rounded-full ${selectedType === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-tra"}  font-semibold transition-all hover:opacity-90`}
            onClick={() => handleSelectedType("cart")}
          >
            Cart ({cart})
          </button>
        </div>
      </div>
      {selectedType==='products'? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-8">
        {
          productsData.map(productData=>
            <ProductCard key={productData.productId} productData={productData} cart={cart} setCart={setCart} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
          )
        }
      </div>: <Cart cart={cart} setCart={setCart} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/> }
    </div>
  );
};

export default PremiumTitle;
