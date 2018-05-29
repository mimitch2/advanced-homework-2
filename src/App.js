import React from "react";
import "./App.css";
import Header from './components/Header';	
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import ProductDetail from './components/ProductDetail';


function App(props) {

  return (
    <div className="App">
      <div className="wrap">

        <Header currentCategory={props.currentCategory} />
        <ImageSlider />
				
        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5><span>FEATURED</span> PRODUCTS</h5>
              <div className="section group">
                <ProductDetail />
               
              </div>
            </div>
            <div className="products products-secondbox">
              <h5><span>Our</span> Specials</h5>
              <div className="section group">
      
              </div>
            </div>
          </div>

        </div>
        <div className="clear"> </div>
        <Footer />
      </div>
	
    </div>
  );
}

export default App;
