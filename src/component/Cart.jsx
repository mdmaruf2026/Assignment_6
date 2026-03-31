import React from "react";
import { toast } from "react-toastify";

const Cart = ({carts = [], setCarts, removeFromCart}) => {

    // Safe check
    const safeCarts = Array.isArray(carts) ? carts : [];

    // Calculate total price in cart
    const totalPrice = safeCarts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
        toast.success("Checkout successfully done!");
    };

    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-7xl mx-auto my-12">

            {/* Cart Header with total item count */}
            <h1 className="text-2xl font-bold mb-10">Your Cart ({safeCarts.length})</h1>

            <div className="space-y-5 mt-5">
                {
                    // Check cart if it is empty
                    safeCarts.length === 0 ? (
                        <div className="text-center py-10">
                            <h2 className="text-2xl font-semibold text-gray-500">Your cart is empty</h2>
                            <p className="text-gray-600">Add smart tools</p>
                        </div>
                    ) : (
                        // Loop through cart items and render them
                        safeCarts.map((item) => (
                            <div key={item.id} className="grid grid-cols-12 items-center gap-6 pb-6 border-b border-gray-100 last:border-b-0">
                                <div className="col-span-1 flex items-center justify-center">
                                    {/* Product images */}
                                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl border border-gray-200 p-2 bg-white shadow-sm overflow-hidden">
                                        <img
                                            className="h-full w-full object-contain"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>

                                <div className="col-span-9 flex items-center justify-between">
                                    <div className="flex-1 px-4">
                                        {/* Product titles */}
                                        <h2 className="text-xl font-semibold text-[#1E293B]">{item.title}</h2>
                                        {/* Product prices */}
                                        <p className="text-lg text-gray-500 mt-1">${item.price}</p>
                                    </div>
                                </div>

                                <div className="col-span-2 flex justify-end">
                                    {/* Delete Button with item ID */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 font-semibold cursor-pointer text-sm">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    ) 
                }    
            </div> 

            {/* Total Price section in Cart */}
            <div className="flex justify-between bg-white text-black p-5 mt-5 rounded-lg text-2xl">
                <div className="Total">Total Price</div>
                <div>${totalPrice}</div> 
            </div>

            <button onClick={handlePayment} className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white text-2xl font-semibold py-3 rounded-lg cursor-pointer">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;