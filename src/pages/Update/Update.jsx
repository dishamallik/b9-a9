// aos 
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import {Helmet} from "react-helmet";
import useAuth from "../../hook/useAuth";
import { useEffect } from 'react';

const Update = () => {
  const  { user} = useAuth()
  // aos
useEffect(()=>{
  AOS.init({duration: "1500"})

},[])
    
    return (

<div>

<Helmet>
                <meta charSet="utf-8" />
                <title>Update -COZYSTAY</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

<div className="">
<div className="card sm:mx-20 md:mx-40 lg:mx-60 item-center bg-blue-100 mt-5 shadow-xl" data-aos="zoom-in-up">
  <div><h1 className="text-center font-bold font-poppins lg:text-4xl text-blue-800">User profile</h1></div>

  <figure className="px-10 pt-10">
    <img src={user?.photoURL || "https://i.ibb.co/df04xnj/user.jpg"} alt="Shoes" className="rounded-full max-w-xs  md:max-w-sm  lg:max-w-sm" />
  </figure>
  <div className="card-body items-center text-center font-poppins">
    <h2 className="card-title">Name: {user?.displayName || "not Found"}</h2>
    <h2 className="card-title">Email: {user?.email || "not found"}</h2>
    <button className="btn btn-wide bg-slate-400 ">Edit </button>
    
  </div>
</div>
</div>
 </div>
      
    );
};

export default Update;