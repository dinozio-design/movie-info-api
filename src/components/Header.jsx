import React from "react";

const styles = {
    headerStyle: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
    }
};

export default function Header() {
   return ( 
   <div>
        <header style={styles.headerStyle} className="header">
            <h1>Movie Search</h1>
            <p>
                Fill out the search form below to get more details about the movies that you are interested about.
            </p>
        </header>
    </div>
   );
};