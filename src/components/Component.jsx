import React from "react";
import Footer from "./Footer";
import "./component.css";

export default function Component() {
  return (
    <div className="container">
      <header className="header">
        <img
          alt="C.R.I. FLUID SYSTEMS logo"
          className="logo"
          src="./assets/logo.png"
        />
      </header>
      <section className="section">
        <div className="section-content">
          <div className="column">
            <img
              alt="Energy Conservation Award"
              className="award-image"
              src="./assets/1.png"
            />
          </div>
          <div className="column">
            <h2 className="section-title">
              C.R.I. PUMPS WINS THE{" "}
              <strong>NATIONAL ENERGY CONSERVATION AWARD 2018</strong> for the
              4th time.
            </h2>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img
              alt="Another Image"
              className="second-column-image"
              src="./assets/2.png"
            />
            <p>
              Government of India has awarded the{" "}
              <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <p className="saving-text">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img alt="Valves" className="product-image" src="./assets/3.png" />
        <p className="centered-text">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <div className="red-line"></div>
      </section>
      <Footer />
    </div>
  );
}
