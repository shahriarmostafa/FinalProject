import './Authentication.css';
import { AuthContext } from '../../AuthProvider.jsx/AuthProvider';
import { useContext } from 'react';

import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function SignUp() { 

    const {signUp, loading, editProfile, user} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);
    
    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email =  form.email.value;
        const password = form.password.value
        signUp(email, password).then(res=> {
            editProfile(name)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
            Swal.fire({
                title: "Welcome",
                text: "Signed Up Successfuly",
                icon: "success"
            });
            navigate('/');
        }).catch(err => {
            Swal.fire({
                titie: "Sorry",
                text: err.code + err.message,
                icon: 'error'
            })
        })
    }

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
        </section>
    );
}