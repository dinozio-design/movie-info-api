import React from "react";

export default function Card(props){
    return(
        <div className="card text-centre">
            <div className="card-header">
                <h4>{props.heading}</h4>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};