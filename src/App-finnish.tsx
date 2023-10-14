import React, { useState } from "react";
import selfie from "./images/selfie.jpg";
import react_png from "./images/react.png";
import typescript_png from "./images/typescript.png";
import javascript_png from "./images/javascript.png";
import java_png from "./images/java.png";
import html5_png from "./images/html5.png";
import css_png from "./images/css-3.png";
import sass_png from "./images/sass.png";
import python_png from "./images/python.png";
import c_plusplus_png from "./images/c-.png";
import c_sharp_png from "./images/c-sharp.png";
import finland from "./images/finland.png";
import united from "./images/uk.png";
import under from "./images/under.png";
import countdown from "./images/countdown.png";
import multistep from "./images/multistep.png";
import hh from "./images/haaga.jpg";
import sql_png from "./images/sql.png";
import { Link } from "react-router-dom";

import "./App.scss";

function App_finnish() {
  const [skillsVisible, setSkillsVisible] = useState<boolean>(false);
  const [navVisible, setNavVisible] = useState<boolean>(true);
  const [allVisible, setAllVisible] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<String>("Show more..");

  function updateStateBasedOnScreenWidth() {
    const maxWidth = 1020;
    if (allVisible == false && window.innerWidth >= maxWidth) {
      setAllVisible(true);
    }
  }
  window.addEventListener("resize", updateStateBasedOnScreenWidth);
  updateStateBasedOnScreenWidth();

  const handleVisibility = () => {
    if (skillsVisible === true) {
      setShowMore("Show more..");
      setSkillsVisible(false);
    } else {
      setShowMore("Close");
      setSkillsVisible(true);
    }
  };

  const handleNav = () => {
    if (navVisible === true) {
      setNavVisible(false);
      setAllVisible(false);
    } else {
      setNavVisible(true);
      setAllVisible(true);
    }
  };

  const notReady = () => {
    window.alert("API website will be ready sometime next week");
  };

  return (
    <div className="App">
      <header className="nav">
        <div className="flags">
          <Link to="/">
            <img id="uk" src={united} />
          </Link>
          <Link to="/fi">
            <img id="fin" src={finland} />
          </Link>
        </div>
        <svg
          className="nav-mobile-icon"
          onClick={() => handleNav()}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
        </svg>
        <ul className="nav-container">
          <li>
            <a className="link" href="#home">
              Koti
            </a>
          </li>
          <li>
            <a className="link" href="#about">
              Tietoa
            </a>
          </li>
          <li>
            <a className="link" href="#projects">
              Projektit
            </a>
          </li>
          <li>
            <a className="link" href="#contact">
              Yhteystiedot
            </a>
          </li>
        </ul>
      </header>
      <div className={`${navVisible === true ? "hidden" : "mobile-nav"}`}>
        <ul>
          <li>
            <a className="link" href="#home" onClick={() => handleNav()}>
              Koti
            </a>
          </li>
          <li>
            <a className="link" href="#about" onClick={() => handleNav()}>
              Tietoa
            </a>
          </li>
          <li>
            <a className="link" href="#projects" onClick={() => handleNav()}>
              Projektit
            </a>
          </li>
          <li>
            <a className="link" href="#contact" onClick={() => handleNav()}>
              Yhteystiedot
            </a>
          </li>
        </ul>
      </div>
      <div className={`${allVisible === false ? "hidden" : "all-content"}`}>
        <section className="home" id="home">
          <div className="home-container">
            <div className="home-text">
              <div className="focused-text">
                <h1>
                  Front-end React ohjelmoija
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c3.691 0 6.915 2.016 8.647 5h-17.294c1.732-2.984 4.956-5 8.647-5zm0 20c-5.514 0-10-4.486-10-10 0-1.045.163-2.052.461-3h1.859c.606 1.518 1.929 3 3.986 3 2.477 0 2.153-2.31 3.694-2.31s1.218 2.31 3.695 2.31c2.055 0 3.379-1.482 3.984-3h1.86c.298.948.461 1.955.461 3 0 5.514-4.486 10-10 10zm5.508-8.059l.492.493c-1.127 1.72-3.199 3.566-5.999 3.566-2.801 0-4.874-1.846-6.001-3.566l.492-.493c1.513 1.195 3.174 1.931 5.509 1.931 2.333 0 3.994-.736 5.507-1.931z" />
                  </svg>
                </h1>
                <p className="light">
                  Moikka! Olen Samuel Poutsalo, motivoitunut junior ohjelmoija
                  helsingistä, tällä hetkellä keskittyen front-end ja react
                  ohjelmointiin.
                </p>
                <div className="user-links">
                  <a href="https://www.linkedin.com/in/samuel-poutsalo-28b2b0227/">
                    <svg
                      className="linked"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://github.com/samuelpoutsalo">
                    <svg
                      className="git"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <img className="selfie" src={selfie} />

            <div className="user-skills">
              <div className="user-text">
                <h3 className="black">Ohjelmointikieleni - Paras osaaminen:</h3>
                <p
                  className="light"
                  id="techId"
                  onClick={() => handleVisibility()}
                >
                  {showMore}
                </p>
              </div>
              <div className="skill-icons">
                <img src={react_png} />
                <img src={sass_png} />
                <img src={typescript_png} />
                <img src={javascript_png} />
                <img src={html5_png} />
                <img src={css_png} />
              </div>
              <div
                className={`skill-icons ${
                  skillsVisible === true ? "basic-skills" : "hidden"
                }`}
              >
                <h3 className="black">Aloitteleva osaamistaito:</h3>
                <img src={java_png} />
                <img src={python_png} />
                <img src={c_plusplus_png} />
                <img src={c_sharp_png} />
                <img src={sql_png} />
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about-container">
            <div className="img-size">
              <img className="haaga" src={hh} />
            </div>
            <div className="text-side">
              <h3>VÄHÄN MINUSTA</h3>
              <h2>Innokas juniorikehittäjä, joka etsii työmahdollisuuksia</h2>
              <p className="light">
                Olen motivoitunut 23-vuotias Helsinkiläisopiskelija ja juuri
                valmistumassa tietojenkäsittelyn tradenomiksi Haaga-Heliasta.
                Opintojeni aikana olen saanut tukevan osaamisen eri
                ohjelmointikielissä, sekä front-end- että back end roolissa.
                Viime aikoina olen keskittynyt pääosin front-end ohjelmointiin,
                parantaen JavaScript/TypeScript, React ja SCSS taitojani.
                <br />
                <br /> Viimeisteltääkseni tutkintoni tarvitsen vain viiden
                kuukauden mittaisen työharjoittelu mahdollisuuden, jonka
                suoritettuani jatkaisin kuitenkin mielelläni työskentelyä
                täyspäiväisesti.
              </p>
            </div>
          </div>
        </section>
        <section className="projects" id="projects">
          <div className="projects-container">
            <h3 className="projects-head">PROJEKTIT</h3>
            <h2 className="projects-head">
              Jokainen sivusto luotiin nimenomaan tätä portfoliota varten
              osoittaakseni taitoni
            </h2>
            <div className="projects-content">
              <div className="site-preview">
                <div className="image-preview normal">
                  <a onClick={notReady}>
                    <img src={under} />
                  </a>
                </div>
                <div className="text-preview">
                  <h3 className="black">
                    (Keskeneräinen) API nettisivu
                    <span className="date"> (TBD)</span>
                  </h3>
                  <p className="light">
                    Yksinkertainen mutta responsiivinen verkkosivusto, jossa
                    käyttäjä voi tehdä seuraavaa: Hakea kaikkia maita API:sta
                    etusivulla, suodattaa maita alueittain, klikata maata
                    saadakseen lisätietoja ja vaihtaa väriteemaa vaalean ja
                    tumman tilan välillä.
                  </p>
                  <div className="used-code">
                    <p>React</p>
                    <p>SCSS</p>
                    <p>TypeScript</p>
                  </div>
                  <div className="code-links" onClick={notReady}>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="site-preview">
                <div className="text-preview normal flip-text">
                  <h3 className="black">
                    Monivaiheinen lomake
                    <span className="date"> (Lokakuu 2023)</span>
                  </h3>
                  <p className="light">
                    Korkean taitotason haaste Frontend Mentor -sivustolta, jossa
                    käyttäjä voi: Suorittaa jokaisen vaiheen astettain, palata
                    edelliseen vaiheeseen päivittääkseen tietojaan, nähdä
                    yhteenvedon valinnoistaan viimeisessä vaiheessa ja vahvistaa
                    tilauksensa.
                  </p>
                  <div className="used-code">
                    <p id="id1">React</p>
                    <p id="id2">SCSS</p>
                    <p id="id3">TypeScript</p>
                  </div>
                  <div className="code-links">
                    <a href="https://github.com/samuelpoutsalo/multi-step-form">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://samuelpoutsalo.github.io/multi-step-form/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="image-preview flipped flip-image">
                  <a href="https://samuelpoutsalo.github.io/multi-step-form/">
                    <img src={multistep} />
                  </a>
                </div>
              </div>
              <div className="site-preview">
                <div className="image-preview normal">
                  <a href="https://samuelpoutsalo.github.io/countdown-timer/">
                    <img src={countdown} />
                  </a>
                </div>
                <div className="text-preview">
                  <h3 className="black">
                    Käynnistyslaskennan ajastin
                    <span className="date"> (Tammikuu 2023)</span>
                  </h3>
                  <p className="light">
                    Verkkosivun tai tapahtuman julkaisun laskentaa näyttävä
                    ajastin, jossa on räätälöityjä CSS-animaatioita. Luotu
                    Reactin, JavaScriptin ja tavallisen CSS:n avulla.
                  </p>
                  <div className="used-code">
                    <p>React</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>
                  <div className="code-links">
                    <a href="https://github.com/samuelpoutsalo/countdown-timer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://samuelpoutsalo.github.io/countdown-timer/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="contact-container">
            <h3>YHTEYSTIEDOT</h3>
            <h2>Etsin töitä, lähetä ihmeessä viestiä!</h2>
            <div className="info">
              <a href="https://www.google.com/maps/place/Kalasatama,+Helsinki/@60.1847579,24.9748421,16z/data=!3m1!4b1!4m6!3m5!1s0x469209645c6f494b:0xb8ab7684b8a7ea10!8m2!3d60.1855264!4d24.9797648!16s%2Fg%2F121s4dmv?entry=ttu">
                <div className="location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 22.586l-2.823-2.823c.526-.792.836-1.74.836-2.763 0-2.762-2.238-5-5-5s-5 2.238-5 5 2.238 5 5 5c1.016 0 1.957-.307 2.746-.827l2.827 2.827 1.414-1.414zm-9.987-5.586c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm-4 0l.002-.034-3.015 2.175v-13.068l4-2.886v10.247c.508-.854 1.189-1.591 2-2.161v-8.086l4 2.886v3.927h.013c.336 0 .664.032.987.078v-4.007l4-2.479v8.504c1.188 1.208 1.936 2.844 2 4.653v-16.749l-6.455 4-5.545-4-5.545 4-6.455-4v18l6.455 4 3.91-2.82c-.226-.687-.352-1.419-.352-2.18zm-4.013 2.365l-4-2.479v-13.294l4 2.479v13.294z" />
                  </svg>
                  <div className="info-text">
                    <p className="black">Sijainti</p>
                    <p className="light">Kalasatama, Helsinki, Suomi</p>
                  </div>
                </div>
              </a>
              <div className="mail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
                </svg>
                <div className="info-text">
                  <p className="black">Sähköposti</p>
                  <p className="light">samuel.poutsalo@gmail.com</p>
                </div>
              </div>
              <div className="phone">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M2.59 1.322l2.844-1.322 4.041 7.889-2.724 1.342c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-.604.276-1.228.402-1.862.397-5.678-.043-12.143-10.564-12.113-17.454.011-2.351.777-4.279 2.59-5.224zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.972-.474-2.271-4.383-1.026.501c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.498-2.252-4.398zm8.98 6.404c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                </svg>
                <div className="info-text">
                  <p className="black">Puhelin</p>
                  <p className="light">+358 45 113 0811</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <a href="https://www.linkedin.com/in/samuel-poutsalo-28b2b0227/">
            <svg
              className="footer-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="https://github.com/samuelpoutsalo">
            <svg
              className="footer-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App_finnish;
