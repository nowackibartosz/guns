import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./pages/First/First";
import Game from "./pages/entertainment/Game";
import FinalScreen from "./pages/FinalScreen/FinalScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<First />}></Route>
        <Route exact path="/game" element={<Game />}></Route>
        <Route exact path="/finalscreen" element={<FinalScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
