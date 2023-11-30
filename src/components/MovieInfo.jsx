import React from "react";

export default function MovieInfo(props){
    return(
        <div>
            <img 
            src={props.src} 
            alt={props.title} 
            className="img-fluid"
            style={{ margin: "0 auto"}}
            />
            <h3>Director(s): {props.directors}</h3>
            <h3>Genre: {props.genre}</h3>
            <h3>Released: {props.released}</h3>
        </div>
    );
};