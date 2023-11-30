import React from "react";

export default function MovieInfo(props) {
    return (
        <div>
            <img
                alt={props.title}
                className="img-fluid"
                src={props.src}
                style={{ margin: '0 auto' }}
            />
            <h3>Director(s): {props.director}</h3>
            <h3>Genre: {props.genre}</h3>
            <h3>Released: {props.released}</h3>
        </div>
    )
};