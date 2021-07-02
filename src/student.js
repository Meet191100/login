import React from "react";


//student page edit here

const Student = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <h1>Student page</h1>
            <nav>
                <button onClick={handleLogOut}>Logout</button>
            </nav>

        </section>
    );
};

export default Student;
