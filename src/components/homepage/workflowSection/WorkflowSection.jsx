import React from "react";

const WorkflowSection = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-18">
      <div className="container mx-auto py-32">
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-white">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-white" id="workflow">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
          <div className="flex flex-row justify-center items-center gap-4 pt-4">
            <a href="#products" className="btn bg-white text-[#1B2135] hover:bg-gray-100 hover:text-black focus:text-black font-bold border-none px-8 py-3 h-auto min-h-0 rounded-full transition-all">
              Explore Products
            </a>
            <a href="#pricing" className="btn btn-outline border-white text-white hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black font-bold px-8 py-3 h-auto min-h-0 rounded-full transition-all">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
