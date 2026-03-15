import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isAStudent, setIsAStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateIsAStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsAStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />

            {editMode && (
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setName(event.target.value);
                        }}
                    />
                </Form.Group>
            )}
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="student-check"
                    label="Student?"
                    checked={isAStudent}
                    onChange={updateIsAStudent}
                />
            )}

            {!editMode &&
                (isAStudent ?
                    <div>{name} is a student</div>
                :   <div>{name} is not a student</div>)}
        </div>
    );
}
