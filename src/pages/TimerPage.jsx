import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "../index.css";

function TimerPage() {
  const is_light = false;
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--primary-color)] screen">
      <Navbar is_light={is_light}></Navbar>

      <section className="content my-2">
        <h1 className="text-[var(--white-color)]">
          Fine, I’ll give you 10 minutes -.-
        </h1>

        <h1 className="text-[20rem] text-[var(--secondary-color)] -mt-10 -mb-5">
          10:00
        </h1>

        <Button
          is_light={is_light}
          is_primary={true}
          text={"Okay, all good now. LET’S GO, BABY!"}
          onClick={() => navigate("/workout")}
        ></Button>
      </section>

      <Footer is_light={is_light}></Footer>
    </div>
  );
}

export default TimerPage;
