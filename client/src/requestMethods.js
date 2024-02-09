import axios from "axios";

const BASE_URL = "https://vercel.com/yogesh059s-projects/virtual-pooja-palace1/6HXb9Dq8KMQbYXGF9TTGJZUitZ2S";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    // header: { token: `Bearer ${TOKEN}` }
});