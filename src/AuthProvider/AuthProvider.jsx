import {createContext, useEffect, useState } from "react";
import {app} from "../firebase/firebase";
import { 
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,         
    signInWithPopup,         
    signOut,
    updateProfile         
} from "firebase/auth";


// gooogle auth 

const googleProvider = new GoogleAuthProvider()


const auth = getAuth(app);
export const AuthContext = createContext(null);    

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    // auth with email and pass

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const editProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const logOut = () => {
        return signOut(auth);
    }

    // auth with google auth provider

    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }

    


    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        logOut,
        editProfile,
        googleSignUp    
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;