import React from "react";
import cartImg from "../../../assets/banner.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Cart = ({ cart, setCart, selectedProduct, setSelectedProduct }) => {
  const handleDeleteProduct = (deleteProduct) => {
    const updatedProduct = selectedProduct.filter(
      (selectedPro) => selectedPro.productName != deleteProduct.productName,
    );
    setSelectedProduct(updatedProduct);
    setCart(cart - 1);
  };

  const totalPrice = selectedProduct.reduce(
    (sum, item) => sum + parseFloat(item.productPrice || 0),
    0
  );

  return (
    <div>
      <div className="card bg-white w-full shadow-sm border border-gray-100 p-6 lg:p-8 rounded-3xl mb-16">
        <div className="card-body p-0 space-y-6">
          <h2 className="text-2xl font-bold text-[#1B2135]">Your Cart</h2>
          <div>
            {selectedProduct.length === 0 ? (
              <div className="flex flex-col justify-center items-center py-12 gap-4">
                <FaShoppingCart className="text-6xl text-gray-300" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                <ul className="space-y-4">
                  {selectedProduct.map((selectedPro, index) => (
                    <li className="flex justify-between items-center bg-[#F9FAFC] p-4 rounded-2xl" key={index}>
                      <div className="flex flex-row items-center gap-4">
                        <div className="bg-white p-2 rounded-full shadow-sm flex items-center justify-center shrink-0">
                          <img
                            className="w-10 h-10 object-contain"
                            src={selectedPro.productIcon}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                          <h2 className="font-semibold text-[17px] text-gray-800">
                            {selectedPro.productName}
                          </h2>
                          <div className="text-sm font-medium text-gray-500">
                            ${selectedPro.productPrice}
                          </div>
                        </div>
                      </div>

                      <button
                        className="text-[#FF4A6B] font-medium text-sm hover:underline shrink-0"
                        onClick={() => handleDeleteProduct(selectedPro)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Total and Checkout */}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-500 text-lg">Total:</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${totalPrice.toFixed(2).replace(/\.00$/, '')}
                  </span>
                </div>
                
                <button className="w-full bg-[#8B3DFF] hover:bg-[#7B39FF] text-white font-semibold py-4 rounded-full transition-all">
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
