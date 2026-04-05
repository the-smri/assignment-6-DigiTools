import React from "react";
import cartImg from "../../../assets/banner.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Cart = ({ cart, setCart, selectedProduct, setSelectedProduct }) => {
  const handleDeleteProduct = (deleteProduct) => {
    const updatedProduct = selectedProduct.filter(
      (selectedPro) => selectedPro.productName != deleteProduct.productName,
    );
    setSelectedProduct(updatedProduct);
    setCart(cart - 1);
    console.log(updatedProduct);
  };
  return (
    <div>
      <div className="card bg-base-200 w-full shadow-md p-4 mb-16">
        <div className="card-body">
          <h2 className="card-title">Your Cart</h2>
          <div className="">
            {selectedProduct.length === 0 ? (
              <div className="flex justify-center items-center">
                <FaShoppingCart className="text-8xl text-gray-400" />
              </div>
            ) : (
              <div className="">
                <ul className="list bg-base-100 rounded-box shadow-md space-y-2">
                  {selectedProduct.map((selectedPro, index) => (
                    <li className="list-row" key={index}>
                      <div>
                        <img
                          className="size-10 rounded-box"
                          src={selectedPro.productIcon}
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-start gap-2 text-xl">
                          <h2 className="font-bold">
                            {selectedPro.productName}
                          </h2>
                        </div>
                        <div className="text-xs uppercase font-semibold opacity-60">$
                          {selectedPro.productPrice}
                        </div>
                      </div>

                      <button
                        className="btn bg-none"
                        onClick={() => handleDeleteProduct(selectedPro)}
                      >
                        <MdDelete color="red" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
