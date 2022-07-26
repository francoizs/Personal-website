import React, { Component } from "react";
import { Container, Col, Row } from 'reactstrap';


export default class Kitesurfing_kind extends Component {
    render() {
        const front_title_styling = {
            fontSize: "2.5rem",
            color: "white",
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "0px"
        };
        const front_container_styling = {
            fontFamily: "Mattone-150",
            width: "100%",
            height: "100vh",
        };
        const front_button_styling = {
            fontSize: "1.5rem",
            border: "3px solid white",
            borderRadius: "10px",
            padding: "5rem 3rem",
        };
        const front_row_buttons_styling = {
            height: '60vh',
        };
        const front_title_container_styling = {
            marginTop: '6rem',
        }
        const logo_row_styling = {
            width: '100%',
            paddingTop: '1rem',
        }
        const foil_styling = {
            fontSize: "1.5rem",
            border: "3px solid white",
            borderRadius: "10px",
            padding: "5rem 5.7rem",
        }

        function firstNextPage() {
            window.location.href = "./surfing";
        }

        return (
        <Container fluid style={ front_container_styling }>
            <Col>
                <Row style={ logo_row_styling }>
                    <Col className="text-center">
                        <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
                    </Col>
                </Row>
                <Row style={ front_title_container_styling }>
                    <h1 style={ front_title_styling }>What kind of windsurfing are you going to do?</h1>
                </Row>
                <Row className="align-items-center" style={ front_row_buttons_styling } >
                    <Col className="text-right">
                        <button onClick={ firstNextPage } style={ front_button_styling } className="surfing-button" id="windsurfing-standard-button"><span></span>Standard</button>
                    </Col>
                    <div className="col-1">
                    </div>
                    <Col className="text-left">
                        <button style={ foil_styling } className="surfing-button" id="windsurfing-foil-button"><span></span>Foil</button>
                    </Col>
                </Row>
            </Col>
        </Container>
        );
    }
}
