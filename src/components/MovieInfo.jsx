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
            <h4>Director(s): {props.director}</h4>
            <h4>Genre: {props.genre}</h4>
            <h4>Released: {props.released}</h4>
        </div>
    );
};