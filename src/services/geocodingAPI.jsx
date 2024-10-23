import axios from "axios";

const geocodingApi = axios.create({
    baseURL: "http://api.openweathermap.org/geo/1.0/direct?"
})

export default geocodingApi;