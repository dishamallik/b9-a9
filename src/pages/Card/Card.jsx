import { FaChartArea, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {segment_name, image, status, price, area,location, facilities, id} = card;
    return (
        
            
        

<div className="">
        
        <div className=" h-auto  card   bg-blue-50 shadow-2xl  "  >
   <figure className="">
     <img src={image} alt="Shoes" className="rounded-xl w-4/5"   />
   </figure>
  <div className="px-10">
   <div className="flex gap-5" >
       <div className=" text-3xl lg:text-4xl font-bold font-poppins">{segment_name}</div>
       <div >
           <button className="btn btn-sm bg-red-400 font-bold font-poppins">{status}</button >
           </div>
   </div>
  
   

  
   <div className= "  lg:flex gap-5">
       <p><span className="font-bold text-xl ">Price:</span><button className="btn btn-sm text-xl   border-green-400 border-2 ">{price}</button></p>
      
       <p><span className="font-bold  "><FaChartArea /></span><button className="btn btn-xs border-green-400 border-2 ">{area}</button></p>
      
       <p><span className="font-bold "><FaLocationDot /></span><button className="btn btn-xs border-green-400 border-2  ">{location}</button></p>
      
   </div>

   <div className=" flex lg:flex gap-5 px-5 lg:px-10">
       <p><button className="btn btn-xs  bg-orange-100">{facilities[0]}</button></p>
       <p><button className="btn btn-xs bg-orange-100">{facilities[1]}</button></p>
       <p><button className="btn btn-xs bg-orange-100">{facilities[2]}</button></p>
   </div>

  </div>
 

  <div className="text-center mb-5 mt-5">
          <Link to={`/card/${id}`}>
          <button className="btn btn-wide bg-blue-400">View Details</button></Link>
        </div>





 </div>
   </div>
 
       
        
 
 
 
       
    );
};

export default Card;