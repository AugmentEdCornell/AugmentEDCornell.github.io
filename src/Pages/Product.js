import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import { Unity, useUnityContext } from "react-unity-webgl";
import './Product.css';
import fullscreen from './components/assets/fullscreen.png'

function Product () {

    const { unityProvider, requestFullscreen } = useUnityContext({
        loaderUrl: "../../build/UnityWebApp.loader.js",
        dataUrl: "../../build/UnityWebApp.data",
        frameworkUrl: "../../build/UnityWebApp.framework.js",
        codeUrl: "../../build/UnityWebApp.wasm",
    });

    function EnterFullscreen() {
        requestFullscreen(true);
      }
    
    return (
        <Container className="p-5">
            <Row className="p-5">
                <Unity unityProvider={unityProvider} className="unity" />
                <Row className="mt-3">
                    <Col md={11}>
                        <p>AugmentED - Cell Biology</p>
                    </Col>
                    <Col>
                        <Image src={fullscreen} onClick={EnterFullscreen} className="fs"/>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}

export default Product