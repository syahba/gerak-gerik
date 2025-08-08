import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

function TimerPage() {
  const is_light = false;
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--primary-color)] min-h-screen flex flex-col items-center">
      <Navbar is_light={is_light}></Navbar>

      <section className="flex-1 flex flex-col items-center justify-center my-2">
        <h1 className="text-[var(--white-color)]">
          Fine, I’ll give you 10 minutes -.-
        </h1>

        <h1 className="text-[20rem] text-[var(--secondary-color)] -mt-10 -mb-5">10:00</h1>

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
