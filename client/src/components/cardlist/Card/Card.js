import React from "react";
import "./Card.css";

const Card = (doctor) => {
    // console.log("In Card", doctor);
    return (
        <div className="card">
            <div className="top-section">
                <div className="avatar">
                    <img src={doctor.avatar} alt="profile" />
                </div>
                <div className="top-section-info">
                    <div>
                        <h3>{doctor.name}</h3>
                        <p>{doctor.experience} yr Experience</p>
                    </div>
                    <div className="info-2">
                        <div className="desc">
                            <p>{doctor.degree}</p>
                            <p>{doctor.specialization}</p>
                        </div>
                        <div>
                            <span className="rupee">₹</span>
                            <span className="text-bold">{doctor.fee}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <div className="divider"></div>
                <div className="info-3">
                    <div>
                        <p>Next Availability</p>
                        <h5>
                            At <span className="uppercase">{doctor.availablity.time}</span>
                        </h5>
                    </div>
                    <div>
                        <button>Schedule now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
