import {useNavigate, useLocation} from "react-router-dom";

import { useForm } from "react-hook-form";

import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";




const Login = () => {
   
        const {sigInUser} = useAuth();
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
        
          const onSubmit = data => {
            const {email, password} = data;

            sigInUser(email, password)
            .then(result => {
                if(result.user){
                 navigate(from);
                }
                
             });
            

          };

    
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-left">
      <h1 className="text-5xl  text-green-800 font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-50">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" 
          {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" 
          {...register("password", { required: true })} 
          />
          {errors.password && <span>This field is required</span>}
          <label className="label">
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>new to COZYSTAY? please <Link to="/register">Register</Link></p>
        

       
        
      </form>

<div>
<SocialLogin></SocialLogin>
</div>
      
     
    </div>
  </div>
</div>
    );

};

export default Login;