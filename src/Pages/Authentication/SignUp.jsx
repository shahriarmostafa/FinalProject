import './Authentication.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';

import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialSignUp from '../Shared/SocialSignUp/SocialSignUp';

export default function SignUp() { 

    const {signUp, editProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const AxiosPublic = useAxiosPublic();
    
    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email =  form.email.value;
        const password = form.password.value
        signUp(email, password).then( res => {
            editProfile(name)
            .then(response => {
                AxiosPublic.post("/user", {
                    name: name,
                    email: email
                }).then(res => {
                    Swal.fire({
                        title: "Welcome",
                        text: "Signed Up Successfuly",
                        icon: "success"
                    });
                    navigate('/');
                })
            })
            .catch(err => {
                console.log(err);
            });
            
        }).catch(err => {
            Swal.fire({
                titie: "Sorry",
                text: err.code + err.message,
                icon: 'error'
            })
        })
    }

    //google Sign upp

    

    return (
        <section className="form">
            <div className="container">
                <h2>Sign UP</h2>
                <form onSubmit={submitHandler}>
                    <input name="name" type="name" placeholder="Enter your name" />
                    <input name="email" type="email" placeholder="Enter your email" />
                    <input name="password" type="password" placeholder="Enter your password" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>

            <SocialSignUp></SocialSignUp>
        </section>
    );
}