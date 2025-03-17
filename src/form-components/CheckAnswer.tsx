import React, { useState } from "react";
import {Form} from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const isCorrect = userAnswer === expectedAnswer;
    function takeInput(event: React.ChangeEvent<HTMLInputElement>){
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={takeInput} />
            </Form.Group>
            <h3>{(isCorrect ? "✔️": "❌")}</h3>
        </div>
    );
}
