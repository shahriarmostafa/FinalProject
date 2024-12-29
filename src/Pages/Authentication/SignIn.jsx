import './Authentication.css';
import { AuthContext } from '../../AuthProvider.jsx/AuthProvider';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function SignIn() {

    const {signIn, loading} = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || '/';


    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email =  form.email.value;
        const password = form.password.value
        
        signIn(email, password)
        .then(res => {
            console.log(res);
            navigate(from);
            
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    return (
        <section className="form">
            <div className="container">
                <h2>Sign in</h2>
                <form onSubmit={submitHandler}>
                    <input name="email" type="email" placeholder="Enter your email" />
                    <input name="password" type="password" placeholder="Enter your password" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    );
}