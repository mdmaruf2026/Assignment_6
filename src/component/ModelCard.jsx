import React, { useState } from "react";

const ModelCard = ({ model, carts, setCarts }) => {
    const [isBought, setIsBought] = useState(false);

    const handleBuying = () => {
        setIsBought(true)
        setCarts([...carts, model])

    }
    return (
        <div key={model.id} className="relative shadow-lg rounded-lg border overflow-hidden border-[#627382] flex flex-col justify-between bg-whites">
            {model.badge && (<span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full 
                        ${model.badge === 'Best Seller' ? 'bg-[#FEF3C7] text-[#D97706]' : ''}
                        ${model.badge === 'Popular' ? 'bg-[#EEF2FF] text-[#4F46E5]' : ''}
                        ${model.badge === 'New' ? 'bg-[#ECFDF5] text-[#059669]' : ''}
                        `}>
                {model.badge}
            </span>)}

            <div className="flex justify-start items-center px-4 pt-4 pb-2">
                <div className="w-14 h-14 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center text-2xl shadow-sm overflow-hidden">
                    <img className="h-40 w-40 object-contain" src={model.image} alt="" />
                </div>
            </div>

            <div className="p-4">
                <h2 className="text=2xl font-bold">{model.title}</h2>
                <p>{model.description}</p>

                {/*  */}
                <ul className="space-y-2 mb-6 text-sm text-[#475569]">
                    {model.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-[#10B981] font-bold">✓</span> {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <span className="text-2xl font-bold">${model.price}</span>
                <span className="text-gray-500 text-sm">{model.price_type}</span>
            </div>
            <div className="">

                <button onClick={handleBuying} className={`w-full py-2 rounded font-semibold text-white transition ${isBought ? "bg-[#10B981] cursor-not-allowed" : "bg-[#7C3AED] hover:bg-[#6D28D9]"}`} disabled={isBought}> {isBought ? "Added to cart" : "Buy now"}

                </button>
            </div>

        </div>

    )
}

export default ModelCard;
