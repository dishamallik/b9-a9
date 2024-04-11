import { useEffect, useState } from "react";
import Card from "../../Card/Card";


const FeaturedCards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/cards.json')
        .then(res => res.json())
        .then(data => setCards(data));

    },[])

    return (
        <div>
            <div className="text-center">
        <p className="text-5xl font-bold font-poppins mt-10">Estate</p>
        <p className="text-xl  font-poppins mb-10 ">The sprawling estate boasts manicured gardens, ornate 
        fountains, and elegant architecture, <br></br>reminiscent of a bygone era</p>
    </div> 
    <div className="container mx-auto    grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {
            cards.map(card => <Card key={card.id} card={card}></Card>)
        }
    </div>
        </div>
    );
};

export default FeaturedCards;