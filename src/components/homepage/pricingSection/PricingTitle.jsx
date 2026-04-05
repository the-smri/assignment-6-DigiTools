import React, { use } from "react";
import PricingCard from "./PricingCard";
import { TiTick } from "react-icons/ti";

const PricingTitle = ({promisePricing}) => {
  const pricingData=use(promisePricing)
  // console.log(pricingData)
  return (
    
    <div id="pricing" className="scroll-mt-24">
      <div className="container mx-auto mt-18">
        <div className="text-center space-y-4">
          <h2 className="text-4xl">Simple, Transparent Pricing</h2>
          <p>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 items-center pt-10">
          {
            pricingData.map(price=>
              <PricingCard key={price.id} price={price}/>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default PricingTitle;
