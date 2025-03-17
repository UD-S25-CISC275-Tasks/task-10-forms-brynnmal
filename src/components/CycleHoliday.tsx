import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<string>("🎄");
    const holidaysAlphabetic = [
        { name: "Christmas", emoji: "🎄", date: "12-25" },
        { name: "Fourth of July", emoji: "🎆", date: "07-04" },
        { name: "Halloween", emoji: "🎃", date: "10-31" },
        { name: "New Year's Eve", emoji: "🎉", date: "12-31" },
        { name: "St. Patrick's Day", emoji: "☘️", date: "03-17" }
    ];
    const holidaysDate = [
        { name: "St. Patrick's Day", emoji: "☘️", date: "03-17" },
        { name: "Fourth of July", emoji: "🎆", date: "07-04" },
        { name: "Halloween", emoji: "🎃", date: "10-31" },
        { name: "Christmas", emoji: "🎄", date: "12-25" },
        { name: "New Year's Eve", emoji: "🎉", date: "12-31" }
    ];
    const advanceAlphabetically = () => {
        const currentIndex = holidaysAlphabetic.findIndex(holiday => holiday.emoji === currentHoliday);
        const nextHoliday = holidaysAlphabetic[(currentIndex + 1) % holidaysAlphabetic.length];
        setCurrentHoliday(nextHoliday.emoji);
    };
    const advanceByYear = () => {
        const currentIndex = holidaysDate.findIndex(holiday => holiday.emoji === currentHoliday);
        const nextHoliday = holidaysDate[(currentIndex + 1) % holidaysDate.length];
        setCurrentHoliday(nextHoliday.emoji);
    };
    return (
        <div>
            <h3>Cycle through Holidays</h3>
            <div>
                <p>Holiday: {currentHoliday}</p>
            </div>

            <div>
                <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
                <Button onClick={advanceByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
