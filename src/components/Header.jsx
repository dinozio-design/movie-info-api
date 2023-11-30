import React from "react";

const styles = {
    headerStyle: {
        backgroundColor: "#282c34",
        minHeight: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    }, 
    headingStyle:{
        fontSize: "calc(10px + 3vmin)",
        marginBlockStart:"1.5em",
        marginBlockEnd:"1.5em",
        color: "yellow"
    },
    paragraphStyle:{
        margin: "0 5em 2em 5em",
        fontSize: "calc(10px + 1.5vmin)",
    }
};

export default function Header() {
   return ( 
   <div>
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Movie Search</h1>
            <p style={styles.paragraphStyle}>
                Fill out the search form below to get more details about the movies that you are interested about.
            </p>
        </header>
    </div>
   );
};