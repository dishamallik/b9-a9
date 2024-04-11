import { FaChartArea } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Cards = ({cards}) => {
    const {estate_title, segment_name ,status, description, price, area, location, facilities, image} = cards;
    return (


        

      
        <div className="">
        
             <div className=" h-auto  card   bg-green-50 shadow-2xl ">
        <figure className="">
          <img src={image} alt="Shoes" className="rounded-xl w-4/5" />
        </figure>
       <div className="px-10">
        <div className="flex gap-5" >
            <div className=" md:text-2xl lg:text-4xl font-bold font-poppins">{segment_name}</div>
            <div >
                <button className="btn btn-sm bg-red-400 font-bold font-poppins">{status}</button >
                </div>
        </div>
       
        <div className="text-1xl font-poppins">
            <p>{description}</p>
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
            <button className="btn btn-wide bg-green-600">View Details</button>
        </div>




      </div>
        </div>
      
    );
};

export default Cards;