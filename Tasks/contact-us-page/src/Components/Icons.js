import React from "react";
import { facebook,instagram,linkedIn, telegram, twitter, youtube } from "../utils/constants";
import "./styles/icons.css"

export const Icons = () =>{
    return(
        <div className="d-flex justify-content-center justify-content-md-start align-items-start my-4 gap-3">
            <img className="icons" src={twitter} alt="t"></img>
            <img className="icons" src={facebook} alt="fb"></img>
            <img className="icons" src={linkedIn} alt="li"></img>
            <img className="icons" src={instagram} alt="i"></img>
            <img className="icons" src={youtube} alt="yt"></img>
            <img className="icons" src={telegram} alt="t"></img>
        </div>
    )
}