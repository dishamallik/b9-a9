import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// social providers
const goggleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();




const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true)
   
    



// create user
const createUser = ( email, password) => {
    setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)


};


// update user profile
const updateUserProfile = (name, image) => {
 return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      })
}




// sign in 
const sigInUser = ( email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
};


// goggle login
const goggleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, goggleProvider)

}
// github login

const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, GithubProvider)

}

// Logout 


const logout = () =>{
   
    setUser(null)
    signOut(auth)
}


// observer
useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          setLoading(false)
          
          
        }
      });
      return () =>unsubscribe();
},[])



    const allValues = {
        createUser,
        sigInUser,
        goggleLogin,
        githubLogin,
        logout,
        user,
        updateUserProfile,
        loading



        
        

    }



    
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;