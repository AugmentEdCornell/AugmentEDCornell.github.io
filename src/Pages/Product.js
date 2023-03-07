import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Unity, useUnityContext } from "react-unity-webgl";
import './Product.css';

function Product () {

    const { unityProvider } = useUnityContext({
        loaderUrl: "../../build/UnityWebApp.loader.js",
        dataUrl: "../../build/UnityWebApp.data",
        frameworkUrl: "../../build/UnityWebApp.framework.js",
        codeUrl: "../../build/UnityWebApp.wasm",
    });

    return (
        <Container className="p-5">
            <Row className="p-5">
                <Unity unityProvider={unityProvider} className="unity" />
            </Row>
        </Container>
    );
}

export default Product