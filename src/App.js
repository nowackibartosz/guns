import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Game from "./pages/Game";
import FinalScreen from "./pages/FinalScreen";

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
