import React from 'react';
import { FaFire, FaHeart, FaStar } from 'react-icons/fa';

const badgeConfig = {
    popular: { bg: 'bg-orange-700', Icon: FaFire, text: 'POPULAR' },
    favourite: { bg: 'bg-orange-500', Icon: FaHeart, text: 'FAVOURITE' },
    mostwanted: { bg: 'bg-orange-300', Icon: FaStar, text: 'MOSTWANTED' }
}

const ProductCard = ({ product, handleAddToCart, cart }) => {
    const badge = badgeConfig[product.status]
    const existingProduct = cart.find((item) => item.id === product.id)

    return (
        <div className='group max-w-sm rounded-2xl border border-base-300 shadow-xl'>
            <div className='bg-base-300 py-10 rounded-t-2xl relative'>
                {
                    badge && (
                        <div className={`${badge.bg} w-fit px-4 py-1 rounded-2xl absolute top-5 right-5 z-1`}>
                            <p className='text-base-100 font-medium text-sm flex items-center gap-1'><badge.Icon /> {badge.text}</p>
                        </div>
                    )
                }
                <img className='h-35 max-w-50 mx-auto group-hover:scale-110 duration-500 transition-transform' src={product.image} alt="" />
            </div>
            <div className='px-4 py-4 space-y-3'>
                <h2 className='text-2xl font-medium'>{product.title}</h2>
                <p className='text-gray-500'>{product.description}</p>
                {!product.price ? (
                    <h3 className='text-green-500 text-2xl font-bold'>Free</h3>
                ) : (
                    <h3 className='text-2xl font-bold'>${product.price} <span className='text-base font-medium text-gray-500'>/month</span></h3>)
                }
                <button onClick={() => handleAddToCart(product)} className='w-full bg-orange-500 py-3 rounded-2xl text-base-100 font-medium cursor-pointer'>
                    {
                        existingProduct ? 'Subscribed' : 'Subscribe Now'
                    }
                </button>
            </div>
        </div>
    );
};

export default ProductCard;