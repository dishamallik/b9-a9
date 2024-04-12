import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";


import {useNavigate, useLocation} from "react-router-dom";
import { useEffect } from "react";

// aos 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Register = () => {
   

    const {createUser,  updateUserProfile} =useAuth();

    const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm()


// navigation 
const navigate = useNavigate();
const location = useLocation();

const  from = location?.state || "/";
// 

    
      const onSubmit = data => 
     {
        const {email, password, image , name} = data

        // update profile
        createUser(email,password)
        .then(() => {
            updateUserProfile( name, image)
            .then(() => {
               
                    navigate(from);
                   

            })
           
            
         });

     };
    
// aos
useEffect(()=>{
    AOS.init({duration: "1500"})

},[])


    return (

<div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>register -COZYSTAY</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
        


        <div className="hero min-h-screen bg-base-200" data-aos="zoom-in-up">
        <div className="hero-content flex-col ">
          <div className="text-left">
            <h1 className="text-5xl  text-green-800 font-bold">Register Now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-50">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder=" your name" className="input input-bordered" 
                {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ImageUrl</span>
                </label>
                <input type="text" name="photo" placeholder="imageUrl" className="input input-bordered"
                {...register("photo", { required: true })}
                  />
                  {errors.photo && <span>This field is required</span>}
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered"
                 {...register("email", { required: true })}  />
                 {errors.email && <span>This field is required</span>}
              </div>
      
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" 
                {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>You already have account? please <Link to="/login">log in</Link></p>
            </form>
           
          </div>
        </div>
      </div>
      </div>
    );
};

export default Register;