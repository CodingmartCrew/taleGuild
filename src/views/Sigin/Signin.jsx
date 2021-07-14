import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import "./signin.scss";
import { useHistory } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { backend_url } from '../../services/urls';
import { validateEmail } from '../../services/methods';

const Signin = ({setSigned}) => {
    let history = useHistory();
    const [form, setForm] = React.useState({ "email": "", "password": "" })
    const [errors, setErrors] = useState({});
    const handleChange=(event,field)=>{
        event.target.value && setForm({
            ...form,
            [field]: event.target.value,
        })
    }
    const handleSubmit = async ()=>{
        setErrors();
        console.log(form);
        if(form?.email && form?.password){
            if(validateEmail(form?.email)){
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
                    setForm({ "email": "", "password": "" })
                    setErrors({
                        'invalid':'Incorrect Email or Password ',
                    });
                }

            }else{
                setForm({ "email": "", "password": "" })
                setErrors({
                    'email':'Wrong format',
                });
            }
        }else{
            setForm({ "email": "", "password": "" })
            if(!form.email && !form.password){
                setForm({ "email": "", "password": "" })
                setErrors({
                    'email':'Enter email',
                    'password':'Enter Password',
                });
            }
            else if(!form.password){
                setForm({ "email": "", "password": "" })
                setErrors({
                    'password':'Enter Password',
                });
            }else{
                setForm({ "email": "", "password": "" })
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
                                    <Form.Control className="login-field"  value={form?.email} onChange={(e) => {
                                        handleChange(e,"email")
                                    }} type="email"  />
                                    { <p className='text-danger'>{errors?.email}</p>}
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Enter Password</Form.Label>
                                    <Form.Control className="login-field" type="password"  value={form?.password}  onChange={(e) => {
                                        handleChange(e,"password")

                                    }} />
                                    { <p className='text-danger'>{errors?.password}</p>}

                                </Form.Group>
                                <div align="right " className="m-2"> 
                                    <p className="login-forget">Forget Password?</p>
                                </div>
                                { <p className='text-danger'>{errors?.invalid}</p>}
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
                                <div  className="m-2"> 
                                    <span className="login-forget" onClick={()=>{history.push('/register')}}>Don’t have an account? Sign up now.</span>
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
