import { React, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import axios from "axios";
import "./Signup.scss"
import { backend_url } from '../../services/urls';
import { validateEmail } from '../../services/methods';

const Signup = () => {
    let history = useHistory();
    const [form, setForm] = useState({"username":"","email":'',"password":''})
    const [status, setStatus] = useState();
    const [error, setError] = useState();
    const handleChange = (event, field) => {
        setForm({
            ...form,
            [field]: event.target.value,
        })
    }

    const handleSubmit = async () => {
        console.log(form);
        setError();
        if(form.username && form.email && form.password){
            if(validateEmail(form?.email)){
                try{
                    await axios.post(`${backend_url}/register`,form)
                    .then((response)=>{
                        console.log(response);
                        setStatus('Created successfully')
                        history.push("/login");
                    })
                } catch{
                    setError("Email Already exist")
                }
            }else{ 
                setError("Wrong email format")
            }
        }
        else{
            setError('Fill all the fields')
        }
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
                                <h5 className='text-danger'>{error}</h5>
                            </div>
                            <Form>
                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Enter Username</Form.Label>
                                    <Form.Control className="login-field" type="text" name="username"  onChange={(e) => {
                                        handleChange(e, "username")

                                    }} />
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Email Address</Form.Label>
                                    <Form.Control className="login-field" type="email" name="email"  onChange={(e) => {
                                        handleChange(e, "email")

                                    }} />
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Enter Password</Form.Label>
                                    <Form.Control className="login-field" type="password" name="password" onChange={(e) => {
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
                                <div className="m-2">
                                    <p className="login-forget"  onClick={()=>{history.push('/login')}}>Already have an account? Sign in now.</p>
                                </div>
                                <span className="m-2" style={{ float: "left" }}>
                                    <p className="login-forget">Terms of Service</p>
                                </span>
                                <span className="m-2 " style={{ float: "right" }}>
                                    <p className="login-forget">Privacy Policy</p>
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
