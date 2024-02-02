import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import signupIcon from '../../images/add-friend.png'
import uiImg from '../../images/bestplace.svg'
import '../signup/signup.css'
import { useNavigate } from "react-router-dom";


export default () => {
    const [name, setName] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var attributeList = [];

    let navigate = useNavigate();

    const onSubmit = event => {
        event.preventDefault();
        navigate("/login");
    };

    return (

        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center">
                        <img className="icon-img" src={signupIcon} alt="icon" />
                        <Form onSubmit={onSubmit}>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                    required
                                    placeholder="Full Name"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone </Form.Label>
                                <Form.Control
                                    value={phone_number}
                                    onChange={event => setPhone_number(event.target.value)}
                                    required
                                    placeholder="Phone Number"
                                />
                            </Form.Group>

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

                            <Button variant="primary btn-block" type="submit">Register</Button>

                            <div>
                                <a href="#"><small className="reset">Already have an account?</small></a>
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt="" />
                    </Col >
                </Row>
            </Container>
        </>

    );
};