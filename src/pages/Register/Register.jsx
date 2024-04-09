import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";


const Register = () => {
   

    const {createUser} =useAuth();

    const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm()
    
      const onSubmit = data => 
     {
        const {email, password} = data
        createUser(email,password)
        .then(result => {
            console.log(result)
        })

     };
    



    return (
        <div className="hero min-h-screen bg-base-200">
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
    );
};

export default Register;