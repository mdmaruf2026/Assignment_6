import React from "react";

const Cart = ({carts = [], setCarts, removeFromCart}) => {

    // Safe check
    const safeCarts = Array.isArray(carts) ? carts : [];

    // Calculate total price in cart
    const totalPrice = safeCarts.reduce((sum, item) => sum + item.price,0 )

    const handlePayment = () => {
        setCarts([])
    }
    return(
        <div className="p-10">

            {/* Cart Header with total item count */}
          <h1 className="text-2xl font-bold ">Your Cart ({safeCarts.length})</h1>

           
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

                safeCarts.map(item =>(
                    <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between gap-4">

                        <div className="flex items-center gap-4">

                            {/* Product images */}
                            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 overflow-hidden p-1 bg-white">
                                <img className="h-full w-full object-contain rounded-none" src={item.image}alt="" 
                                />
                            </div>

                            {/* Product titles */}
                        <div className="">
                            <h2 className="text-xl font-bold text-[#1E293B]">{item.title} </h2>
                        </div>
                        </div>
                    
                    <div className=" flex gap-50">
                            {/* Product prices */}
                        <div className="text-3xl font-bold ">
                            ${item.price}/month
                        </div>
                    
                    {/* Delete Button with item ID */}
                    <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-semibold cursor-pointer">
                        Remove
                    </button>
                    </div>
            </div>
             ))
            )
           }
            </div>

           {/* Total Price section in Cart */}
            <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl">
                <div className="Total">Total Price</div>
                <div className=""> ${ totalPrice }</div>
            </div>

            <button onClick={handlePayment} className="btn w-full mt-5 bg-red-500 text-white text text-2xl rounded-lg">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;