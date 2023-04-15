import axios from "axios";

const loginService = async ({ email, password }) => await axios.post('/api/auth/login', {
    email,
    password,
});

const SignupService = async ({ firstName, lastName, password, email }) => {
    await axios.post('/api/auth/signup', {
        firstName,
        lastName, 
        password,
        email,
    })
}

export { loginService, SignupService };