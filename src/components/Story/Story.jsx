import React from "react";
import { Form, Button } from 'react-bootstrap';
import { categories, languages } from "../../services/data";
import './Story.scss';
const Story = ({ }) => {
    return (
        <div className="addstory">
            <div className="container mt-15">
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Type title of your story here..." className="story-title" />
                    </Form.Group>
                    <Form.Group className="mt-5">
                        <Form.Control as="textarea" rows={5} className="story-content" placeholder="Behind the seven seas..." />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="label-text">Categories</Form.Label>
                        <Form.Control as="select" className="categories">
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
                        <Form.Control as="select" className="categories">
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
                        <Form.Control as="textarea" rows={3} className="categories"/>
                    </Form.Group>
                    <Button className="publish-btn mt-5 mb-5">Publish</Button>
                </Form>
            </div>
        </div>
    )
}
export default Story;