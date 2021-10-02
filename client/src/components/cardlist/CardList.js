import React from "react";
import Card from "./Card/Card";
import "./Cardlist.css";
import "../../api/index";

const CardList = (props) => {
    console.log("In CardLIST", props.doctors);

    function n() {
        console.log(props);
    }

    return (
        <div>
            <div className="cardlist">
                {props.doctors?.map((doctor) => {
                    return <Card key={doctor.id} {...doctor} />;
                })}
            </div>
            {props.doctors.length === 0 && (
                <div className="msg">
                    <p className="text-center">No doctors available</p>
                </div>
            )}
        </div>
    );
};

export default CardList;
