import axios from 'axios';

const BASE_URL = "https://apple-shop-backend.herokuapp.com/api"

const shopApiInstance = axios.create({
    baseURL: BASE_URL

});

const setBearerToken = token => {
    shopApiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(`Set bearer token, ${token}`);
}

export {shopApiInstance, setBearerToken};