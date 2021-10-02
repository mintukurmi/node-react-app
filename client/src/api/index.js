import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getDoctors = (saveAllDoctors) => {
    API.get("/doctors")
        .then(({ data }) => {
            saveAllDoctors(data);
        })
        .catch((err) => {});
};

export const getCities = (saveAllCities) => {
    API.get("/cities")
        .then(({ data }) => {
            saveAllCities(data);
        })
        .catch((err) => {});
};
