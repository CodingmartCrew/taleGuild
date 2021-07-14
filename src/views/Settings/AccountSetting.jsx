import { useEffect } from 'react';
import {React, useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import "../Siginup/Signup.scss";

const AccountSetting = () => {

    const [userData, setuserData] = useState();

    const handleSubmit =()=>{
        alert("updated");
    }

    useEffect(() => {
        setuserData(JSON.parse(localStorage.getItem('tale_user_details')));
    }, [])

    return (
        <div className='mt-15'>
            <div className="container sign-up " >
                <div className="login-contain">
                    <Card className="login-card " >
                        <div className="sign-form">
                            <div className="card-text m-3 mt-5">
                                <h2>Update your Profile</h2>
                            </div>
                            <Form>
                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Username</Form.Label>
                                    <Form.Control value={userData?.username} className="login-field" type="text" />
                                </Form.Group>

                                <Form.Group className="m-3 ">
                                    <Form.Label className="form-text">Email Address</Form.Label>
                                    <Form.Control value={userData?.email} className="login-field" type="email" />
                                </Form.Group>
                                <Form.Group className="m-3">
                                    <Form.Label className="form-text">Theams</Form.Label>
                                    <Form.Control as="select" className="categories"> 
                                        <option value="light">Light</option>
                                        <option value="dark">dark</option>
                                    </Form.Control>
                                </Form.Group>

                                <Button variant="primary"
                                 type="submit"
                                  className="p-2 m-2 btn-signin-main"
                                   style={{ width: "100%", border: "none" }}

                                  onClick={(e)=>{
                                    e.preventDefault();
                                    handleSubmit();
                                    }}
                                   >
                                    <b> Update</b>
                                </Button>
                            </Form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AccountSetting
