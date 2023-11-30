import axios from "axios";

const search = async (query) => {
    return (
        axios.get(`http://www.omdbapi.com/?apikey=d7cb3875&t=${query}`)
    );
};

const API = { search };

export default API;