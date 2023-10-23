import React, { useState } from "react";
import DatePicker from "react-date-picker";
import seminars from "../data/seminars.json";

function CalendarSection() {
    const [value, setValue] = useState(new Date());

    // Load seminar details for the selected date
    const selectedSeminar = seminars.find(seminar => new Date(seminar.date).toDateString() === value.toDateString());

    return (
        <section className="flex p-8">
            <div className="flex-1">
                <DatePicker
                    onChange={setValue}
                    value={value}
                    // Additional properties can be added if needed
                />
            </div>
            <div className="flex-1 p-4 bg-white shadow-md">
                {selectedSeminar ? (
                    <>
                        <h3 className="text-2xl mb-2">{selectedSeminar.title}</h3>
                        <p className="mb-2"><strong>Speaker:</strong> {selectedSeminar.speaker}</p>
                        <p className="mb-2">{selectedSeminar.abstract}</p>
                        <p className="mb-2"><strong>About Speaker:</strong> {selectedSeminar.bio}</p>
                        <a href={selectedSeminar.youtubeLink} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                    </>
                ) : (
                    <p>Select a date to view seminar details.</p>
                )}
            </div>
        </section>
    );
}

export default CalendarSection;
