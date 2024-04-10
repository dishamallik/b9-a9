import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";


const Update = () => {
    const  { user} = useAuth()
    return (
       <div className="container mx-auto w-auto lg:w-1/3">
     { 
     user? <div className="hero min-h-screen bg-green-50 mt-5 mb-10 shadow-2xl">
     
  <div className="hero-content flex-col ">
  <h1 className="text-4xl font-bold text-green-900">User Profile </h1>
    <img  src={user?.photoURL || "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"} className=" w-2/3  rounded-full shadow-2xl" />
    <div className="text-center">
      <h1 className="text-xl font-bold">Name: {user?.displayName || 'user not found'} </h1>
      <p className="py-6 text-xl font-bold">Email address: {user?.email || 'user not found'} </p>
      
    </div>
  </div>
</div>
:
<div className="card lg:w-96 bg-green-100 shadow-2xl mt-10">
  <div className="card-body text-center">
    <h2 className="text-3xl font-poppins font-bold">User not found !!</h2>
    <p className="text-xl font-poppins font-bold">Please <Link to="/login"><button className="btn btn-sm">login </button></Link> or  <Link to="/register"><button className="btn btn-sm">Register </button></Link> </p>
    
  </div>
</div>
}

        
        </div>
      
    );
};

export default Update;