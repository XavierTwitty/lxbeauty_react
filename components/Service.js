import React from "react";

const Service = props => {
    return (
        <div className="service">
            <h1 className="title">{props.service.title}</h1>
            <p className="hours">{props.service.hours}</p>
            <p className="price">${props.service.price}</p>

        </div>
    )
}
export default Service

