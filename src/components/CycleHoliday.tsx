import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎅" | "👻" | "🥧" | "🦃" | "🥊";

    const ORDERED_BY_ALPHABET: Record<Holiday, Holiday> = {
        "🥊": "🎅",
        "🎅": "👻",
        "👻": "🥧",
        "🥧": "🦃",
        "🦃": "🥊",
    };

    const ORDERED_BY_DATE: Record<Holiday, Holiday> = {
        "🥧": "👻",
        "👻": "🦃",
        "🦃": "🎅",
        "🎅": "🥊",
        "🥊": "🥧",
    };

    const [holiday, setHoliday] = useState<Holiday>("🎅");

    function changeByAlphabet(): void {
        const newHoliday = ORDERED_BY_ALPHABET[holiday];
        setHoliday(newHoliday);
    }

    function changeByDate(): void {
        const newHoliday = ORDERED_BY_DATE[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeByDate}>Advance by Year</Button>
            Holiday: {holiday}
        </div>
    );
}
