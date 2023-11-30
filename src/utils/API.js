import axios from "axios";

const search = async (query) => {
    return (
        axios.get(`https://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`)
    );
};

const API = { search };

export default API;