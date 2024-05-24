import axios from "axios";

const baseUrl = "http://192.168.50.106:3000"

export default axios.create ({baseURL : baseUrl})