import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// social providers
const goggleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();




const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
   
    



// create user
const createUser = ( email, password) => {
     return createUserWithEmailAndPassword(auth, email, password)


};

// sign in 
const sigInUser = ( email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
};


// goggle login
const goggleLogin = () => {
    return signInWithPopup(auth, goggleProvider)

}
// github login

const githubLogin = () => {
    return signInWithPopup(auth, GithubProvider)

}

// Logout 


const logout = () =>{
    setUser(null)
    signOut(auth)
}


// observer
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          
          
        }
      });
},[])



    const allValues = {
        createUser,
        sigInUser,
        goggleLogin,
        githubLogin,
        logout,
        user

        
        

    }



    
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;