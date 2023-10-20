import React from "react"
import "./BodyContainer.css"
import FormBody from "../FormBody/FormBody"
import logo from "../Vector.svg"
const BodyContainer = () => {
    return (
        <div className="body-container">
            <div className="body-container-logo">
                <img src={logo}></img>
            </div>

            <div className="body-container-form2">
                <FormBody></FormBody>
            </div>

        </div>

    )
}

export default BodyContainer;