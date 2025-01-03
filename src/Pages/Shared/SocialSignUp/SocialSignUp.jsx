import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
export default function SocialSignUp({}) {

    const {googleSignUp} = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || '/';

    const axiosPublic = useAxiosPublic();
    
    const gSUHandler= () => {
        googleSignUp()
        .then(res=> {
            const name = res.user?.displayName;
            const email = res.user?.email;
            axiosPublic.post("/user", {name, email}).then(res => {
                alert(res.data);
                
                
            })
            
            navigate(from)
            
        })
        .catch(err => {
            console.log(err);
            
        })
        
        
    }


    return (
        <div className="container">
            <h2 className="text-center">Continue With Social Media</h2>
            <div className="d-flex">
                <div className="m-auto social-sign-up">
                    <button onClick={gSUHandler} className="m-2 google">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button className="m-2 facebook">
                        <FaFacebook></FaFacebook>
                    </button>
                    <button className="m-2 github">
                        <FaGithub></FaGithub>
                    </button>
                </div>
            </div>
        </div>
    )
}