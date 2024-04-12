
import FeaturedCards from "../Login/FeaturedCard/FeaturedCards";
import Slider from "../Slider/Slider";

import {Helmet} from "react-helmet";


const Home = () => {
    

    return ( 
        <div>

<Helmet>
                <meta charSet="utf-8" />
                <title>home-COZYSTAY</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>




           <div className="    mt-24 lg:mt-2 ">
           <Slider></Slider>
    <FeaturedCards></FeaturedCards>


           </div>
           
        </div>
    );
};

export default Home;