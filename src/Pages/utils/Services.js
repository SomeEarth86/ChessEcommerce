import axios from "axios";

async function loginService(email, password) {
    try {
        const response = await axios.post("/api/auth/login", {
            email: email,
            password: password,
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error();
        }
    } catch (e) {
        console.log("loginService: Error in Login", e); // convert this in error page
    }
}

const SignupService = async ({ firstName, lastName, password, email }) => {
    await axios.post('/api/auth/signup', {
        firstName,
        lastName,
        password,
        email,
    })
}

export { loginService, SignupService };