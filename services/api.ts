import axios from "axios";

export const api = axios.create({

    baseURL: "https://groweasy-assignment-fe.vercel.app/api"

});