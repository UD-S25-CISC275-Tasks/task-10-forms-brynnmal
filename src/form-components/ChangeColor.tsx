import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [choice, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <span>
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={<span style={{ backgroundColor: "red" }}>red</span>}
                    value={"red"}
                    checked={choice === "red"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "blue" }}>
                            blue
                        </span>
                    }
                    value={"blue"}
                    checked={choice === "blue"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "green" }}>
                            green
                        </span>
                    }
                    value={"green"}
                    checked={choice === "green"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "orange" }}>orange</span>
                    }
                    value={"orange"}
                    checked={choice === "orange"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "purple" }}>purple</span>
                    }
                    value={"purple"}
                    checked={choice === "purple"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "cyan" }}>
                            cyan
                        </span>
                    }
                    value={"cyan"}
                    checked={choice === "cyan"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "magenta" }}>magenta</span>
                    }
                    value={"magenta"}
                    checked={choice === "magenta"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "white" }}>white</span>
                    }
                    value={"white"}
                    checked={choice === "white"}
                />
            </span>
            <div>You have chosen </div>
            <div data-testid="colored-box" style={{ backgroundColor: choice }}>
                {choice}
            </div>
        </div>
    );
}