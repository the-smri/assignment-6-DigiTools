import { Suspense, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/homepage/banner/Banner";
import Stats from "./components/homepage/stats/Stats";
import PremiumTitle from "./components/homepage/premiumTitle/PremiumTitle";
import GetStarted from "./components/homepage/getStarted/GetStarted";
import PricingTitle from "./components/homepage/pricingSection/PricingTitle";
import WorkflowSection from "./components/homepage/workflowSection/WorkflowSection";
import Footer from "./components/footerMenu/Footer";
import { ToastContainer } from "react-toastify";


const fetchPlayer = async () => {
  const res = (await fetch("/products.json")).json();
  return res;
};
const fetchSteps= async ()=>{

  const stepRes= (await fetch("/getStarted.json")).json()
  return stepRes;
}

const fetchPricing= async ()=>{

  const pricingRes= (await fetch("/pricing.json")).json()
  return pricingRes;
}

function App() {
  const promiseData= fetchPlayer();
  const promiseStep= fetchSteps();
  const promisePricing=fetchPricing();
  const [cart, setCart]=useState(0);
  // console.log(promiseData)
  // console.log(promiseStep);
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar cart={cart}/>
      <Banner/>
      <Stats/>
      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <PremiumTitle promiseData={promiseData} cart={cart} setCart={setCart}/>

      </Suspense>


      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <GetStarted promiseStep={promiseStep}/>
      </Suspense>

      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <PricingTitle promisePricing={promisePricing}/>  
      </Suspense>

    <WorkflowSection/>
    <Footer/>

    <ToastContainer/>

      


      
    </div>
  );
}

export default App;
