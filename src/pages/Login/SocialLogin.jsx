import useAuth from "../../hook/useAuth";


const SocialLogin = () => {
    const {goggleLogin, githubLogin} = useAuth()
    return (
        <div className="text-center">
        <p> Login with   <button onClick={() =>goggleLogin()} className="btn btn-sm bg-red-50">Goggle  </button>
        </p>
        <p>Login with   <button onClick={() =>githubLogin()} className="btn btn-sm bg-blue-50">Github </button>
        </p>
        
     </div>
    );
};

export default SocialLogin;