import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  const is_light = false;
  const navigate = useNavigate();
  const has_workout = true;

  return (
    <div className="bg-[var(--primary-color)] min-h-screen flex flex-col items-center">
      <Navbar is_light={is_light}></Navbar>

      {has_workout ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-[var(--white-color)]">Ooh, I love your fiery spirit today! But, you’ve done your workout^^</h2>
          <h1 className="text-[var(--secondary-color)] text-[7rem] -mt-5">You may rest, honey~</h1>
        </div>
      ) : (
        <section className="flex-1 flex flex-col items-center justify-center gap-6 my-4">
          <h1 className="text-[var(--white-color)]">
            Hi mas, ready for today’s workout session?
          </h1>
          <img src="./doodles-1.webp" alt="illustration" className="max-w-96" />

          <div className="flex flex-col max-w-max gap-4 my-4">
            <Button
              is_light={is_light}
              is_primary={true}
              text={"OH YESSS! Let’s do this my love~"}
              onClick={() => navigate("/workout")}
            ></Button>

            <Button
              is_light={is_light}
              is_primary={false}
              text={`Oh no! Hold on, I gotta go poop :"`}
              onClick={() => navigate("/timer")}
            ></Button>
          </div>
        </section>
      )}

      <Footer is_light={is_light}></Footer>
    </div>
  );
}

export default HomePage;
