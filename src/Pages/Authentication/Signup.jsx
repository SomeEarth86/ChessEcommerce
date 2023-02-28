import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import './auth.css';
import '../index.css'

const Signup = () => {
    return (
        <>
            <Navbar />

            <div className="main-content-auth">

                <div className="log-card">
                    <h2>Signup</h2>

                    <label htmlFor="email">Email
                    </label>
                    <input className="inp" type="text" name="email" />
                    <label htmlFor="password">Password
                    </label>
                    <input className="inp" type="password" name="password" />

                    <div className="rem-tab">
                        <div className="remember">
                            <input type="checkbox" name="rem" />
                            <label htmlFor="rem">I accept all the Terms and conditions</label>
                        </div>
                    </div>

                    <div className="footer-btm">
                        <button className="btn btn-dark">Create New Account</button>

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