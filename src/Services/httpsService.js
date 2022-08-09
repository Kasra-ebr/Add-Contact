import axios from "axios";

axios.default.baseURl = "https"

const http = {
    get: axios.get,
    put:axios.put,
    delete:axios.delete,
    post: axios.post,
};

export default http;