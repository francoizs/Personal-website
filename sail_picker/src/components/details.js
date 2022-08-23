import React, { Component } from "react";
import { Container, Col, Row } from 'reactstrap';
import { useLocation } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

function Details() {
        const [average_knots, setAverageKnots] = React.useState(0);
        const [max_knots, setMaxKnots] = React.useState(0);
        const [weight, setWeight] = React.useState(0);
        const location = useLocation();

        const handleInput = (event) => {
            const { name, value } = event.target;
            if (name === 'average_knots') {
                setAverageKnots(value);
            } else if (name === 'max_knots') {
                setMaxKnots(value);
            } else if (name === 'weight') {
                setWeight(value);
            }
        }

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
            marginTop: "5rem",
            backgroundColor: "white",
            fontSize: "1.2rem",
            border: "3px solid white",
            borderRadius: "20px",
            padding: "0.5rem 1.7rem",
        };
        const front_row_buttons_styling = {
            height: '60vh',
        };
        const front_title_container_styling = {
            marginTop: '6rem',
        };
        const logo_row_styling = {
            width: '100%',
            paddingTop: '1rem',
        };
        const input_styling = {
            color: "white",
            backgroundColor: "lightgrey",
            textAlign: 'center',
            fontSize: "1.2rem",
            border: "3px solid white",
            borderRadius: "20px",
            padding: "1rem 0rem",
            marginTop: "2rem",
        };
        const average_knots_styling = {
            color: "white",
            backgroundColor: "lightgrey",
            textAlign: 'center',
            fontSize: "1.2rem",
            border: "3px solid white",
            borderRadius: "20px",
            padding: "1rem 0rem",
            marginTop: "5rem",
        };

        const navigate = useNavigate();
        function Result (type, kind) {
            if (average_knots === 0 || max_knots === 0 || weight === 0) {
                alert("Please fill in all fields");
            } else {
            navigate("/surfing_kind/details/result", { state: { surfing_type: type, surfing_kind: kind, details: { average_knots: average_knots, max_knots: max_knots, weight: weight }} });
            }
        }
        // if (location.state.surfing_type === 'windsurfing') {
            return (
                <Container fluid style={ front_container_styling }>
                <Col>
                    <Row style={ logo_row_styling }>
                        <Col className="text-center">
                            <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
                        </Col>
                    </Row>
                    <Row style={ front_title_container_styling }>
                        <h1 style={ front_title_styling }>Only need a few more details:</h1>
                    </Row>
                    <Col className="align-items-center" style={ front_row_buttons_styling } >
                        <Row>
                            <Col className="text-center">
                                <input onChange={handleInput} name='average_knots' style={ average_knots_styling } id="average-knots" placeholder="The average knots"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <input style={ input_styling }  onChange={handleInput} name='max_knots' id="max-knots" placeholder="The max knots"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <input style={ input_styling } onChange={handleInput} name='weight' id="weight-knots" placeholder="weight in kg"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <button style={ front_button_styling } onClick={()=>{Result(location.state.surfing_type, location.state.surfing_kind, average_knots, max_knots, weight)}}  >Submit</button>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Container>
            );
        // } else if (location.state.surfing_type === 'kitesurfing') {
        //     return (
        //     <Container fluid style={ front_container_styling }>
        //         <Col>
        //             <Row style={ logo_row_styling }>
        //                 <Col className="text-center">
        //                     <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
        //                 </Col>
        //             </Row>
        //             <Row style={ front_title_container_styling }>
        //                 <h1 style={ front_title_styling }>Only need a few more details:</h1>
        //             </Row>
        //             <Col className="align-items-center" style={ front_row_buttons_styling } >
        //                 <Row>
        //                     <Col className="text-center">
        //                         <input onChange={handleInput} className="average-knots" placeholder="The average knots"></input>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col className="text-center">
        //                     <input onChange={handleInput} className="average-knots" placeholder="The max knots"></input>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col className="text-center">
        //                         <input onChange={handleInput} className="average-knots" placeholder="weight in kg"></input>
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Col>
        //     </Container>
        //     );
        // } else if (location.state.surfing_type === 'wingsurfing') {
        //     return (
        //         <Container fluid style={ front_container_styling }>
        //         <Col>
        //             <Row style={ logo_row_styling }>
        //                 <Col className="text-center">
        //                     <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
        //                 </Col>
        //             </Row>
        //             <Row style={ front_title_container_styling }>
        //                 <h1 style={ front_title_styling }>Only need a few more details:</h1>    
        //             </Row>
        //             <Col className="align-items-center" style={ front_row_buttons_styling } >
        //                 <Row>
        //                     <Col className="text-center">
        //                         <input onChange={handleInput} className="average-knots" placeholder="The average knots"></input>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col className="text-center">
        //                     <input onChange={handleInput} className="average-knots" placeholder="The max knots"></input>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col className="text-center">
        //                      <input onChange={handleInput} className="average-knots" placeholder="weight in kg"></input>
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Col>
        //     </Container>
        //     );
        // }
}
export default Details;