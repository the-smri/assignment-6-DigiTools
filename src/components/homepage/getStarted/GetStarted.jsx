import React, { use } from "react";
import userImg from "../../../assets/user.png";
import StepsCards from "./StepsCards";

const GetStarted = ({promiseStep}) => {
  
  const steps= use(promiseStep);
  // console.log(promiseStep)
  return (
    <div id="features" className="bg-[#F9FAFC] my-18 scroll-mt-24">
      <div className="container mx-auto py-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl">Get Started In 3 Steps</h2>
          <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 items-center pt-10">
          {steps.map((step, index)=><StepsCards key={index} step={step}/>)}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
