import axios from "axios";

const search = async (query) => {
    return (
        axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`)
    );
};

const API = { search };

export default API;