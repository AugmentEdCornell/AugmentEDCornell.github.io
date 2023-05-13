import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import './UploadContentFile.css'

function UploadContentFile () {

    const uploadFile = (event) => {
        const file = event.target.files[0]
        console.log(file)
        const formData = new FormData();
        formData.append("file", file)
        console.log(formData)
    }
    return (
        <Container fluid>
            <h1 className="ucHeader">Upload Content File</h1>
            <Form className="p-5" id="fileForm">
                <Form.Group controlId="file">
                    <Form.Label>Content File</Form.Label>
                    <Form.Control type="file" placeholder="PPT" onChange={uploadFile} accept=".ppt, .pptx, .pptm"/>
                </Form.Group>

            </Form>
        </Container>
    )
}

export default UploadContentFile;