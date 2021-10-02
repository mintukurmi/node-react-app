import React, { useEffect, useState } from "react";
import CardList from "./components/cardlist/CardList";
import Navbar from "./components/navbar/Navbar";
import Toolbar from "./components/toolbar/Toolbar";
import { getDoctors, getCities } from "./api/index";

const App = () => {
    const [allCities, setAllCities] = useState([]);
    const [allDoctors, setAllDoctors] = useState([]);
    const [filteredAvailableDoctors, setFilteredAvailableDoctors] = useState([]);
    const [userSelection, setUserSelection] = useState({
        city: "All",
        isAvailable: true,
    });

    useEffect(() => {
        getDoctors(saveAllDoctors);
        getCities(saveAllCities);
    }, []);

    const saveAllDoctors = (data) => {
        setAllDoctors(data);
        setFilteredAvailableDoctors(data);
    };
    const saveAllCities = (data) => {
        setAllCities(data);
    };

    // handler fn which handles when user select a differeny city selection
    const handleCityChange = (event) => {
        userSelection.city = event.target.value;

        setUserSelection(userSelection);
        let filteredDoctors = "";

        if (userSelection.city === "All") {
            filteredDoctors = allDoctors.filter(
                (item) => userSelection.isAvailable === item.availablity.isAvailable.toString()
            );
        } else {
            filteredDoctors = allDoctors.filter(
                (item) =>
                    item.city === userSelection.city &&
                    userSelection.isAvailable === item.availablity.isAvailable.toString()
            );
        }
        setFilteredAvailableDoctors(filteredDoctors);
    };

    const handleAvailability = (event) => {
        userSelection.isAvailable = event.target.value;
        setUserSelection(userSelection);

        let filteredDoctors = allDoctors.filter(
            (item) =>
                userSelection.isAvailable === item.availablity.isAvailable.toString() &&
                item.city === userSelection.city
        );

        if (userSelection.city === "All") {
            filteredDoctors = allDoctors.filter(
                (item) => userSelection.isAvailable === item.availablity.isAvailable.toString()
            );
        }
        setFilteredAvailableDoctors(filteredDoctors);
    };

    return (
        <div>
            <Navbar />
            <Toolbar
                cities={allCities}
                handleCityChange={handleCityChange}
                handleAvailability={handleAvailability}
            />
            <CardList doctors={filteredAvailableDoctors} />
        </div>
    );
};

export default App;
