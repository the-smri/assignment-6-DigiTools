import React from "react";

const StepsCards = ({step}) => {
    // console.log(step.stepId);
  return (
    <div>
      <div className="card w-96 bg-base-100  shadow-sm px-4  rounded-2xl">
        <div className="card-body flex flex-col justify-center items-center">
          <div className="self-end flex items-center justify-center w-14 h-14 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4 rounded-full text-white font-bold">
            {step.stepId}
          </div>
          <div className="bg-[#E1E7FF] rounded-full p-8">
            <img src={step.stepImageUrl} width="100px" alt="" />
          </div>
          <div className="space-y-2 text-center">
            <h3 className="text-3xl font-bold text-center">{step.stepTitle}</h3>
            <p className="text-md">
              {step.stepDescription}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default StepsCards;
