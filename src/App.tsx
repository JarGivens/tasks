import React from "react";
import "./App.css";
import glorpCat from "./assets/glorpCat.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1 className="App-h1">Hello this is my header.</h1>

            <header className="App-header" style={{ backgroundColor: "red" }}>
                CISC275 Hello World Jack Givens
            </header>
            <Container>
                <Row>
                    <Col>
                        <ol>
                            <li>3</li>
                            <li>2</li>
                            <li>1</li>
                        </ol>

                        <div
                            style={{
                                width: 300,
                                height: 200,
                                backgroundColor: "red",
                            }}
                        ></div>

                        <img src={glorpCat} alt="Alien cat image"></img>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>

                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>

                        <div
                            style={{
                                width: 300,
                                height: 200,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
