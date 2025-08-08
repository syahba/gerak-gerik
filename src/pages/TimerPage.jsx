import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "../index.css";
import { useEffect, useState } from "react";

function TimerPage() {
  const is_light = false;
  const navigate = useNavigate();

  // set timer
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes
  const [isRunning, setIsRunning] = useState(true);

  // start countdown
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  // convert seconds to mm:ss
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${mins}:${secs}`;
  };

  const handleStop = () => {
    setIsRunning(false);
    navigate("/workout");
  };

  return (
    <div className="bg-[var(--primary-color)] screen">
      <Navbar is_light={is_light}></Navbar>

      <section className="content my-2">
        <h1 className="text-[var(--white-color)]">
          Fine, I’ll give you 10 minutes -.-
        </h1>

        <h1 className="text-[20rem] text-[var(--secondary-color)] -mt-10 -mb-5">
          {formatTime(timeLeft)}
        </h1>

        <Button
          is_light={is_light}
          is_primary={true}
          text={"Okay, all good now. LET’S GO, BABY!"}
          onClick={handleStop}
        ></Button>
      </section>

      <Footer is_light={is_light}></Footer>
    </div>
  );
}

export default TimerPage;
