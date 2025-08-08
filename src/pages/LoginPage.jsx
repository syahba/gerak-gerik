import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../index.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LoginPage() {
  const isLight = true;
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const CORRECT_PASSWORD = "08072001";

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      localStorage.setItem("viewer", "elan");
    } else {
      localStorage.setItem("viewer", "public");
    }

    navigate("/");
  };

  return (
    <div className="bg-[var(--white-color)] screen">
      <Navbar isLight={isLight}></Navbar>

      <form className="content gap-2">
        <h1>Password, please?</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-[var(--primary-color)] rounded-full py-2 px-4 mb-12 w-60"
        />

        <Button
          isLight={false}
          isPrimary={true}
          text={"Submit here!"}
          onClick={handleLogin}
        ></Button>
      </form>

      <Footer isLight={isLight}></Footer>
    </div>
  );
}

export default LoginPage;
