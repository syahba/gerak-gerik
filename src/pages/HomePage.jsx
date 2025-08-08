import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../index.css";
import { getWorkoutStatus } from "../utils/tracker";

function HomePage() {
  const isLight = false;
  const navigate = useNavigate();
  const todayDone = getWorkoutStatus();

  return (
    <div className="bg-[var(--primary-color)] screen">
      <Navbar isLight={isLight}></Navbar>

      {todayDone ? (
        <section className="content">
          <h2 className="text-[var(--white-color)]">
            Ooh, I love your fiery spirit today! But, you’ve done your workout^^
          </h2>
          <h1 className="text-[var(--secondary-color)] text-[7rem] -mt-5">
            You may rest, honey~
          </h1>
        </section>
      ) : (
        <section className="content gap-6 my-4">
          <h1 className="text-[var(--white-color)]">
            Hi mas, ready for today’s workout session?
          </h1>
          <img src="./doodles-1.webp" alt="Illustration" className="max-w-96" />

          <div className="flex flex-col max-w-max gap-4 my-4">
            <Button
              isLight={isLight}
              isPrimary={true}
              text={"OH YESSS! Let’s do this my love~"}
              onClick={() => navigate("/workout")}
            ></Button>

            <Button
              isLight={isLight}
              isPrimary={false}
              text={`Oh no! Hold on, I gotta go poop :"`}
              onClick={() => navigate("/timer")}
            ></Button>
          </div>
        </section>
      )}

      <Footer isLight={isLight}></Footer>
    </div>
  );
}

export default HomePage;
