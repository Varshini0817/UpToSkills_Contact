import React, { useEffect } from "react";
import "./styles/sendmsg.css";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

export const SendUsAMessage = () => {
    useEffect(() => {
        AOS.init(); 
    });

    return (
        <div className="container mt-5 py-5" style={{ minHeight: "90vh" }}>
            <div className="row align-items-center">
                {/* Form Section */}
                <div className="col-12 col-md-6 px-3 p-md-5">
                    <div className="text-start m-4">
                        <h2 className="fw-bold">Send Us a Message</h2>
                        <h5 className="text-muted">
                            Have some suggestions or just want to say hi? Contact us:
                        </h5>
                    </div>

                    <form className="d-flex flex-column gap-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="form-control p-3 shadow-sm border-0"
                            style={{ backgroundColor: "#f6f6f6" }}
                        />
                        <input
                            type="email"
                            placeholder="Your Email *"
                            className="form-control p-3 shadow-sm border-0"
                            style={{ backgroundColor: "#f6f6f6" }}
                        />
                        <input
                            type="url"
                            placeholder="Website"
                            className="form-control p-3 shadow-sm border-0"
                            style={{ backgroundColor: "#f6f6f6" }}
                        />
                        <textarea
                            placeholder="Write us a message..."
                            className="form-control p-3 shadow-sm border-0"
                            rows="4"
                            style={{ backgroundColor: "#f6f6f6" }}
                        ></textarea>
                        <button
                            type="submit"
                            className="btn btn-primary p-3 fw-bold"
                            style={{
                                backgroundColor: "#ff6f3c",
                                border: "none",
                                fontSize: "1rem",
                            }}
                        >
                            Send a Message
                        </button>
                    </form>
                </div>

                {/* Image Section */}
                <div className="col-12 col-md-6 text-center px-4 px-md-5 py-4">
                    <div
                        className="tri-bg"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-out"
                    >
                        <img
                            src="https://uptoskills.com/wp-content/uploads/2023/05/cs_8-removebg-preview-1.png"
                            alt="Contact Us"
                            className="img-fluid rounded mx-auto"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                maxHeight: "400px", 
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
