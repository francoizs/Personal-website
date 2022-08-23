import React, { Component } from "react";
import { Container, Col, Row } from 'reactstrap';
import { useLocation } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

function SurfingKind() {
        const location = useLocation();

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
            borderRadius: "20px",
            padding: "1rem 2rem",
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
            borderRadius: "20px",
            padding: "1.02rem 4.7rem",
        }

        const navigate = useNavigate();
        function Surfing_Kind (type, kind) {
            navigate("/surfing_kind/details", { state: { surfing_type: type, surfing_kind: kind } });
        }
        if (location.state.surfing_type === 'windsurfing') {
            return (
            <Container fluid style={ front_container_styling }>
                <Col>
                    <Row style={ logo_row_styling }>
                        <Col className="text-center">
                            <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
                        </Col>
                    </Row>
                    <Row style={ front_title_container_styling }>
                        <h1 style={ front_title_styling }>What kind of {location.state.surfing_type} are you going to do?</h1>
                    </Row>
                    <Row className="align-items-center" style={ front_row_buttons_styling } >
                        <Col className="text-right">
                            <button onClick={()=>{Surfing_Kind('windsurfing', 'standard')}} style={ front_button_styling } className="type-button" id="windsurfing-standard-button"><span></span>Standard</button>
                        </Col>
                        <div className="col-1">
                        </div>
                        <Col className="text-left">
                            <button onClick={()=>{Surfing_Kind('windsurfing', 'foil')}} style={ foil_styling } className="type-button" id="windsurfing-foil-button"><span></span>Foil</button>
                        </Col>
                    </Row>
                </Col>
            </Container>
            );
        } else if (location.state.surfing_type === 'kitesurfing') {
            return (
            <Container fluid style={ front_container_styling }>
                <Col>
                    <Row style={ logo_row_styling }>
                        <Col className="text-center">
                            <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
                        </Col>
                    </Row>
                    <Row style={ front_title_container_styling }>
                        <h1 style={ front_title_styling }>What kind of {location.state.surfing_type} are you going to do?</h1>
                    </Row>
                    <Row className="align-items-center" style={ front_row_buttons_styling } >
                        <Col className="text-right">
                            <button onClick={()=>{Surfing_Kind('kitesurfing', 'standard')}} style={ front_button_styling } className="type-button" id="kitesurfing-standard-button"><span></span>Standard</button>
                        </Col>
                        <div className="col-1">
                        </div>
                        <Col className="text-left">
                            <button onClick={()=>{Surfing_Kind('kitesurfing', 'foil')}} style={ foil_styling } className="type-button" id="kitesurfing-foil-button"><span></span>Foil</button>
                        </Col>
                    </Row>
                </Col>
            </Container>
            );
        } else if (location.state.surfing_type === 'wingsurfing') {
            return (
            <Container fluid style={ front_container_styling }>
                <Col>
                    <Row style={ logo_row_styling }>
                        <Col className="text-center">
                            <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png" alt="" /></a>    
                        </Col>
                    </Row>
                    <Row style={ front_title_container_styling }>
                        <h1 style={ front_title_styling }>What kind of {location.state.surfing_type} are you going to do?</h1>
                    </Row>
                    <Row className="align-items-center" style={ front_row_buttons_styling } >
                        <Col className="text-right">
                            <button onClick={()=>{Surfing_Kind('wingsurfing', 'standard')}} style={ front_button_styling } className="type-button" id="wingsurfing-standard-button"><span></span>Standard</button>
                        </Col>
                        <div className="col-1">
                        </div>
                        <Col className="text-left">
                            <button onClick={()=>{Surfing_Kind('wingsurfing', 'foil')}} style={ foil_styling } className="type-button" id="wingsurfing-foil-button"><span></span>Foil</button>
                        </Col>
                    </Row>
                </Col>
            </Container>
            );
        }
}
export default SurfingKind;
