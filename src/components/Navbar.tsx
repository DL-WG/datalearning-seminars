import React from "react";

function Navbar() {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <img src="./DL-logo.jpg" alt="Logo" className="h-14" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500">Join our mailing list</button>
            </div>
        </nav>
    );
}

export default Navbar;
