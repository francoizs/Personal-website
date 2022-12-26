import React, { Component } from "react";
import { Container, Col, Row } from 'reactstrap';
import {  useNavigate } from "react-router-dom";


function Surfing() {
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
            fontSize: "1.6rem",
            border: "3px solid white",
            borderRadius: "10px",
            padding: "4.8rem 2.8rem",
        };
        const front_row_buttons_styling = {
            height: '60vh',
        };
        const front_title_container_styling = {
            marginTop: '6rem',
        }
        const logo_styling = {
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "1.7rem",
            color: '#8338EC',
        };
        const logo_row_styling = {
            width: '100%',
            paddingTop: '1rem',
        }
        const navigate = useNavigate();
        const SurfingType=(type)=>{
            navigate("/surfing_kind", { state: { surfing_type: type } });
        }

        return (
        <Container fluid style={ front_container_styling }>
            <div className="back-button" style={{ display: 'flex' }}>
                <i className="bi bi-arrow-left"></i>
            </div>
            <Col>
                <Row style={ logo_row_styling }>
                    <Col className="text-center">
                        <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
                    </Col>
                </Row>
                <Row style={ front_title_container_styling }>
                    <h1 style={ front_title_styling }>What type of surfing are you going to do?</h1>
                </Row>
                <Row className="align-items-center" style={ front_row_buttons_styling } >
                    <Col className="text-right">
                        <button onClick={()=>{SurfingType('windsurfing')}} style={ front_button_styling } className="surfing-button" id="windsurfing-button"><span></span><a>Wind-Surfing</a></button>
                    </Col>
                    <Col className="text-center">
                        <button onClick={()=>{SurfingType('kitesurfing')}} style={ front_button_styling } className="surfing-button" id="kitesurfing-button"><span></span>Kite-Surfing</button>
                    </Col>
                    <Col className="text-left">
                        <button onClick={()=>{SurfingType('wingsurfing')}} style={ front_button_styling } className="surfing-button" id="wingsurfing-button"><span></span>Wing-Surfing</button>
                    </Col>
                </Row>
            </Col>
        </Container>
        );
    }
export default Surfing;