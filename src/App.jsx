import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import FinalPage from "./pages/FinalPage";
import TimerPage from "./pages/TimerPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter basename="/gerak-gerik">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/timer" element={<TimerPage></TimerPage>}></Route>
        <Route path="/workout" element={<WorkoutPage></WorkoutPage>}></Route>
        <Route path="/final" element={<FinalPage></FinalPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
