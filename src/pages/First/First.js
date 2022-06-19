import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./First.css";

const First = () => {
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    navigate("/game");
  };

  useEffect(() => {}, []);

  const handleFinish = (e) => {
    e.preventDefault();
    navigate("/FinalScreen");
  };

  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="title">
            <h1>GUNS DEALER</h1>
          </div>
          <div className="instrukcja">
            <p>
              1. Celem gry jest zgromadzenie poprzez handel bronią jak
              największej ilości gotówki przed upływem dziesięciu dni.
            </p>
            <p>
              2. Codziennie możesz podjąć się handlu tylko z jednym państwem.
              Możesz zarówno sprzedawać jak i kupować broń.
            </p>
            <p>
              3. Gra kończy się po upłynięciu dziesięciu tur(dni). Po
              rozpoczęciu rozgrywki gry nie można zastopować.
            </p>
            <p>
              4. Pamiętaj! To tylko gra, rzeczywistość jest dużo gorsza.
              Zbieżność osób, nazwisk i zdarzeń całkowicie przypadkowa. Miłej
              zabawy!
            </p>
          </div>{" "}
        </div>

        <div className="przyciski">
          <button className="start" onClick={handle}>
            ZAGRAJ
          </button>
          <button className="start" onClick={handleFinish}>
            MENU KOŃCOWE
          </button>
        </div>
      </div>
    </div>
  );
};

export default First;
