import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    // function updateUserAnswer(event: React.ChangeEvent<HTMLInputElement>) {
    //     setUserAnswer(event.target.name)
    // }

    return (
        <div>
            <Form.Group controlId="UserAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserAnswer(event.target.value);
                    }}
                />
            </Form.Group>
            <h3>Check Answer: {userAnswer === expectedAnswer ? "✔️" : "❌"}</h3>
        </div>
    );
}
