import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)

    return (
        <div className='my-10'>
            <h2 className='text-center text-4xl font-bold'>Choose Your AI Model</h2>
            <p className='text-center text-gray-500 font font-medium text-lg mt-1'>One subscription gives you access to all frontier AI models</p>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 container mx-auto'>
                {
                    models.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Models;