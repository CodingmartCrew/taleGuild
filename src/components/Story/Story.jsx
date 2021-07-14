import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { categories, languages } from "../../services/data";
import './Story.scss';
import axios from "axios";
import { backend_url } from "../../services/urls";
import { useHistory } from "react-router";
const Story = ({ }) => {
    let history = useHistory();
    const [form, setForm] = useState({   
        "posttitle": " ",
        "postcontent": " ",
        "postcategory": categories[1].name,
        "postlanguage": languages[1].name,   
        "postdescription": " ",
        "email": '',
        "postimageurl": "https://api.taleguild.com/uploads/small_mike-erskine-S_VbdMTsdiA-unsplash_(1)_9cbdd29a1b.jpeg",
    })

    useEffect(() => {
        setForm({
            ...form,
            'email':JSON.parse(localStorage.getItem('tale_user_details'))?.email,
        })
    }, [])

    const handleChange=(event,field)=>{
        setForm({
            ...form,
            [field]: event.target.value,
        })
    }
    const handleSubmit = async ()=>{
        if(form.email){
            try{
                await axios.post(`${backend_url}/api/createpost`,form)
                .then((res)=>{
                    history.push('/');
                })
            }catch(err){
                console.log(err);
            }
        }
    }
    return (
        <div className="addstory">
            <div className="container mt-15">
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Type title of your story here..." className="story-title" onChange={(e) => {
                                        handleChange(e,"posttitle")
                        }}  />
                    </Form.Group>
                    <Form.Group className="mt-5">
                        <Form.Label>Story</Form.Label>
                        <Form.Control as="textarea" rows={5} className="story-content" placeholder="Behind the seven seas..."  onChange={(e) => {
                                        handleChange(e,"postcontent")
                        }} />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="label-text">Categories</Form.Label>
                        <Form.Control as="select" className="categories" onChange={(e) => {
                                        handleChange(e,"postcategory")
                            }} >
                            {
                                categories.map((data) => {
                                    if (data.name != "ALL") {
                                        return (
                                            <option value={data.name}>{data.name}</option>
                                        )
                                    }
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="label-text">Languages</Form.Label>
                        <Form.Control as="select" className="categories" onChange={(e) => {
                                        handleChange(e,"postlanguage")
                        }} >
                            {
                                languages.map((data) => {
                                    if (data.name != "ALL") {
                                        return (
                                            <option value={data.name}>{data.name}</option>
                                        )
                                    }
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label className="label-text"> Story Description</Form.Label>
                        <Form.Control as="textarea" rows={3} className="categories" onChange={(e) => {
                                        handleChange(e,"postdescription")
                        }} />
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label className="label-text"> Image URL</Form.Label>
                        <Form.Control type="text"  className="categories"  onChange={(e) => {
                                        handleChange(e,"postimageurl")
                        }} />
                    </Form.Group>
                    <Button className="publish-btn mt-5 mb-5"
                                  style={{width:"100%",border:"none"}}
                                  onClick={(e)=>{
                                      e.preventDefault();
                                      handleSubmit();
                                }}>Publish</Button>
                </Form>
            </div>
        </div>
    )
}
export default Story;