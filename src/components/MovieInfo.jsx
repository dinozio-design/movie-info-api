import React from "react";

export default function MovieInfo(props){
    return(
        <div>
            <img 
            src={props.src} 
            alt={props.title} 
            />
        </div>
    )
};