import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../index.css";
import { useState } from "react";
import { logWorkout } from "../utils/tracker";

function WorkoutPage() {
  const isLight = true;
  const navigate = useNavigate();

  // video carousel
  const viewer = localStorage.getItem("viewer");
  const myVideos = ["1wtm9blsNqk", "gF0WuSkzIjY"];
  const publicVideos = ["QBqehIDbw5k", "QZOhCZnrowQ"];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    let length;
    if (viewer === "elan") {
      length = myVideos.length;
    } else {
      length = publicVideos.length;
    }

    setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  // finish workout
  const handleFinish = () => {
    logWorkout();
    navigate("/final");
  };

  return (
    <div className="bg-[var(--white-color)] screen">
      <Navbar isLight={isLight}></Navbar>

      <section className="content gap-5 my-2">
        <h1 className="text-[var(--neutral-color)]">
          Which reps do you want to do today, mas?
        </h1>

        <iframe
          src={`https://www.youtube.com/embed/${
            viewer === "elan" ? myVideos[index] : publicVideos[index]
          }?autoplay=0`}
          title="Workout Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[60rem] aspect-video overflow-hidden"
        ></iframe>

        <div className="flex items-center gap-6 mt-2">
          <Button
            isLight={isLight}
            isPrimary={false}
            text={"Maybe a different workout?"}
            onClick={handleNext}
          ></Button>

          <Button
            isLight={isLight}
            isPrimary={true}
            text={"Woohoo! All done for today, babe!"}
            onClick={handleFinish}
          ></Button>
        </div>
      </section>

      <Footer isLight={isLight}></Footer>
    </div>
  );
}

export default WorkoutPage;
