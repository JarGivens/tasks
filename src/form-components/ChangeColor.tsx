import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "teal",
        "purple",
        "green",
        "orange",
        "yellow",
        "pink",
        "aquamarine",
    ];

    const [pickedColor, setPickedColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={() => {
                        setPickedColor(color);
                    }}
                    id={"color-" + color}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={pickedColor === color}
                    inline
                ></Form.Check>
            ))}
            <div>
                you have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: pickedColor }}
                >
                    {pickedColor}
                </span>
            </div>
        </div>
    );
}
