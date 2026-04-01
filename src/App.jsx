
import './App.css'

import NavBar from './component/NavBar';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Models from './component/Models';
import Cart from './component/Cart';
import { useState } from 'react';
import StatsSection from './component/StatsSection';
import StepSection from './component/StepSection';
import Pricing from './component/Pricing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("model")
  console.log(activeTab)
  const [carts, setCarts] = useState([]);

  const removeFromCart = (id) => {
    const updatedCart = carts.filter(item => item.id !== id);
    setCarts(updatedCart);
    toast.error("Item removed from cart!");
  }

  console.log("Current Tab:", activeTab);
  console.log("Items in Cart", carts)

  return (
    <>
      <NavBar carts={carts} />
      <Banner />

      
      <div className="text-center mt-12 mb-4">
        <h2 className="text-5xl font-bold pb-6">Premium Digital Tools</h2>
        <p className='pb-2 text-[#627382] '>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>


      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 checked:bg-[#7C3AED] checked:text-white"
          aria-label="Products"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />

        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 checked:bg-[#7C3AED] checked:text-white"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />

      </div>
      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "cart" && (<Cart carts={carts} removeFromCart={removeFromCart} setCarts={setCarts} />)}

       <StatsSection />
      <StepSection />
       <Pricing/> 
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
