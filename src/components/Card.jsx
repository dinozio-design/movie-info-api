import React from "react";

export default function Card(props) {
    return (
        <div className="card text-centre">
            <div className="card-header">
                <h2>{props.heading}</h2>
            </div>
            <div className="card-body">{props.children}</div>
        </div>
    );
};