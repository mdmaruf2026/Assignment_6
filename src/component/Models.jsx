import { use } from "react";
import ModelCard from "./ModelCard";

    const Models = 
    ({modelPromise, carts,setCarts}) => {
        const models = use(modelPromise)
       
    
    return (
        <div className="py-20">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 flex-column justify-between">
              {models.map((model, index) => (
              <ModelCard key={index} model  = {model} carts = {carts} setCarts = {setCarts} />
              ))}  
            </div>
        </div>
    );
  };
export default Models;
