import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Models from './components/Models/Models';

const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json()
}

const modelPromise = getModels()

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Models modelPromise={modelPromise} />
      <Footer />
    </>
  );
};

export default App;