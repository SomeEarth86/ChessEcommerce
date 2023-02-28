import './auth.css';
import '../index.css'
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Navbar />

            <div className="main-content-auth">

                <div className="log-card">
                    <h2>Login</h2>

                    <label htmlFor="email">Email
                    </label>
                    <input className="inp" type="text" name="email" />
                    <label htmlFor="password">Password
                    </label>
                    <input className="inp" type="password" name="password" />

                    <div className="rem-tab">
                        <div className="remember">
                            <input type="checkbox" name="rem" />
                            <label htmlFor="rem">Remember Me</label>
                        </div>

                        <a href="#">Forgot Password</a>
                    </div>

                    <div className="footer-btm">
                        <button className="btn btn-dark">Login</button>

                        <Link to='/signup' >
                            Create a new account
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export { Login };