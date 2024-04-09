import { Link } from "react-router-dom";

const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email, password)

}
const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-left">
            <h1 className="text-5xl  text-green-800 font-bold">Register Now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-50">
            <form onSubmit={handleRegister} className="card-body">
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder=" your name" className="input input-bordered" required />
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" name="photo" placeholder="your image" className="input input-bordered" required  />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
      
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>new to COZYSTAY? please <Link to="/login">log in</Link></p>
            </form>
           
          </div>
        </div>
      </div>
    );
};

export default Register;