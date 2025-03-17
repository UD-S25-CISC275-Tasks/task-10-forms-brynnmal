import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    function handleUseAttempt() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }
    function handleGainAttempt() {
        const requested = parseInt(requestedAttempts);
        if (!isNaN(requested) && requested > 0) {
            setAttemptsLeft(attemptsLeft + requested);
        }
    }
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }
    return (
        <div>
            <h3>Attempts Left: {attemptsLeft}</h3>

            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={handleInputChange}
                    placeholder="Enter number of attempts"
                />
            </Form.Group>

            <div>
                <Button
                    onClick={handleUseAttempt}
                    disabled={attemptsLeft === 0}
                >
                    Use Attempt
                </Button>

                <Button onClick={handleGainAttempt}>
                    Gain Attempt
                </Button>
            </div>
        </div>
    );
}
