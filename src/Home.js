import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_containter">
        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Watch Now Background" />

        <div className="home_row ">
          <Product title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={11.96} rating={5} image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg' />
          <Product title="KitchenAid KSM7586PSR 7-Quart Pro Line Stand Mixer Sugar Pearl Silver" price={699.95} rating={4} image="https://m.media-amazon.com/images/I/71DnucdeYpL._AC_UL320_.jpg" />
        </div>

        <div className="home_row ">
          <Product title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Rosewood/Rosewood, One Size (S &L Bands Included)" price={145.51} rating={4} image="https://m.media-amazon.com/images/I/91au8g2DhML._AC_UY218_.jpg" />
          <Product title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal" price={49.99} rating={4} image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg" />
          <Product title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={949.00} rating={5} image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY218_.jpg" />
        </div>

        <div className="home_row ">
          <Product title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI" price={1172.04} rating={5} image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg" />

        </div>
      </div>
    </div>
  )
}

export default Home
