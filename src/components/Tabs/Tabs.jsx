import React from 'react';

const Tabs = ({ selectedTab, setSelectedTab, cart }) => {
    
    const handleSelection = (tabName) => {
        setSelectedTab(tabName)
    }

    return (
        <div className='flex items-center justify-center gap-5'>
            <button
                onClick={() => handleSelection('models')}
                className={`${selectedTab === 'models' && 'bg-red-600 hover:bg-red-500 transition-all duration-300 text-base-100'} px-10 py-3 rounded-3xl font-medium cursor-pointer`}>
                Models
            </button>
            <button
                onClick={() => handleSelection('cart')}
                className={`${selectedTab === 'cart' && 'bg-red-600 hover:bg-red-500 transition-all duration-300 text-base-100'} px-10 py-3 rounded-3xl font-medium cursor-pointer`}>
                Cart({cart.length})
            </button>
        </div>
    );
};

export default Tabs;