import { useState } from "react";

import { AppContext, defaultObject } from "../AppContext";
import Wallet from "../Wallet";

const Game = () => {
  //CENY BRONI BUY//
  const [ak47, setAk47] = useState(100);
  const [m16, setM16] = useState(150);
  const [mp5, setMp5] = useState(80);
  const [uzi, setUzi] = useState(170);
  const [digle, setDigle] = useState(50);

  //CENY BRONI SELL//
  const [ak47S, setAk47S] = useState(800);
  const [m16S, setM16S] = useState(1540);
  const [mp5S, setMp5S] = useState(800);
  const [uziS, setUziS] = useState(1700);
  const [digleS, setDigleS] = useState(500);

  //DNI ZABAWY//
  const [Day, setDay] = useState(1);

  //HAJSSS/
  const [Portfel, setPortfel] = useState(defaultObject.Portfel);

  // ILOŚC W PORTFELU I PRZY SOBIE
  const [stanAK, setStanAK] = useState(defaultObject.stanAK);
  const [stanM16, setStanM16] = useState(defaultObject.stanM16);
  const [stanMP5, setStanMP5] = useState(defaultObject.stanMP5);
  const [stanUzi, setStanUzi] = useState(defaultObject.stanUzi);
  const [stanDigle, setStanDigle] = useState(defaultObject.stanDigle);

  //HISTORIA GRY///

  const hanlderDay = () => {
    setDay(Day + 1);
    setAk47((prevState) => Math.floor(Math.random() * 100 + 30));

    if (Day === 2) {
      alert("wybuchła wojna");
      setAk47((prevState) => 699);
    }
  };

  // ZAKUPY I SPRZEDAZ

  const handlerBuyAK = () => {
    setPortfel(Portfel - ak47);
    setStanAK(stanAK + 1);
  };
  const handlerSellAK = () => {
    setPortfel(Portfel + ak47S);
    setStanAK(stanAK - 1);
  };

  const handlerBuyM16 = () => {
    setPortfel(Portfel - m16);
    setStanM16(stanM16 + 1);
  };
  const handlerSellM16 = () => {
    setPortfel(Portfel + m16S);
    setStanM16(stanM16 - 1);
  };

  const handlerBuyMP5 = () => {
    setPortfel(Portfel - mp5);
    setStanMP5(stanMP5 + 1);
  };
  const handlerSellMP5 = () => {
    setPortfel(Portfel + mp5S);
    setStanMP5(stanMP5 - 1);
  };

  const handlerBuyUzi = () => {
    setPortfel(Portfel - uzi);
    setStanUzi(stanUzi + 1);
  };
  const handlerSellUzi = () => {
    setPortfel(Portfel + uziS);
    setStanUzi(stanUzi - 1);
  };

  const handlerBuyDigle = () => {
    setPortfel(Portfel - digle);
    setStanDigle(stanDigle + 1);
  };
  const handlerSellDigle = () => {
    setPortfel(Portfel + digleS);
    setStanDigle(stanDigle - 1);
  };

  // const toggleVisibilityCounter = () => setIsActive((prevValue) => !prevValue);

  return (
    <div className="App">
      <div className="kont">
        <div className="gunsBuy">
          <h3>KUP BROŃ</h3>
          <div className="gun">
            <p>Ak47: {ak47}$/each</p>
            <button
              disabled={Portfel < ak47 ? true : false}
              onClick={handlerBuyAK}
            >
              KUP
            </button>
          </div>
          <div className="gun">
            <p>m16: {m16}$/each</p>
            <button
              disabled={Portfel < m16 ? true : false}
              onClick={handlerBuyM16}
            >
              KUP
            </button>
          </div>
          <div className="gun">
            <p>MP5: {mp5}$/each</p>
            <button
              disabled={Portfel < ak47 ? true : false}
              onClick={handlerBuyMP5}
            >
              KUP
            </button>
          </div>
          <div className="gun">
            <p>Uzi: {uzi}$/each</p>
            <button
              disabled={Portfel < ak47 ? true : false}
              onClick={handlerBuyUzi}
            >
              KUP
            </button>
          </div>
          <div className="gun">
            <p>Digle: {digle}$/each</p>
            <button
              disabled={Portfel < digle ? true : false}
              onClick={handlerBuyDigle}
            >
              KUP
            </button>
          </div>
        </div>
        <div className="gunsSell">
          <h3>SPRZEDAJ BROŃ</h3>
          <div className="gun">
            <p>Ak47: {ak47S}$/each</p>
            <button
              disabled={stanAK < 1 ? true : false}
              onClick={handlerSellAK}
            >
              SPRZEDAJ
            </button>
          </div>
          <div className="gun">
            <p>m16: {m16S}$/each</p>
            <button
              disabled={stanM16 < 1 ? true : false}
              onClick={handlerSellM16}
            >
              SPRZEDAJ
            </button>
          </div>
          <div className="gun">
            <p>MP5: {mp5S}$/each</p>
            <button
              disabled={stanMP5 < 1 ? true : false}
              onClick={handlerSellMP5}
            >
              SPRZEDAJ
            </button>
          </div>
          <div className="gun">
            <p>Uzi: {uziS}$/each</p>
            <button
              disabled={stanUzi < 1 ? true : false}
              onClick={handlerSellUzi}
            >
              SPRZEDAJ
            </button>
          </div>
          <div className="gun">
            <p>Digle: {digleS}$/each</p>
            <button
              disabled={stanDigle < 1 ? true : false}
              onClick={handlerSellDigle}
            >
              SPRZEDAJ
            </button>
          </div>
        </div>
      </div>

      <AppContext.Provider
        value={{ Portfel, stanAK, stanM16, stanMP5, stanUzi, stanDigle }}
      >
        <Wallet />
      </AppContext.Provider>

      {/* <div className="portfel">
        <p>
          W portfelu <strong>{Portfel}$</strong>{" "}
        </p>

        <p>ilośc posiadanych ak47: {AK}</p>
        <p>ilośc posiadanych m16: {M16}</p>
        <p>ilośc posiadanych digli: {Digle}</p>
      </div> */}

      <div className="day">
        <p>DZIEŃ {Day} </p>

        <button onClick={hanlderDay}>KOLEJNY DZIEŃ</button>
      </div>
    </div>
  );
};

export default Game;
