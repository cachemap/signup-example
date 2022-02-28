import React from "react";
import "./App.scss";

const Input = ({ label, setter, ...props }) => {
  const onChange = (e) => setter(e.target.value);

  return (
    <label>
      <span>{label}</span>
      <input {...props} onChange={onChange} />
    </label>
  );
};

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

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div className="login-container">
          <section>
            <Input
              label="Email"
              name="email"
              value={password}
              setter={setEmail}
            />

            <Input
              label="Password"
              name="password"
              value={password}
              setter={setPassword}
            />

            <Input
              label="Check Password"
              name="checkPassword"
              value={checkPassword}
              setter={setCheckPassword}
            />
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
