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
    <div className="all">
      <div className="screen">
        <div className="title">
          <h1>Month in life of guns dealer</h1>
        </div>
        <div className="instrukcja">
          <h2> Instruction of game</h2>
          <p>
            1. musisz miec duzo Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sint, cupiditate optio. Numquam, officiis? Beatae
            ipsam culpa sequi, soluta tempore voluptatum eveniet ea odio
            reprehenderit aperiam error ullam excepturi
          </p>
          <p>
            2.Musisz to lubic i nie chceic teog zmienic lorem 20 Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Non, debitis velit!
            Saepe sed hic quo corrupti laudantium sapiente? Nisi, nemo!
          </p>
        </div>{" "}
      </div>

      <div className="przyciski">
        <button className="start" onClick={handle}>
          Lets play
        </button>
        <button className="start" onClick={handleFinish}>
          Finish menu
        </button>
      </div>
    </div>
  );
};

export default First;
