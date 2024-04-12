import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className=" text-black text-center mt-20">
            
            <h1 className="font-bold text-6xl">404 
                <br />
                Error Page !
            </h1>
            <Link to="/" ><button className="btn btn-secondary bg-blue-300">Go home back</button></Link>
        </div>
        </div>
    );
};

export default Error;