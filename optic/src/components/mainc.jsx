import { useState } from "react";
import "../App.css";
import About from "./about";
import Blogs from "./blogs";
import Home from "./home";
import Team from "./team";
import pc from "../assets/Clarvo.png";
const Main = () => {
    const[active,setActive] = useState('hme');

    const renderSection = () => {
        switch(active){
            case 'blg' :
                return <Blogs/>;
            case 'abt':
                return <About/>;
            case 'tem':
                return <Team/>;
            case 'hme':
                default:
                    return <Home/>;

    }
    };
    return(
        <div>
            <nav className="nav-bar">
                <div className="left">
                <img src={pc} className="logo"/>
                <button onClick={ () => setActive('hme')}>Home</button>
                <button onClick={ () => setActive('abt')}>About</button>
                </div>
                <div className="center">
                    <h1>Clarvo</h1>
                </div>
                <div className="right">
                <button onClick={ () => setActive('tem')}>Our Team</button>
                <button onClick={ () => setActive('blg')}>Blogs</button>
                <button onClick={ () => setActive('blg')} className="book">Book Appointment</button>
                </div>
            </nav>
            <div className="section-wrapper">
                {renderSection()}
            </div>
        </div>
    );
};

export default Main;