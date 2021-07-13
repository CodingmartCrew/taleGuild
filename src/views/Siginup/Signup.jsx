import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import "./Signup.scss"

const Signup = () => {
    return (
        <div className='mt-15'>
            <div className="container sign-up " >
                <div className="login-contain">
                    <Card className="login-card " >
                        <div className="sign-form">
                            <div className="card-text m-3 mt-5"><h2>Join our guild of writers and storytellers</h2></div>
                            <Form>
                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text"> username</Form.Label>
                                    <Form.Control className="login-field" type="text" />
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Email Address</Form.Label>
                                    <Form.Control className="login-field" type="email" />
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Enter Password</Form.Label>
                                    <Form.Control className="login-field" type="password" />
                                </Form.Group>
                                <Form.Group className="m-3">
                                    <Form.Check type="checkbox" className="pt-1 check-agree"style={{display:"inline-block"}}/><span className="agree-font">I agree to Terms of Service and Privacy Policy</span>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="p-2 m-2 btn-signin-main" style={{ width: "100%", border: "none" }}>
                                    <b> Sign up</b>
                                </Button>
                                <div align="center" className="m-3">
                                    <p style={{ color: "#6c757d", fontSize: "13px" }}>OR</p>
                                </div>
                                <Button variant="primary" type="submit" className="p-2 m-2 btn-signin" style={{ width: "100%", border: "none" }}>
                                    <AiOutlineGoogle className="icon" /> &nbsp;
                                    <b style={{ color: "#b57e40", fontSize: "12px" }}> Sign in with Google</b>
                                </Button>
                                <Button variant="primary" type="submit" className="p-2 m-2 btn-signin" style={{ width: "100%", border: "none" }}>
                                    <FaFacebookF className="icon" value={{ size: "2em" }} />&nbsp;
                                    <b style={{ color: "#b57e40", fontSize: "12px", fontWeight: "bold" }}> Sign in with Facebook</b>
                                </Button>
                                <div className="m-2">
                                    <a href="#" className="login-forget">Already have an account? Sign in now.</a>
                                </div>
                                <span className="m-2"style={{float:"left"}}>
                                    <a href="#" className="login-forget">Terms of Service</a>
                                </span>
                                <span className="m-2 "style={{float:"right"}}>
                                    <a href="#" className="login-forget">Privacy Policy</a>
                                </span>

                            </Form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Signup
