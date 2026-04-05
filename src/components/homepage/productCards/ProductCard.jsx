import React from "react";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const ProductCard = ({
  productData,
  cart,
  setCart,
  selectedProduct,
  setSelectedProduct,
}) => {
  const bestSeller = " bg-[#FEF3C6] text-[#BB4D00]";
  const popular = "bg-[#E1E7FF] text-[#9514FA]";
  const newBadge = "bg-[#DBFCE7] text-[#0A883E]";

  const badgeColor = (badgeName) => {
    if (badgeName === "Best Seller") {
      return bestSeller;
    } else if (badgeName === "Popular") {
      return popular;
    } else {
      return newBadge;
    }
  };
  const handleBuy = () => {
    setCart(cart + 1);
    setSelectedProduct([...selectedProduct, productData]);
    console.log(selectedProduct);
    toast.success(`${productData.productName} is added`);
    return setCart;
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-md rounded-3xl border border-gray-200 p-2 space-y-4">
        <div className="card-body">
          <div className="flex justify-end">
            <span
              className={`badge badge-lg text-center ${badgeColor(productData.productBadge)}`}
            >
              {productData.productBadge}
            </span>
          </div>
          <div className="flex-row justify-between space-y-3">
            <img src={productData.productIcon} width="50px "alt="" />
            <h2 className="text-3xl font-bold">{productData.productName}</h2>
            <p className="text-base">{productData.productDescription}</p>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-md">
            {productData.productFeatures.map((feature, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-baseline items-center gap-1"
                >
                  <TiTick className="text-green-400 text-xl" />
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            {selectedProduct?.some(
              (item) => item.productId === productData.productId,
            ) ? (
              <button
                className="btn btn-secondary btn-block rounded-3xl text-center p-6"
                disabled
              >
                Already in Cart
              </button>
            ) : (
              <button
                className="btn btn-primary btn-block rounded-3xl text-center p-6"
                onClick={handleBuy}
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
