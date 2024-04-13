import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// SweetAlert import
import Swal from 'sweetalert2';

// aos 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    // Password visibility state
    const [showPassword, setShowPassword] = useState(false);

    // navigation 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;  
        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, image)
                .then(() => {
                    // Show SweetAlert on successful registration
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful!',
                        text: 'You have been successfully registered.',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        navigate(from);
                    });
                });
            });
    };

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: "1500" })
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register - COZYSTAY</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200" data-aos="zoom-in-up">
                <div className="hero-content flex-col ">
                    <div className="text-left">
                        <h1 className="text-5xl text-green-800 font-bold">Register Now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-50">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" {...register("fullName", { required: true })} />
                                {errors.fullName && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" {...register("image", { required: true })} />
                                {errors.image && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" {...register("password", { required: true, minLength: 6, pattern: passwordRegex })} />
                                    <div
                                       
                                        className="absolute inset-y-0 right-6 px-3 py-5"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                                    </div>
                                </div>
                                {errors.password && errors.password.type === "required" && <span className="text-red-500">Password is required</span>}
                                {errors.password && errors.password.type === "minLength" && <span className="text-red-500">Password must contain at least 6 characters</span>}
                                {errors.password && errors.password.type === "pattern" && <span className="text-red-500">Password must contain at least one uppercase letter and one lowercase letter</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account? Please <Link to="/login">log in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
