import ContactMe from "../../components/ContactMe/ContactMe";
import { useNavigate } from "react-router-dom";

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
    <div>
      <p>Bomba na banie konczymy balet</p>

      <ContactMe />

      <button onClick={handleGame}>ZAGRAJ JESZCZE RAZ</button>
      <button onClick={handleStart}>STRONA STARTOWA</button>
    </div>
  );
};
export default FinalScreen;
