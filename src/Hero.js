import React from "react";

const Hero = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <button onClick={handleLogOut}>Logout</button>
            </nav>

        </section>
    );
};

export default Hero;
