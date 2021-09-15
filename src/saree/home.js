import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../app';
import Header from '../saree/header';
import About from '../saree/about';
import Services from '../saree/service';
import Form from '../saree/form';
import Product from '../saree/product';
import Slider from '../saree/slider'

const Home = () => {
  return (
    <div>
        <appMain>
        <Header />
        <Slider />
        <About />
        <Services />
        <Product />
        <Form />
        <App />
      </appMain>
      </div>
      );    
  }

  export default Home;
