import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import "./signin.scss";
import { AiOutlineGoogle } from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';

const Signin = () => {
    return (
        <div>
            <div className="container sign-in">
                <div className="login-contain">
                    <Card className="login-card" >
                        <div className="sign-form">
                            <div className="card-text m-3 mt-5"><h2>Welcome Back</h2></div>
                            <Form>
                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Email or username</Form.Label>
                                    <Form.Control className="login-field" type="email"  />
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Enter Password</Form.Label>
                                    <Form.Control className="login-field" type="password"  />
                                </Form.Group>
                                <div align="right " className="m-2"> 
                                    <a href="#" className="login-forget">Forget Password?</a>
                                </div>
                                <Button variant="primary" type="submit" className="p-2 m-2 btn-signin-main" style={{width:"100%",border:"none"}}>
                                   <b> Sign in</b>
                                </Button>
                                <div align="center" className="m-3">
                                    <p style={{color:"#6c757d" , fontSize:"13px"}}>OR</p>
                                </div>
                                <Button variant="primary" type="submit" className="p-2 m-2 btn-signin" style={{width:"100%",border:"none"}}>
                                <AiOutlineGoogle className="icon"/> &nbsp;
                                <b style={{color:"#b57e40" ,fontSize:"12px"}}> Sign in with Google</b>
                                </Button>
                                <Button variant="primary" type="submit" className="p-2 m-2 btn-signin" style={{width:"100%",border:"none"}}>
                                <FaFacebookF className="icon" value={{size:"2em"}}/>&nbsp;
                                   <b style={{color:"#b57e40",fontSize:"12px" ,fontWeight:"bold"}}> Sign in with Facebook</b>
                                </Button>
                                <div  className="m-2"> 
                                    <a href="#" className="login-forget">Don’t have an account? Sign up now.</a>
                                </div>
                            </Form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Signin
