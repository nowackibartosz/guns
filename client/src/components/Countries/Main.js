import { Context, defaultObject } from "../../Context";
import "./Main.css";
import Wallet from "../Wallet";

import Country1 from "./Country1";
import Country2 from "./Country2";
import Country3 from "./Country3";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  //USA
  //CENY BRONI DO KUPIENIA//
  const [weapon1, setWeapon1] = useState(200);
  const [weapon2, setWeapon2] = useState(220);
  const [weapon3, setWeapon3] = useState(170);
  const [weapon4, setWeapon4] = useState(163);
  const [weapon5, setWeapon5] = useState(105);
  //CENY BRONI DO SPRZEDAŻY//
  const [weapon1S, setWeapon1S] = useState(200);
  const [weapon2S, setWeapon2S] = useState(210);
  const [weapon3S, setWeapon3S] = useState(130);
  const [weapon4S, setWeapon4S] = useState(140);
  const [weapon5S, setWeapon5S] = useState(100);

  //ROSJA
  //CENY BRONI DO KUPIENIA//
  const [weapon1R, setWeapon1R] = useState(205);
  const [weapon2R, setWeapon2R] = useState(210);
  const [weapon3R, setWeapon3R] = useState(168);
  const [weapon4R, setWeapon4R] = useState(140);
  const [weapon5R, setWeapon5R] = useState(120);

  //CENY BRONI DO SPRZEDAŻY//
  const [weapon1SR, setWeapon1SR] = useState(220);
  const [weapon2SR, setWeapon2SR] = useState(230);
  const [weapon3SR, setWeapon3SR] = useState(190);
  const [weapon4SR, setWeapon4SR] = useState(180);
  const [weapon5SR, setWeapon5SR] = useState(101);

  //CHINY
  //CENY BRONI DO KUPIENIA//
  const [weapon1C, setWeapon1C] = useState(222);
  const [weapon2C, setWeapon2C] = useState(180);
  const [weapon3C, setWeapon3C] = useState(120);
  const [weapon4C, setWeapon4C] = useState(199);
  const [weapon5C, setWeapon5C] = useState(105);

  //CENY BRONI DO SPRZEDAŻY//
  const [weapon1SC, setWeapon1SC] = useState(150);
  const [weapon2SC, setWeapon2SC] = useState(230);
  const [weapon3SC, setWeapon3SC] = useState(180);
  const [weapon4SC, setWeapon4SC] = useState(191);
  const [weapon5SC, setWeapon5SC] = useState(160);

  //TYLKO JEDNO PANSTWO//

  const [only1, setOnly1] = useState(5);
  const [only2, setOnly2] = useState(5);
  const [only3, setOnly3] = useState(5);

  const [border1, setBorder1] = useState("5px solid black");
  const [border2, setBorder2] = useState("5px solid black");
  const [border3, setBorder3] = useState("5px solid black");
  //TYLKO SPRZEDAŻ/KUPNO
  const [onlyBuy, setOnlyBuy] = useState(1);
  const [onlySell, setOnlySell] = useState(1);

  //DNI ZABAWY//
  const [Day, setDay] = useState(defaultObject.Day);

  //HISTORIA GRY.  GRA BĘDZIE MIEĆ 10 DNI.

  const handlerDay = () => {
    setDay(Day + 1);

    //USA
    setWeapon1((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon2((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon3((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon4((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon5((prevState) => Math.floor(Math.random() * 100 + 100));

    setWeapon1S((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon2S((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon3S((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon4S((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon5S((prevState) => Math.floor(Math.random() * 100 + 100));

    //RUS
    setWeapon1R((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon2R((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon3R((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon4R((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon5R((prevState) => Math.floor(Math.random() * 100 + 100));

    setWeapon1SR((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon2SR((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon3SR((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon4SR((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon5SR((prevState) => Math.floor(Math.random() * 100 + 100));

    //CHINY
    setWeapon1C((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon2C((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon3C((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon4C((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon5C((prevState) => Math.floor(Math.random() * 100 + 100));

    setWeapon1SC((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon2SC((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon3SC((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon4SC((prevState) => Math.floor(Math.random() * 100 + 100));
    setWeapon5SC((prevState) => Math.floor(Math.random() * 100 + 100));

    setOnly1((prevState) => 1);
    setOnly2((prevState) => 1);
    setOnly3((prevState) => 1);
    setOnlyBuy((prevState) => 1);
    setOnlySell((prevState) => 1);
    setBorder1((prevState) => "5px solid black");
    setBorder2((prevState) => "5px solid black");
    setBorder3((prevState) => "5px solid black");

    if (Day === 2) {
      alert("Rosyjscy żołnierze okradli skład broni");
      setWeapon1R((prevState) => 80);
      setWeapon5R((prevState) => 50);
      setWeapon1S((prevState) => 400);
      setWeapon2S((prevState) => 500);
    }

    if (Day === 5) {
      alert(
        "Amerykańscy gangsterzy zauważyli iż broń krótka jest krótsza niż broń długa. Ameryke ogarnia szał zakupowy"
      );
      setWeapon1((prevState) => 89);
      setWeapon2((prevState) => 100);
      setWeapon3((prevState) => 290);
      setWeapon4((prevState) => 300);
      setWeapon5((prevState) => 250);

      setWeapon3S((prevState) => 290);
      setWeapon4S((prevState) => 380);
      setWeapon5S((prevState) => 310);
    }

    if (Day === 6) {
      alert(
        "Prezydent USA wyzwał premiera Republiki Chińskiej na słynną bitwe na kciuki. Niepokój narasta."
      );
    }
    if (Day === 7) {
      alert("Stało się. WOJNA pomiędzy Chinami a USA.");

      //USA
      setWeapon1((prevState) => 999);
      setWeapon2((prevState) => 999);
      setWeapon3((prevState) => 999);
      setWeapon4((prevState) => 999);
      setWeapon5((prevState) => 999);

      setWeapon1S((prevState) => 350);
      setWeapon2S((prevState) => 420);

      //RUS
      setWeapon1R((prevState) => 250);

      //CHINY
      setWeapon1C((prevState) => 999);
      setWeapon2C((prevState) => 999);
      setWeapon3C((prevState) => 999);
      setWeapon4C((prevState) => 999);
      setWeapon5C((prevState) => 999);

      setWeapon1SC((prevState) => 99);
      setWeapon2SC((prevState) => 99);
      setWeapon3SC((prevState) => 99);
      setWeapon4SC((prevState) => 99);
      setWeapon5SC((prevState) => 99);
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
          border1,
          setBorder1,
          border2,
          setBorder2,
          border3,
          setBorder3,
          onlyBuy,
          onlySell,
          setOnlyBuy,
          setOnlySell,
          setOnly1,
          setOnly2,
          setOnly3,
          only1,
          only2,
          only3,
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

          weapon1R,
          weapon2R,
          weapon3R,
          weapon4R,
          weapon5R,
          weapon1SR,
          weapon2SR,
          weapon3SR,
          weapon4SR,
          weapon5SR,

          weapon1C,
          weapon2C,
          weapon3C,
          weapon4C,
          weapon5C,
          weapon1SC,
          weapon2SC,
          weapon3SC,
          weapon4SC,
          weapon5SC,

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
      </Context.Provider>

      <div className="day">
        <button className="anotherday" onClick={handlerDay}>
          {Day === 10 ? "Zakończ gre" : "NEXT DAY"} ({Day})
        </button>
      </div>
    </div>
  );
};

export default Main;
