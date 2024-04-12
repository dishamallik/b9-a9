import { useEffect, useState } from "react";
import Card from "../../Card/Card";


// aos 
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const FeaturedCards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/cards.json')
        .then(res => res.json())
        .then(data => setCards(data));

    },[])





    // aos animation
useEffect(()=>{
    AOS.init({duration: "1500"})

},[])


    return (
        <div>
            <div className="text-center" data-aos="zoom-in-up">
        <p className="text-5xl font-bold font-poppins mt-10">Estate</p>
        <p className="text-xl  font-poppins mb-10 " >The sprawling estate boasts manicured gardens, ornate 
        fountains, and elegant architecture, <br></br>reminiscent of a bygone era</p>
    </div> 
    <div className="container mx-auto    grid md:grid-cols-2 lg:grid-cols-2 gap-6 " data-aos="flip-up"
      >
        {
            cards.map(card => <Card key={card.id} card={card}></Card>)
        }
    </div>
        </div>
    );
};

export default FeaturedCards;