import { useNavigate } from "react-router-dom";
import { useAuth } from "../Product/Context-reducer/AuthContext";
import { Navbar } from "../navbar/Navbar"
import './profile.css';

export const Profile = () => {

    const { setAuthToken, authUser, setAuthUser } = useAuth();
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");

        setAuthToken("");
        setAuthUser("");
        navigate("/");
    }

    return (<>

        <Navbar />

        <main className="pf-container">
            <div className="pf-box">
                <h2 className="pf-heading">
                    Profile
                </h2>

                <div className="pf-details">
                    <div className="det-heading">Account Details</div>

                    <div>Name : {`${authUser.firstName} ${authUser.lastName}`}  </div>
                    <div>Email: {`${authUser.email}`}</div>

                    <button
                        className="log-btn"
                        onClick={logoutHandler}
                    >Logout</button>
                </div>
            </div>
        </main>

    </>
    )
}
