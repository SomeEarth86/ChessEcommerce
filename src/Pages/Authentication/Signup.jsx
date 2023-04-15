import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import './auth.css';
import '../index.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../Product/Context-reducer/AuthContext';


const Signup = () => {

    const navigate = useNavigate();

    const [signupForm, setSignForm] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
    })

    const { token, signupUser } = useAuth();

    useEffect(() => {
        let id;
        if (token) {
            id = setTimeout(() => {
                navigate('/product-explore');
            }, 500)
        }
        return () => clearTimeout(id);
    })

    const signupHandler = (e) => {
        e.preventDefault();

        const { firstName, lastName, password, email } = signupForm;

        if (firstName && lastName && password && email !== '') {
            (async () => {
                signupUser(firstName, lastName, password, email);
            })();
        }
    }

    return (
        <>
            <Navbar />

            <div className="main-content-auth">

                <div className="log-card">
                    <h2>Signup</h2>

                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name='firstName'
                        placeholder='JohnRao'
                        value={signupForm.firstName}
                        onChange={(e) => setSignForm({
                            ...signupForm,
                            firstName: e.target.value,
                        })}
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name='lastName'
                        placeholder='DoeKar'
                        value={signupForm.lastName}
                        onChange={(e) => setSignForm({
                            ...signupForm,
                            lastName: e.target.value,
                        })}
                    />

                    <label htmlFor="email">Email
                    </label>
                    <input
                        className="inp"
                        type="text"
                        name="email"
                        placeholder='xyz@reddifmail.com'
                        value={signupForm.email}
                        onChange={(e) => setSignForm({
                            ...signupForm,
                            email: e.target.value,
                        })}
                    />


                    <label htmlFor="password">Password
                    </label>
                    <input
                        className="inp"
                        type="password"
                        name="password"
                        placeholder='**********'
                        value={signupForm.password}
                        onChange={(e) => setSignForm({
                            ...signupForm,
                            password: e.target.value,
                        })}
                    />

                    <div className="footer-btm">
                        <button
                            className="btn btn-dark"
                            onClick={(e) => signupHandler(e)}
                        >
                            Create New Account</button>

                        <Link to='/login'>
                            Already have an account
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}
export { Signup }