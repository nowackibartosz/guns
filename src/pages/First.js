import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    navigate("/game");
  };

  return (
    <div>
      {" "}
      <p>Zaczynamy zabawe</p>
      <button onClick={handle}>rozpocznij zabawe</button>
    </div>
  );
};

export default First;
