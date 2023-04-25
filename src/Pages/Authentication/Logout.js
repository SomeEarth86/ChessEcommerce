import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar"
import './auth.css';


export const Logout = () => {
    return (<>
        <Navbar />

        <main className="container">
            <div className="text-field">
                <div>
                    <h1>You are Logged Out</h1>
                    <h3 className="subtext">To continue Browsing, <strong>Login</strong>. Don't have one ? <strong>Signup</strong> below. </h3>
                </div>
                <div className="button-tab">
                    <Link to='/login'>
                        <button className="auth-btn">Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button className="auth-btn">Sign Up</button>
                    </Link>
                </div>
            </div>

            <div>
                <img className="logout-img" src="https://res.cloudinary.com/ducun9wpr/image/upload/v1681184535/Ecommerce/logout_sdwx0g.webp" alt="logout-img-vector" />
            </div>
        </main>
    </>)
}
