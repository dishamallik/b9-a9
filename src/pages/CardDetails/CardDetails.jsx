import { FaChartArea, FaLocationDot } from "react-icons/fa6";
import {useLoaderData, useParams} from "react-router-dom";

const CardDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    console.log(card);
    return (
        <div>
            
            <div className="container mx-auto mt-10  hero  min-h-screen shadow-2xl bg-blue-50">
  <div className="hero-content flex-col lg:flex-row">
    <img src={card.image} className="max-w-xs md:max-w-lg lg:max-w-lg rounded-lg shadow-2xl" />
    <div>
    <div className="flex gap-5" >
       <div className=" text-3xl lg:text-4xl font-bold font-poppins">{card.segment_name}</div>
       <div >
           <button className="btn btn-sm bg-red-400 font-bold font-poppins">{card.status}</button >
           </div>
   </div>
<div className="  ">
    <p className="text-3xl font-bold font-poppins">{card.estate_title}</p>
    <p className="text-lg   text-stone-500 font-poppins text-left">{card.description}</p>
</div>





    <div className= "md:flex  lg:flex gap-5">
       <p><span className="font-bold text-xl ">Price:</span><button className="btn btn-sm text-xl   border-green-400 border-2 ">{card.price}</button></p>
      
       <p><span className="font-bold  "><FaChartArea /></span><button className="btn btn-xs border-green-400 border-2 ">{card.area}</button></p>
      
       <p><span className="font-bold "><FaLocationDot /></span><button className="btn btn-xs border-green-400 border-2  ">{card.location}</button></p>
      </div>
      <div className=" flex lg:flex gap-5 px-5 lg:px-10">
       <p><button className="btn btn-xs  bg-orange-100">{card.facilities[0]}</button></p>
       <p><button className="btn btn-xs bg-orange-100">{card.facilities[1]}</button></p>
       <p><button className="btn btn-xs bg-orange-100">{card.facilities[2]}</button></p>
   </div>

    </div>
  </div>
</div>

        </div>
    );
};

export default CardDetails;