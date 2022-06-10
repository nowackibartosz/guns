import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
      {" "}
      <p>Zaczynamy zabawe</p>
      <button onClick={handle}>rozpocznij zabawe</button>
      <button onClick={handleFinish}>Przejdź do końcowego menu</button>
    </div>
  );
};

export default First;
