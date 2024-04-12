import useAuth from "../../hook/useAuth";
import {useNavigate, useLocation} from "react-router-dom";

const SocialLogin = () => {
    const {goggleLogin, githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
const  from = location?.state || "/";

const  handleSocialLogin = socialProvider => {
    socialProvider().then(result => {
       if(result.user){
        navigate(from);
       }
       
    });
};





    return (
        <div className="text-center">
        <p> Login with   <button onClick={() => handleSocialLogin(goggleLogin)} className="btn btn-sm bg-red-50">Goggle  </button>
        </p>
        <p>Login with   <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-sm bg-blue-50">Github </button>
        </p>
        
     </div>
    );
};

export default SocialLogin;