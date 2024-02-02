import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import loginIcon from '../../images/user.png'
import uiImg from '../../images/worlddest.svg'
import '../login/login.css'
import { useNavigate } from "react-router-dom";




export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();


    const onSubmit = event => {
        event.preventDefault();
        navigate("/rooms");
    };

    return (

        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon" />
                        <Form onSubmit={onSubmit}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email </Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                    placeholder="Email"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password </Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                    placeholder="Password"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit">Login</Button>

                            <div>
                                <a href="#"><small className="reset">Forgot Password?</small></a>
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </>

    );
};