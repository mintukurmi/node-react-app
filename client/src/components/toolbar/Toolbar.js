import React from "react";
import "./Toolbar.css";

const Toolbar = (props) => {
    return (
        <div className="toolbar">
            <div className="custom-select toolbar-item">
                <select>
                    <option selected>Neurology</option>
                </select>
            </div>
            <div className="toolbar-item">
                <select onChange={props.handleAvailability}>
                    <option disabled selected>
                        Availability
                    </option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className="select toolbar-item">
                <select onChange={props.handleCityChange}>
                    <option selected value="All">
                        All Cities
                    </option>
                    {props.cities?.map((item) => {
                        return (
                            <option key={item.id} value={item.city}>
                                {item.city}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default Toolbar;
