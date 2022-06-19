import { Context, defaultObject } from "../../Context";
import "./Main.css";
import Wallet from "../Wallet";
// import Historia from "./Historia";
import Country1 from "./Country1";
import Country2 from "./Country2";
import Country3 from "./Country3";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  //CENY BRONI DO KUPIENIA//
  const [weapon1, setWeapon1] = useState(100);
  const [weapon2, setWeapon2] = useState(200);
  const [weapon3, setWeapon3] = useState(300);
  const [weapon4, setWeapon4] = useState(400);
  const [weapon5, setWeapon5] = useState(500);
  //CENY BRONI DO SPRZEDAŻY//
  const [weapon1S, setWeapon1S] = useState(100);
  const [weapon2S, setWeapon2S] = useState(200);
  const [weapon3S, setWeapon3S] = useState(330);
  const [weapon4S, setWeapon4S] = useState(440);
  const [weapon5S, setWeapon5S] = useState(550);

  //DNI ZABAWY//
  const [Day, setDay] = useState(defaultObject.Day);

  //HISTORIA GRY.  GRA BĘDZIE MIEĆ 10 DNI.

  const handlerDay = () => {
    setDay(Day + 1);
    setWeapon1((prevState) => Math.floor(Math.random() * 10 + 100));
    setWeapon2((prevState) => Math.floor(Math.random() * 10 + 100));
    setWeapon3((prevState) => Math.floor(Math.random() * 10 + 100));
    setWeapon4((prevState) => Math.floor(Math.random() * 10 + 100));
    setWeapon5((prevState) => Math.floor(Math.random() * 10 + 100));

    setWeapon1S((prevState) => Math.floor(Math.random() * 10 + 60));
    setWeapon2S((prevState) => Math.floor(Math.random() * 10 + 60));
    setWeapon3S((prevState) => Math.floor(Math.random() * 10 + 60));
    setWeapon4S((prevState) => Math.floor(Math.random() * 10 + 60));
    setWeapon5S((prevState) => Math.floor(Math.random() * 10 + 60));

    if (Day === 3) {
      alert("wybuchła wojna światowa, cena każdej broni idzie w góre");
      setWeapon1((prevState) => 200);
      setWeapon2((prevState) => 250);
      setWeapon1S((prevState) => 400);
      setWeapon2S((prevState) => 500);
    }

    if (Day === 10) {
      navigate("/FinalScreen");
    }
  };

  // //HAJSSS/
  const [Portfel, setPortfel] = useState(defaultObject.Portfel);

  // // ILOŚC W PORTFELU I PRZY SOBIE
  const [stanWeapon1, setStanWeapon1] = useState(defaultObject.stanWeapon1);
  const [stanWeapon2, setStanWeapon2] = useState(defaultObject.stanWeapon2);
  const [stanWeapon3, setStanWeapon3] = useState(defaultObject.stanWeapon3);
  const [stanWeapon4, setStanWeapon4] = useState(defaultObject.stanWeapon4);
  const [stanWeapon5, setStanWeapon5] = useState(defaultObject.stanWeapon5);

  return (
    <div>
      <Context.Provider
        value={{
          weapon1,
          weapon2,
          weapon3,
          weapon4,
          weapon5,
          weapon1S,
          weapon2S,
          weapon3S,
          weapon4S,
          weapon5S,

          Portfel,
          setStanWeapon1,
          setStanWeapon2,
          setStanWeapon3,
          setStanWeapon4,
          setStanWeapon5,
          stanWeapon1,
          stanWeapon2,
          stanWeapon3,
          stanWeapon4,
          stanWeapon5,
          setPortfel,
        }}
      >
        <div className="countries">
          <Country1 />
          <Country2 />
          <Country3 />
        </div>
        <Wallet />
        {/* <Historia /> */}
      </Context.Provider>

      <div className="day">
        <button className="anotherday" onClick={handlerDay}>
          NEXT DAY ({Day + 1})
        </button>
      </div>
    </div>
  );
};

export default Main;
