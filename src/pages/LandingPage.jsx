import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logoSteezy.png'; 
import Button from "../components/Button";
const LandingPage = () => {
  const [dateTime, setDateTime] = useState({
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString('en-US')
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime({
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString('en-US')
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="content w-1/2 items-center justify-center text-center ">
        <img className="m-auto untouchable w-[350px]" src={logo} alt="" />
        <h1 className="mt-14 mb-12 text-lg"><b><span className="mr-2">{dateTime.date}</span> {dateTime.time}</b></h1>
        <Link to="/shop">
          <Button title="Shop" />
        </Link>
        <br />
        <Link to="/lookbook">
          <Button title="Lookbook" />
        </Link>
        <br />
        <Link to="/lookbook">
          <Button title="Archive" />
        </Link>
        <br />
        <Link to="/contact">
          <Button title="Contact" />
        </Link>
        <br />

        <div className="social-icons mt-12">
        <a href="https://www.instagram.com/steezy_tbilisi/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a className="ml-4" href="https://www.tiktok.com/@steezy_tbilisi1" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok text-2xl"></i>
        </a>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;