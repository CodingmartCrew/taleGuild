import React, { useRef } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import "./signin.scss";
import { AiOutlineGoogle } from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import { useHistory } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { backend_url } from '../../services/urls';

const Signin = ({signed, setSigned}) => {
    let history = useHistory();
    const [form, setForm] = React.useState({ "email": "", "password": "" })
    const [errors, setErrors] = useState({});
    const handleChange=(event,field)=>{
        setForm({
            ...form,
            [field]: event.target.value,
        })
    }
    const handleSubmit = async ()=>{
        if(form.email && form.password){
            if(form.email.split('@').length===2){
                try{
                    await axios.post(`${backend_url}/login`,form)
                    .then((res)=>{
                        console.log(res?.data?.cred);
                        localStorage.setItem("tale_user_details",res?.data?.cred)
                        history.push('/');
                        setSigned(true);
                    })
                }catch(err){
                    console.log(err);
                }

            }else{

            setErrors({
                'email':'Wrong format',
            });
            }
        }else{
            if(!form.email && !form.password){
                setErrors({
                    'email':'Enter email',
                    'password':'Enter Password',
                });
            }
            if(!form.password){
                setErrors({
                    'password':'Enter Password',
                });
            }else{
                setErrors({
                    'email':'Enter email',
                });
            }
        }
    }
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
                                    <Form.Control className="login-field"  value={form.email} onChange={(e) => {
                                        handleChange(e,"email")
                                    }} type="email"  />
                                    { <p className='text-danger'>{errors.email}</p>}
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Enter Password</Form.Label>
                                    <Form.Control className="login-field" type="password"  value={form.password}  onChange={(e) => {
                                        handleChange(e,"password")

                                    }} />
                                    { <p className='text-danger'>{errors.password}</p>}

                                </Form.Group>
                                <div align="right " className="m-2"> 
                                    <a href="#" className="login-forget">Forget Password?</a>
                                </div>
                                <Button variant="primary" type="submit"
                                 className="p-2 m-2 btn-signin-main"
                                  style={{width:"100%",border:"none"}}
                                  onClick={(e)=>{
                                      e.preventDefault();
                                      handleSubmit();
                                }}
                                  >
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
