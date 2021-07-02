import React from "react";


//admin page edit here

const Admin = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <h1>Admin page</h1>
            <nav>
                <button onClick={handleLogOut}>Logout</button>
            </nav>

        </section>
    );
};

export default Admin;
