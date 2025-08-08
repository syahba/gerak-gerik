import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  const is_light = false;
  return (
    <div className="bg-[var(--primary-color)] min-h-screen">
      <Navbar is_light={is_light}></Navbar>
      
      <Button
        is_light={is_light}
        is_primary={true}
        text={"This a button"}
      ></Button>

      <Footer is_light={is_light}></Footer>
    </div>
  );
}

export default HomePage;
