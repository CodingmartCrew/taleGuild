import { React, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useHistory } from 'react-router';
import axios from "axios";
import "./Signup.scss"
import { backend_url } from '../../services/urls';

const Signup = ({ signed, setSigned }) => {
    let history = useHistory();
    const [form, setForm] = useState({"username":"","email":'',"password":''})
    const [status, setStatus] = useState();
    const handleChange = (event, field) => {
        setForm({
            ...form,
            [field]: event.target.value,
        })
    }

    const handleSubmit = async () => {
        console.log(form);
        if(form.username && form.email && form.password){
           try{
               await axios.post(`${backend_url}/register`,form)
           .then((response)=>{
               console.log(response);
               setStatus('Created successfully')
               history.push("/login");
           })
           } catch{
               setStatus("Email Already exist")
           }
        }
        else{
            alert('Fill all the fields')
        }

        // console.log(signed);
        // setSigned(true);
        // history.push('/login');
    }
    return (
        <div className='mt-15'>
            <div className="container sign-up " >
                <div className="login-contain">
                    <Card className="login-card " >
                        <div className="sign-form">
                            <div className="card-text m-3 mt-5">
                                <h2>Join our guild of writers and storytellers</h2>
                                <h5 className='text-success'>{status}</h5>
                            </div>
                            <Form>
                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Enter Username</Form.Label>
                                    <Form.Control className="login-field" type="text" name="username" value={form.username} onChange={(e) => {
                                        handleChange(e, "username")

                                    }} />
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Email Address</Form.Label>
                                    <Form.Control className="login-field" type="email" name="email" value={form.email} onChange={(e) => {
                                        handleChange(e, "email")

                                    }} />
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Enter Password</Form.Label>
                                    <Form.Control className="login-field" type="password" name="password" value={form.password} onChange={(e) => {
                                        handleChange(e, "password")

                                    }} />
                                </Form.Group>
                                <Form.Group className="m-3">
                                    <Form.Check type="checkbox" className="pt-1 check-agree" style={{ display: "inline-block" }} /><span className="agree-font">I agree to Terms of Service and Privacy Policy</span>
                                </Form.Group>
                                <Button variant="primary" type="submit"
                                    className="p-2 m-2 btn-signin-main"
                                    style={{ width: "100%", border: "none" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}
                                >
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
                                <span className="m-2" style={{ float: "left" }}>
                                    <a href="#" className="login-forget">Terms of Service</a>
                                </span>
                                <span className="m-2 " style={{ float: "right" }}>
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
