import React from 'react';
import CartProductCard from './CartProductCard';
import { toast } from 'react-toastify';

const Cart = ({ cart, handleRemove, total, setCart }) => {

    const handleCheckout = () => {
        setCart([])
        toast.success('Payment Success')
    }

    return (
        <div className='my-10 max-w-3xl mx-auto'>
            <h2 className='text-center text-4xl font-bold'>Your Cart</h2>
            <div className='mx-auto space-y-5 my-10'>
                {
                    cart.map((product) => <CartProductCard key={product.id} product={product} handleRemove={handleRemove} />)
                }
            </div>
            {
                cart.length === 0 ? (
                    <div className='py-20 bg-base-300 rounded-3xl text-center'>
                        <p className='text-xl font-bold text-gray-500'>Your cart is empty</p>
                    </div>
                ) : (
                    <div>
                        <div className='bg-neutral text-base-100 flex justify-between py-5 px-10 rounded-3xl mx-auto my-5 text-3xl font-bold'>
                            <h3>Total</h3>
                            <h3>${total}</h3>
                        </div>
                        <button
                            onClick={() => handleCheckout()}
                            className='bg-red-500 text-base-100 text-center py-5 rounded-3xl w-full text-2xl font-bold cursor-pointer hover:bg-red-400'>
                            Proceed to Checkout
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;