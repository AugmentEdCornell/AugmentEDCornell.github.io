import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import './UploadContentFile.css'
import axios from 'axios';
import { useState } from "react";

function UploadContentFile () {

    const [getQuiz, setQuiz] = useState({});

    const uploadFile = (event) => {
        const file = event.target.files[0]
        
        const api = `http://127.0.0.1:5000/?plant_cell=${file}`
        console.log(api)
        axios
            .post(api, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                }
            }) 
            .then((response) => {
                console.log(response);
                setQuiz(response)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Container fluid>
            <Row>
                <h1 className="ucHeader">Upload Content File</h1>
                <Form className="p-5" id="fileForm">
                    <Form.Group controlId="file">
                        <Form.Label>Content File</Form.Label>
                        <Form.Control type="file" placeholder="PDF" onChange={uploadFile} accept=".pdf, .pptx, .ppt, .pptm"/>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <h1 className="qcHeader">Quiz on Content</h1>
                <div className="mt-3 ms-5">
                    {getQuiz.status === 200 ? 
                        <p>
                            {getQuiz.data}
                        </p>
                    :
                        <p>
                            Loading...
                        </p>    
                    }
                </div>
            </Row>
        </Container>
    )
}

export default UploadContentFile;