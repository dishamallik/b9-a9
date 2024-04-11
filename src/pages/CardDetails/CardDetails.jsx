import {useLoaderData, useParams} from "react-router-dom";

const CardDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    console.log(card);
    return (
        <div>
            <h1>this details of {id}</h1>
            
            <h1>this details of {card.estate_title}</h1>

        </div>
    );
};

export default CardDetails;