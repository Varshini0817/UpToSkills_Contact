import React from "react";
import "./styles/cards.css";

export const Cards = () => {
    const handleHover = (e, isHover) => {
        const baseURL = "https://img.icons8.com/?size=100&id=";
        const iconId = e.currentTarget.dataset.iconId;
        const color = isHover ?  "FFFFFF" : "FD7E14" ; 
        const img = e.currentTarget.querySelector("img");
        img.src = `${baseURL}${iconId}&format=png&color=${color}`;
    };

    return (
        <div className="container mb-5">
            <div className="row gy-2">
                {/* Card 1 */}
                <div
                    className="col-12 col-md-4"
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    data-icon-id="4w6QBUMIC5o4"
                >
                    <div className="card-wrapper">
                        <div className="card-content" data-number="01">
                            <img
                                src="https://img.icons8.com/?size=100&id=4w6QBUMIC5o4&format=png&color=FD7E14"
                                alt="location icon"
                                className="icon"
                            />
                            <h5 className="fw-bold">Visit Us Daily:</h5>
                            <p>Palam, New Delhi, Delhi 110077</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    className="col-12 col-md-4"
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    data-icon-id="16712"
                >
                    <div className="card-wrapper">
                        <div className="card-content" data-number="02">
                            <img
                                src="https://img.icons8.com/?size=100&id=16712&format=png&color=FD7E14"
                                alt="phone icon"
                                className="icon"
                            />
                            <h5 className="fw-bold">Phone Us 24/7:</h5>
                            <p>+91 931 977 2294</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    className="col-12 col-md-4"
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    data-icon-id="86840"
                >
                    <div className="card-wrapper">
                        <div className="card-content" data-number="03">
                            <img
                                src="https://img.icons8.com/?size=100&id=86840&format=png&color=FD7E14"
                                alt="email icon"
                                className="icon"
                            />
                            <h5 className="fw-bold">Mail Us 24/7:</h5>
                            <p>info@uptoskills.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
