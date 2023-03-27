import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <h1>Home</h1>
            <WhatsHappening />
            <TuitsList></TuitsList>
        </div>
    );
}

export default HomeComponent;