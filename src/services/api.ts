import axios from "axios"

export const api = axios.create({
    baseURL: "https://connectdevsapi.onrender.com/",
    timeout: 10000
})