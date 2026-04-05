import React from "react";
import { TiTick } from "react-icons/ti";

const PricingCard = ({ price }) => {
  const cardBg = price.mostPopular
    ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
    : "bg-base-100";
  return (
    <div>
      <div
        className={`card w-96 ${cardBg} bg-base-100 shadow-md rounded-3xl border border-gray-200 h-120 space-y-4`}
      >
        <div className="card-body">
          <div className="flex justify-center relative -top-8">
            {price.mostPopular && (
              <div className="">
                {price.mostPopular && (
                  <span className="badge badge-lg badge-[#FEF3C6] text-[#BB4D00] shadow-sm">
                    Most Popular
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="flex-row justify-between space-y-3">
            <h2 className="text-3xl font-bold">{price.priceTitle}</h2>

            <span className={`text-base ${price.mostPopular ? 'text-purple-100' : 'text-gray-500'}`}>{price.smallDescription}</span>
          </div>

          <div className="flex justify-between items-center space-y-3">
            <h2 className="text-3xl font-bold">{price.monthlyPrice}</h2>

            <p className={`text-xl ${price.mostPopular ? 'text-purple-100' : 'text-gray-500'}`}>/Month</p>
          </div>

          <ul className="mt-6 flex flex-col gap-2 text-md">
            {price.features.map((feature, index) => {
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

          <div className="mt-auto">
            <button className="btn btn-primary btn-block rounded-3xl  text-center p-6">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
