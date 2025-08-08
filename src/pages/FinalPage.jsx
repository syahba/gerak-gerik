import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getStreak } from "../utils/tracker";

function FinalPage() {
  const isLight = false;

  // streaks
  const streak = getStreak();
  const specialStreaks = [3, 7, 14];
  let contents = {};

  if (streak === 1) {
    contents.h1 = "Well done, my love! I’m so proud of you <3";
    contents.h2 = `Your workout journey with me has just begun!
    Here’s a badge to mark this special day:`;
    contents.img = "./doodles-2.webp";
  } else if (
    specialStreaks.includes(streak) ||
    (streak >= 30 && streak % 30 === 0)
  ) {
    contents.h1 = `OMG, BABEY! You’ve hit a ${streak}-day streak!`;
    contents.h2 = `You’re just so handsome, smart, cool, passionate, 
    and now, muscley! hehe :D Here’s your well-deserved special badge, king:`;
    contents.img = "./doodles-2.webp";
  } else {
    contents.h1 = "YEAY! Another great day of burning ‘em calories~";
    contents.h2 = `Get a drink, sit down, and rest your body babe. 
    I know you’re exhausted :p This is you right now, and I’m loving it:`;
    contents.img = "./doodles-3.webp";
  }

  return (
    <div className="bg-[var(--primary-color)] screen">
      <Navbar isLight={isLight}></Navbar>

      <section className="content gap-2 my-5">
        <h1 className="text-[var(--secondary-color)] text-5xl">
          {contents.h1}
        </h1>
        <div>
          <h2 className="text-[var(--white-color)]">{contents.h2}</h2>
          <h2 className="text-[var(--white-color)] -mt-1">{contents.h3}</h2>
        </div>
        <img
          src={contents.img}
          alt="Illustration"
          className="max-w-[45rem] mt-6"
        />
      </section>

      <Footer isLight={isLight}></Footer>
    </div>
  );
}

export default FinalPage;
