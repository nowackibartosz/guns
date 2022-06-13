import { useContext } from "react";
import { Context, defaultObject } from "../Context";
import { useState } from "react";

const Historia = () => {
  const { setWeapon1, setWeapon1S, setWeapon2, setWeapon2S } =
    useContext(Context);

  //DNI ZABAWY//
  const [Day, setDay] = useState(defaultObject.Day);

  //HISTORIA GRY.  GRA BĘDZIE MIEĆ 10 DNI.
  const handlerDay = () => {
    setDay(Day + 1);
    setWeapon1((prevState) => Math.floor(Math.random() * 10 + 100));
    setWeapon2((prevState) => Math.floor(Math.random() * 10 + 100));
    setWeapon1S((prevState) => Math.floor(Math.random() * 10 + 60));
    setWeapon2S((prevState) => Math.floor(Math.random() * 10 + 60));

    if (Day === 3) {
      alert("wybuchła wojna światowa, cena każdej broni idzie w góre");
      setWeapon1((prevState) => 200);
      setWeapon2((prevState) => 250);
      setWeapon1S((prevState) => 400);
      setWeapon2S((prevState) => 500);
    }
  };

  return (
    <div className="day">
      <p>DZIEŃ {Day} </p>

      <button onClick={handlerDay}>KOLEJNY DZIEŃ</button>
    </div>
  );
};

export default Historia;
