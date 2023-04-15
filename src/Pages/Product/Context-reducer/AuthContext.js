import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignupService } from "../../utils/Services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const localStorageToken = JSON.parse(localStorage.getItem("login"));

    const [token, setToken] = useState(localStorageToken?.token)

    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(localStorageUser?.user);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchToken = JSON.parse(localStorage.getItem('login'));

        if (fetchToken)
            setToken(fetchToken.tokens);
    }, []);

    const signupUser = async (firstName, lastName, password, email) => {
        try {
            const response = await SignupService({
                firstName,
                lastName,
                password,
                email,
             });

            if (response.status === 201) {
                localStorage.setItem('login',
                    JSON.stringify({
                        token: response.data.encodedToken,
                        user: resp.data.createdUser,
                    })
                );
                setUser(response.data.createdUser);
                setToken(response.data.encodedToken);
            }
        }
        catch (err) {
            console.log("Following Login Error at AuthContext", err)
        }
    }

    return (<AuthContext.Provider value={{
        signupUser,
        token,
        setToken,
        user,
        setUser,
    }}>
        {children}
    </AuthContext.Provider>)
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };