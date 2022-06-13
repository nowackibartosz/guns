import { useState } from "react";
import "./Game.css";
import { Context, defaultObject } from "../../Context";
import Wallet from "../../components/Wallet";

const Game = () => {
  //CENY BRONI DO KUPIENIA//
  const [weapon1, setWeapon1] = useState(100);
  const [weapon2, setWeapon2] = useState(150);

  //CENY BRONI DO SPRZEDAŻY//
  const [weapon1S, setWeapon1S] = useState(800);
  const [weapon2S, setWeapon2S] = useState(440);

  //DNI ZABAWY//
  const [Day, setDay] = useState(1);

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
  // // //HANLDERY
  const handlerBuyAK = () => {
    setPortfel(Portfel - weapon1);
    setStanWeapon1(stanWeapon1 + 1);
  };
  const handlerSellAK = () => {
    setPortfel(Portfel + weapon1S);
    setStanWeapon1(stanWeapon1 - 1);
  };
  const handlerBuyM16 = () => {
    setPortfel(Portfel - weapon2);
    setStanWeapon2(stanWeapon2 + 1);
  };
  const handlerSellM16 = () => {
    setPortfel(Portfel + weapon2S);
    setStanWeapon2(stanWeapon2 - 1);
  };

  // //HAJSSS/
  const [Portfel, setPortfel] = useState(defaultObject.Portfel);

  // // ILOŚC W PORTFELU I PRZY SOBIE
  const [stanWeapon1, setStanWeapon1] = useState(defaultObject.stanWeapon1);
  const [stanWeapon2, setStanWeapon2] = useState(defaultObject.stanWeapon2);

  return (
    <div className="App">
      <div className="countries">
        <div className="country usa">
          <div className="gunsBuy">
            <div className="gun">
              <p>{weapon1}$/each</p>
              <button
                className="buttongun"
                disabled={Portfel < weapon1 ? true : false}
                onClick={handlerBuyAK}
              >
                BUY
              </button>
            </div>
            <div className="gun">
              <p>{weapon2}$/each</p>
              <button
                className="buttongun"
                disabled={Portfel < weapon2 ? true : false}
                onClick={handlerBuyM16}
              >
                BUY
              </button>
            </div>
          </div>
          <div className="gunsPic">
            <div className="guni pic1"></div>
            <div className="guni pic2"></div>
            <div className="guni pic3"></div>
            <div className="guni pic4"></div>
            <div className="guni pic5"></div>
          </div>
          <div className="gunsSell">
            <div className="gun">
              <p>{weapon1S}$/each</p>
              <button
                className="buttongun"
                disabled={stanWeapon1 < 1 ? true : false}
                onClick={handlerSellAK}
              >
                SELL
              </button>
            </div>
            <div className="gun">
              <p>{weapon2S}$/each</p>
              <button
                className="buttongun"
                disabled={stanWeapon2 < 1 ? true : false}
                onClick={handlerSellM16}
              >
                SELL
              </button>
            </div>
          </div>
        </div>
      </div>

      <Context.Provider value={{ Portfel, stanWeapon1, stanWeapon2 }}>
        <Wallet />
      </Context.Provider>

      <div className="day">
        <p>DZIEŃ {Day} </p>

        <button onClick={handlerDay}>KOLEJNY DZIEŃ</button>
      </div>
    </div>
  );
};

export default Game;
