import React from "react";
import { Row1 } from "./Row1";
import { Row2 } from "./Row2";
import { Row3 } from "./Row3";
import { Row4 } from "./Row4";
import { Footer } from "./Footer";

export const LowerSection = () => {
    return (
        <div style={{ backgroundColor: "rgb(14, 2, 52)", color: "white" }}>
            {/* Use Bootstrap's grid system */}
            <div className="container py-4">
                <div className="row text-center text-md-start">
                    <div className="col-12 col-md-3 mb-4">
                        <Row1 />
                    </div>
                    <div className="col-12 col-md-3 mb-4">
                        <Row2 />
                    </div>
                    <div className="col-12 col-md-3 mb-4">
                        <Row3 />
                    </div>
                    <div className="col-12 col-md-3 mb-4">
                        <Row4 />
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundColor: "black", color: "white", fontSize: "18px" }}
                className="p-2 text-center"
            >
                <Footer />
            </div>
        </div>
    );
};
