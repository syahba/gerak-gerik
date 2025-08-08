import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import FinalPage from "./pages/FinalPage";
import TimerPage from "./pages/TimerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/timer" element={<TimerPage></TimerPage>}></Route>
        <Route path="/workout" element={<WorkoutPage></WorkoutPage>}></Route>
        <Route path="/final" element={<FinalPage></FinalPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
