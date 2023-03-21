import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Unity, useUnityContext } from "react-unity-webgl";
import './Product.css';

function Product () {

    const { unityProvider, sendMessage  } = useUnityContext({
        loaderUrl: "../../build/React-rs.loader.js",
        dataUrl: "../../build/React-rs.data",
        frameworkUrl: "../../build/React-rs.framework.js",
        codeUrl: "../../build/React-rs.wasm",
    });

    function handleClickSpawnEnemies() {
        console.log("Please god please");
        sendMessage("React-Text", "CallableFunctionReact", "Parthit Cool");
        console.log("Should be workoingm");
      }

    return (
        <Container className="p-5">
            <Row className="p-5">
                <button onClick={handleClickSpawnEnemies}>Do something</button>
                <Unity unityProvider={unityProvider} className="unity" />
            </Row>
        </Container>
    );
}

export default Product