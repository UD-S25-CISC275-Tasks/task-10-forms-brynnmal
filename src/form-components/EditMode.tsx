import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function toggleEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function handleStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function handleSaveClick() {
        setEditMode(false);
    }

    return (
        <div>
            <h2>Edit Mode Example</h2>
            <Form.Group controlId="formEditModeSwitch">
                <Form.Label>Edit Mode</Form.Label>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Toggle Edit Mode"
                    checked={editMode}
                    onChange={toggleEditMode}
                />
            </Form.Group>
            {editMode ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formIsStudent">
                        <Form.Check 
                            type="checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </Form.Group>

                    <Button onClick={handleSaveClick}>Save</Button>
                </div>
            ) : (
                <div>
                    <p>{name} is {isStudent ? "a student" : "not a student"}</p>
                </div>
            )}
        </div>
    );
}
