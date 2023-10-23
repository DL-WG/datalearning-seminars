import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UpcomingSeminar from "./components/UpcomingSeminar";
import CalendarSection from "./components/CalendarSection";
import PreviousSpeakers from "./components/PreviousSpeakers";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <Hero />
            <UpcomingSeminar />
            <CalendarSection />
            <PreviousSpeakers />
        </div>
    );
}

export default App;
