import axios from 'axios';



export function login({email, password}) {

   return axios({
        method: 'post',
        url: 'http://localhost:3002/api/login',
        data: {
            email,
            password
        }
    });
}

export function signup({email, password}) {
    return axios({
        method: 'post',
        url: 'http://localhost:3002/api/signup',
        data: {
            email,
            password
        }
    });
}