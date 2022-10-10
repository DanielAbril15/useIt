import React, { useState } from "react";
import videoBackG from "../assets/company.mp4";
import Login from "./Login";
import "./styles/home.css";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleLogin = () => {
    setIsFormOpen(true);
  };
  const handleCloseLogin = () => {
    setIsFormOpen(false);
  };
  return (
    <article className="home">
      <section className={isFormOpen ? "form__container" : "form-none"}>
        <Login handleCloseLogin={handleCloseLogin} />
      </section>
      <div className="home__background"></div>
      <video src={videoBackG} autoPlay loop muted></video>
      <section className="home__content">
        <h1>USEIT</h1>
        <div className="cities">
          <h3>Sedes</h3>
          <div>
            <p>Cali</p>
            <p>Bogota</p>
          </div>
        </div>
        <button onClick={handleLogin} className="login">
          LOGIN
        </button>
      </section>
    </article>
  );
};

export default Home;
