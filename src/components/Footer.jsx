import React from "react";

const styles = {
    footerStyle:{
        backgroundColor: "#282c34",
        minHeight: "10vh",
        marginTop: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        fontSize: "calc(5px + 2vmin)",
        color: "white"
    },
    paragraphStyle:{
        fontSize: ".75em",
        marginBlockStart: ".5em",
        marginBlockEnd:".75em"
    },
    linkStyle:{
        color:"yellow"
    }
};

export default function Footer(){
    return (
        <div>
            <footer style={styles.footerStyle} className="footer">
                <p style={styles.paragraphStyle}> This app is brought to you by Sam Azimi. All Rights Reserved © 2023 </p>
                <p style={styles.paragraphStyle}> API Key, courtesy of <a style={styles.linkStyle} href="https://omdbapi.com/">https://omdbapi.com/</a>, data provided in JSON. </p>
                <p></p>
            </footer>
        </div>
    )
}