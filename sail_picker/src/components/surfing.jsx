import React, { Component } from "react";

export default class Surfing extends Component {
    render() {
        const styling = {
            fontSize: "50px",
            fontFamily: "Arial",
            color: "white",
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "0px"
        };
        return (
        <div>
            <h1 style={ styling }>What type of surfing are you going to do?</h1>
        </div>
        );
    }
}
