import ContactMe from "../../components/ContactMe/ContactMe";
import { useNavigate } from "react-router-dom";

import "./FinalScreen.css";

const FinalScreen = () => {
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleGame = (e) => {
    e.preventDefault();
    navigate("/game");
  };
  return (
    <div className="final">
      <div className="final-score">
        <p>Dobra robota! Byłeś niczym Nicolas Cage w Pan życia i śmierci. </p>
      </div>

      <ContactMe />
      <div className="final-button">
        <button className="start" onClick={handleGame}>
          ZAGRAJ JESZCZE RAZ
        </button>
        <button className="start" onClick={handleStart}>
          STRONA STARTOWA
        </button>
      </div>
    </div>
  );
};
export default FinalScreen;
