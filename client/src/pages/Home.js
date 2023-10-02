import React from 'react';
import { Link } from 'react-router-dom';
import RandomProductList from '../components/RandomProductList'; // Import the new component
import homeimage from '../assets/Smart-home.jpg';
import category1 from '../assets/Energy-Management-Category.jpg';
import category2 from '../assets/Home-Security-Category.jpg';
import Cart from '../components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const Home = () => {
  return (
  <div className="container">
       <Cart />

     <div className="container-1">
           <div className="text-card">
          
            <h2 className='elegant-font'>Embrace a Greener Tomorrow with Eco-Friendly Smart Home Solutions</h2>
              <div className="shop-button">
                <Link to="/shop" className="shop-link">
                   Shop All Products
                </Link>
                </div>
          </div>
        
      
      
        <div className="gradient-card">
          
          {/* insert homeimage */}
          <img src={homeimage} alt="Smart Home" />
        </div>
      </div>

    {/* suggested categories should be two large cards */}

    <div className="suggested-categories">
           
       <div className="Category-card-1">
         <img src={category1} alt="Smart Home" />

          <div className="card-content">
            <h2>Energy Management</h2>
            <p>Save money and reduce your carbon footprint with our energy management products.</p>
                <Link to="/shop" className="category-link">
                   Shop
                </Link>

          </div>
        </div>



          <div className="Category-card-2">
            <img src={category2} alt="Smart Home" />
            <div className="card-content">
            <h2>Home Security</h2>
            <p> Secure your home from anywhere in the world </p>
                <Link to="/shop" className="category-link">
                   Shop
                </Link>
          </div>
        </div>
      </div>



{/* curated products section */}
    <div className="container-2">
       
      <div className="home-content ">
        <h2>Curated Products</h2>
        <RandomProductList /> {/* Add the RandomProductList component here */}
      </div>
  </div>
  


    </div>
  );
};

export default Home;



