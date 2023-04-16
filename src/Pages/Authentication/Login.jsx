import './auth.css';
import '../index.css'
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Product/Context-reducer/AuthContext';
import { useEffect, useState } from 'react';
import { loginService } from '../utils/Services';

const Login = () => {
    const navigate = useNavigate();

    const { setUser, token, setToken } = useAuth();

    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        let id;
        if (token) {
            setTimeout(() => {
                navigate('/');
            }, 500)
        }

        return () => clearTimeout(id);
    }, [token])

    const loginHandler = async (event, setLoginUser, loginUser) => {
        event.preventDefault();
        try {
            let response;

            console.log("inside try");

            if (event.target.innerText === 'Guest Login') {
                console.log("Inside guest login");
                setLoginUser({
                    email: 'adarshbalika@gmail.com',
                    password: 'adarshbalika'
                });
                console.log("before", response);
                response = await loginService('adarshbalika@gmail.com', 'adarshbalika')
                console.log("after", response);
            }
            else {
                console.log("inside else block @Login.jsx");
                response = await loginService(loginUser.email, loginUser.password)

            }
            console.log(response);
            if (response.status === 200 || response.status === 201) {
                console.log("inside 200 and 201");
                localStorage.setItem(
                    'login', JSON.stringify({
                        token: response.data.encodedToken,
                        user: response.data.foundUser,
                    })
                )
            }
            console.log("here, successful login");
            setUser(response.data.foundUser);
            setToken(response.data.encodedToken);
            navigate('/product-explore');

        } catch (err) {
            console.log("Inside catch");
            console.log("Error @ LoginHandler ", err);
        }
    }

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
                        value={loginUser.email}
                        onChange={(e) => {
                            setLoginUser({
                                ...loginUser,
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
                        value={loginUser.password}
                        onChange={(e) => {
                            setLoginUser({
                                ...loginUser,
                                password: e.target.value,
                            })
                        }}
                    />



                    <div className="footer-btm">
                        <button
                            className="btn btn-dark"
                            onClick={(e) => loginHandler(e, setLoginUser, loginUser)}
                        >Login</button>

                        <button
                            className="btn btn-dark accent"
                            onClick={(e) => loginHandler(e, setLoginUser, loginUser)}
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