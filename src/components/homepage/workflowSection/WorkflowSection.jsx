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
          <div className="flex flex-row justify-center items-center gap-2">
            <button className="btn bg-white text-blue-700">
              Explore Products
            </button>
            <button className="btn btn-outline text-white hover:bg-white hover:text-blue-600">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
