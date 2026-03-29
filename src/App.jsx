import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Models from './components/Models/Models';
import Tabs from './components/Tabs/Tabs';
import Cart from './components/Cart/Cart';
import { toast, ToastContainer } from 'react-toastify';

const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json()
}

const modelPromise = getModels()

const App = () => {
  const [selectedTab, setSelectedTab] = useState('models')
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id)
    if (existingProduct) {
      toast.error('Product already exist in your cart')
    } else {
      setCart((prevCart) => [...prevCart, product])
      toast.success('Product added to you cart')
      setTotal((prevTotal) => prevTotal + product.price)
    }
  }

  const handleRemove = (product) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== product.id))
    setTotal((prevTotal) => prevTotal - product.price)
    toast.success('Product removed from your cart')
  }

  return (
    <>
      <NavBar />
      <Banner />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        cart={cart}
      />
      {
        selectedTab === 'models' ? <Models modelPromise={modelPromise} handleAddToCart={handleAddToCart} cart={cart} /> : <Cart cart={cart} handleRemove={handleRemove} total={total} setCart={setCart} />
      }
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;