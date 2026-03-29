import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { HiH2 } from 'react-icons/hi2';

const CartProductCard = ({ product, handleRemove }) => {

    return (
        <div className='bg-base-300 w-full py-4 px-4 grid grid-cols-7 gap-5 items-center rounded-2xl'>
            <div className='h-25 w-25'>
                <img src={product.image} alt="" />
            </div>
            <div className='col-span-4 pl-3'>
                <h3 className='text-2xl font-bold '>{product.title}</h3>
                <p className='text-gray-500 line-clamp-2'>{product.description}</p>
            </div>
            <div className='text-center ml-auto'>
                {
                    product.price === 0 ? (
                        <h3 className='text-2xl font-bold text-green-500'>Free</h3>
                    ) : (
                        <div>
                            <h3 className='text-2xl font-bold'>${product.price}</h3>
                            <p className='text-gray-500'>per month</p>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-end'>
                <button onClick={() => handleRemove(product)} className='btn btn-ghost hover:text-red-500'><FaTrashAlt size='1.5rem' /></button>
            </div>
        </div>
    );
};

export default CartProductCard;