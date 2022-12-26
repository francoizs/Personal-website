import React, { Component, useEffect } from "react";
import { Container, Col, Row } from 'reactstrap';
import { useLocation } from "react-router-dom";

function Result() {
    const [sailOption, setSailOption] = React.useState([]);
    const location = useLocation();

    useEffect(() => {
        console.log(location.state.surfing_type, location.state.surfing_kind, location.state.details.average_knots, location.state.details.max_knots, location.state.details.weight)
        fetch(`http://localhost:5000/api?surfing_type=${location.state.surfing_type}&surfing_kind=${location.state.surfing_kind}&average_knots=${location.state.details.average_knots}&max_knots=${location.state.details.max_knots}&weight=${location.state.details.weight}`)
            .then(res => res.json())
            .then(data => {
                setSailOption(data);
            }).catch(err => console.log(err));
    }, [location.state.surfing_type, location.state.surfing_kind, location.state.details.average_knots, location.state.details.max_knots, location.state.details.weight]);


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
    const front_row_styling = {
        marginTop: "8rem",
    };
    const logo_row_styling = {
        width: '100%',
        paddingTop: '1rem',
    }
    const front_title_container_styling = {
        marginTop: '6rem',
    }
    const results_col_styling = {
        display: 'flex',
        color: 'white',
        

    }
    const title_results = () => {
        if (location.state.surfing_type === 'windsurfing') {
            return (
                <Row style={ front_title_container_styling }>
                    <h1 style={ front_title_styling }>The best Windsurfing sail for you:</h1>
                </Row>
            )
        } else if (location.state.surfing_type === 'kitesurfing') {
            return (
                <Row style={ front_title_container_styling }>
                    <h1 style={ front_title_styling }>The best Kite for you:</h1>
                </Row>
            )
        } else {
            return (
                <Row style={ front_title_container_styling }>
                    <h1 style={ front_title_styling }>The best Wing for you:</h1>
                </Row>
            )
        }
    }
    return (
    <Container fluid style={ front_container_styling }>
        <Col>
            <Row style={ logo_row_styling }>
                <Col className="text-center">
                    <a href="/"><img height={ 45 } src="./images/icons8-ocean-wave-50.png"alt="" /></a>
                </Col>
            </Row>
            { title_results() }
            <Row>
                <Col style={ results_col_styling } className="text-center offset-3 col-5">
                    <p>{sailOption}</p> 
                    <p>While following the data we've gathered, we believe that this is the best option for you. If you don't agree with this 
                        option or think another option should be better, please contact us below or click <a href="/">here</a>.
                    </p>
                </Col>
            </Row>
        </Col>
    </Container>
    );
}

export default Result;