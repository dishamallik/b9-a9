// import { useEffect, useState } from "react";
import FeaturedCards from "../Login/FeaturedCard/FeaturedCards";
import Slider from "../Slider/Slider";

// import Cards from "./Cards";


const Home = () => {
    

    return ( 
        <div>
           <div className="    mt-24 lg:mt-2 ">
           <Slider></Slider>
    <FeaturedCards></FeaturedCards>


           </div>
           
        </div>
    );
};

export default Home;