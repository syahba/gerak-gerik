import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../index.css";
import { useState } from "react";

function WorkoutPage() {
  const is_light = true;
  const navigate = useNavigate();

  // video carousel
  const videos = ["1wtm9blsNqk", "gF0WuSkzIjY"];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[var(--white-color)] screen">
      <Navbar is_light={is_light}></Navbar>

      <section className="content gap-5 my-2">
        <h1 className="text-[var(--neutral-color)]">
          Which reps do you want to do today, mas?
        </h1>

        <iframe
          src={`https://www.youtube.com/embed/${videos[index]}?autoplay=0`}
          title="Workout Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[60rem] aspect-video overflow-hidden"
        ></iframe>

        <div className="flex items-center gap-6 mt-2">
          <Button
            is_light={is_light}
            is_primary={false}
            text={"Maybe a different workout?"}
            onClick={handleNext}
          ></Button>

          <Button
            is_light={is_light}
            is_primary={true}
            text={"Woohoo! All done for today, babe!"}
            onClick={() => navigate("/final")}
          ></Button>
        </div>
      </section>

      <Footer is_light={is_light}></Footer>
    </div>
  );
}

export default WorkoutPage;
