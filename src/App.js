import React from "react";
import "./App.scss";

function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkPassword, setCheckPassword] = React.useState("");

  const passwordsMatch = password === checkPassword;
  const passwordAttempted = password !== "" && checkPassword !== "";

  const canSubmit = passwordsMatch && passwordAttempted && email.includes("@");

  const onSubmit = (e) => {
    e.preventDefault(); // Don't refresh the page

    // Make an API request
  };

  // HOF for DRYness
  const buildOnChange = (setState) => (e) => setState(e.target.value);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div className="login-container">
          <section>
            <label>
              <span>Email</span>
              <input
                value={email}
                name="email"
                onChange={buildOnChange(setEmail)}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                value={password}
                name="password"
                onChange={buildOnChange(setPassword)}
              />
            </label>
            <label>
              <span>Check Password</span>
              <input
                value={checkPassword}
                name="checkPassword"
                onChange={buildOnChange(setCheckPassword)}
              />
            </label>
          </section>

          <div className="submit-button-area">
            {passwordAttempted && !passwordsMatch && (
              <p>Passwords do not match.</p>
            )}
            {passwordAttempted && passwordsMatch && <p>Passwords match!</p>}
            <button disabled={!canSubmit} type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
