import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./pages/First/First";
import Game from "./pages/Game/Game";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FinalScreen from "./pages/FinalScreen/FinalScreen";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<First />}></Route>
        <Route exact path="/game" element={<Game />}></Route>
        <Route exact path="/finalscreen" element={<FinalScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
