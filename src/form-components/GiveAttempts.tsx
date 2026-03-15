import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [userInput, setUserInput] = useState<string>("0");

    return (
        <div>
            <h3>Give Attempts</h3>
            <h3>Attempts: {attempts}</h3>
            <Form.Group controlId="formAddAttempts">
                <Form.Label>Attempts to add:</Form.Label>
                <Form.Control
                    type="number"
                    value={userInput}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserInput(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    if (!isNaN(parseInt(userInput)))
                        setAttempts(attempts + parseInt(userInput));
                }}
            >
                gain
            </Button>
        </div>
    );
}
