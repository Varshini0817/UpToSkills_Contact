import React from "react";
import { contact } from "../utils/constants";

export const Contact = () => {
    return (
        <div className="position-relative text-center">
            {/* Image */}
            <img
                src={contact}
                alt="Contact"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
            />

            {/* Text Overlay */}
            <div
                className="position-absolute top-50 start-50 translate-middle text-white"
                style={{
                    padding: "1rem 2rem",
                    borderRadius: "8px",
                }}
            >
                <h2 className="fw-bold">Contacts</h2>
                <div className="d-inline-block">
                    <span>Home</span>
                    <span> &gt; </span>
                    <span>Contacts</span>
                </div>

            </div>
        </div>
    );
};
