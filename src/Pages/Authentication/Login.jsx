import './auth.css';
import '../index.css'
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Product/Context-reducer/AuthContext';
import { useEffect, useState } from 'react';
import { loginService } from '../utils/Services';

const Login = () => {
    const { setAuthToken, setAuthUser } = useAuth();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const loginHandler = async (e) => {
        try {
            let response;
            if (e.target.innerText === "Guest Login") {
                setLoginData({
                    email: "adarshbalika@gmail.com",
                    password: "adarshbalika",
                });
                response = await loginService(
                    "adarshbalika@gmail.com",
                    "adarshbalika"
                );
            }
            else
                response = await loginService(loginData.email, loginData.password);


            const user = JSON.stringify(response.foundUser);
            const tokenResponse = response.encodedToken;

            setAuthToken(tokenResponse);
            setAuthUser(response.foundUser);

            localStorage.setItem("authToken", tokenResponse);
            localStorage.setItem("authUser", user);

            navigate("/product-explore");
        } catch (e) {
            console.log("loginHandler: Error @ Login.jsx", e);
        }
    };

    return (
        <>
            <Navbar />

            <div className="main-content-auth">

                <div className="log-card">
                    <h2>Login</h2>

                    <label htmlFor="email">Email
                    </label>
                    <input
                        className="inp"
                        type="text"
                        name="email"
                        value={loginData.email}
                        onChange={(e) => {
                            setLoginData({
                                ...loginData,
                                email: e.target.value,
                            })
                        }}
                    />

                    <label htmlFor="password">Password
                    </label>

                    <input
                        className="inp"
                        type="password"
                        placeholder='**********'
                        name="password"
                        value={loginData.password}
                        onChange={(e) => {
                            setLoginData({
                                ...loginData,
                                password: e.target.value,
                            })
                        }}
                    />



                    <div className="footer-btm">
                        <button
                            className="btn btn-dark"
                        >Login</button>

                        <button
                            className="btn btn-dark accent"
                            onClick={loginHandler}
                        >Guest Login</button>

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