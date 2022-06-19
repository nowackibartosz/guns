import ContactMe from "../../components/ContactMe/ContactMe";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";
import { useContext } from "react";
import "./FinalScreen.css";

const FinalScreen = () => {
  const { Portfel } = useContext(Context);

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
        <p>
          Poszło Ci nieźle, Twój wynik to <span>${Portfel}</span>{" "}
        </p>
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
