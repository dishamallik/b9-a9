import Slider from "../Slider/Slider";
import {useLoaderData} from "react-router-dom";
import Cards from "./Cards";


const Home = () => {
    const cards = useLoaderData()
    // console.log(cards);
    
    return ( 
        <div>
           <div className="    mt-24 lg:mt-2 ">
           <Slider></Slider>

           <div className="text-center">
        <p className="text-5xl font-bold font-poppins mt-10">Estate</p>
        <p className="text-xl  font-poppins mb-10 ">The sprawling estate boasts manicured gardens, ornate 
        fountains, and elegant architecture, <br></br>reminiscent of a bygone era</p>
    </div>


           </div>
           <div className= "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
            {
                cards.map(aCards => <Cards key={aCards.id}
                    cards = {aCards}
                >
                
                </Cards>)
            }
           </div>
           
        </div>
    );
};

export default Home;