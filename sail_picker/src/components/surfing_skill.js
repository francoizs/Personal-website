import React, { Component } from "react";
import { Container, Col, Row } from 'reactstrap';
import { useLocation } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

function SurfingSkill() {
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
        const pro_styling = {
            fontSize: "1.5rem",
            border: "3px solid white",
            borderRadius: "20px",
            padding: "1.02rem 6.1rem",
        }
        const beginner_styling = {
            fontSize: "1.5rem",
            border: "3px solid white",
            borderRadius: "20px",
            padding: "1.02rem 3.8rem",
        }

        const navigate = useNavigate();
        function Result (type, kind, skill) {
            navigate("/surfing_kind/surfing_skill/result", { state: { surfing_type: type, surfing_kind: kind, skill_level: skill } });
        }
        if (location.state.surfing_type === 'windsurfing') {
            return (
                <Container fluid style={ front_container_styling }>
                <Col>
                    <Row style={ logo_row_styling }>
                        <Col className="text-center">
                            <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png" alt="" /></a>
                        </Col>
                    </Row>
                    <Row style={ front_title_container_styling }>
                        <h1 style={ front_title_styling }>What skill level are you?</h1>
                    </Row>
                    <Col className="align-items-center" style={ front_row_buttons_styling } >
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('windsurfing', location.state.surfing_kind, 'beginner')}} style={ beginner_styling } className="skill-button" id="windsurfing-beginner-button"><span></span>Beginner</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('windsurfing', location.state.surfing_kind, 'intermediate')}} style={ front_button_styling } className="skill-button" id="windsurfing-intermediate-button"><span></span>Intermediate</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('windsurfing', location.state.surfing_kind, 'pro')}} style={ pro_styling } className="skill-button" id="windsurfing-pro-button"><span></span>Pro</button>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Container>
            );
        } else if (location.state.surfing_type === 'kitesurfing') {
            return (
            <Container fluid style={ front_container_styling }>
                <Col>
                    <Row style={ logo_row_styling }>
                        <Col className="text-center">
                            <a ><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
                        </Col>
                    </Row>
                    <Row style={ front_title_container_styling }>
                        <h1 style={ front_title_styling }>What skill level are you?</h1>
                    </Row>
                    <Col className="align-items-center" style={ front_row_buttons_styling } >
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('kitesurfing', location.state.surfing_kind, 'beginner')}} style={ beginner_styling } className="skill-button" id="kitesurfing-beginner-button"><span></span>Beginner</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('kitesurfing', location.state.surfing_kind, 'intermediate')}} style={ front_button_styling } className="skill-button" id="kitesurfing-intermediate-button"><span></span>Intermediate</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('kitesurfing', location.state.surfing_kind, 'pro')}} style={ pro_styling } className="skill-button" id="kitesurfing-pro-button"><span></span>Pro</button>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Container>
            );
        } else if (location.state.surfing_type === 'wingsurfing') {
            return (
                <Container fluid style={ front_container_styling }>
                <Col>
                    <Row style={ logo_row_styling }>
                        <Col className="text-center">
                            <a ><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
                        </Col>
                    </Row>
                    <Row style={ front_title_container_styling }>
                        <h1 style={ front_title_styling }>What skill level are you?</h1>
                    </Row>
                    <Col className="align-items-center" style={ front_row_buttons_styling } >
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('wingsurfing', location.state.surfing_kind, 'beginner')}} style={ beginner_styling } className="skill-button" id="wingsurfing-beginner-button"><span></span>Beginner</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('wingsurfing', location.state.surfing_kind, 'intermediate')}} style={ front_button_styling } className="skill-button" id="wingsurfing-intermediate-button"><span></span>Intermediate</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <button onClick={()=>{Result('wingsurfing', location.state.surfing_kind, 'pro')}} style={ pro_styling } className="skill-button" id="wingsurfing-pro-button"><span></span>Pro</button>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Container>
            );
        }
}
export default SurfingSkill;