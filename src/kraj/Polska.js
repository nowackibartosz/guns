import { useState } from "react";

const Polska = () => {
  const [ak47polska, setAk47polska] = useState(100);
  const [m16polska, setM16polska] = useState(150);
  const [mp5polska, setMp5polska] = useState(80);
  const [uzipolska, setUzipolska] = useState(170);
  const [diglepolska, setDiglepolska] = useState(50);

  //CENY BRONI SELL//
  const [ak47Spolska, setAk47Spolska] = useState(800);
  const [m16Spolska, setM16Spolska] = useState(1540);
  const [mp5Spolska, setMp5Spolska] = useState(800);
  const [uziSpolska, setUziSpolska] = useState(1700);
  const [digleSpolska, setDigleSpolska] = useState(500);

  const handlerBuyAKpolska = () => {
    setPortfel(Portfel - ak47polska);
    setStanAK(stanAK + 1);
  };
  const handlerSellAKpolska = () => {
    setPortfel(Portfel + ak47Spolska);
    setStanAK(stanAK - 1);
  };

  const handlerBuyM16polska = () => {
    setPortfel(Portfel - m16polska);
    setStanM16(stanM16 + 1);
  };
  const handlerSellM16polska = () => {
    setPortfel(Portfel + m16Spolska);
    setStanM16(stanM16 - 1);
  };

  const handlerBuyMP5polska = () => {
    setPortfel(Portfel - mp5polska);
    setStanMP5(stanMP5 + 1);
  };
  const handlerSellMP5polska = () => {
    setPortfel(Portfel + mp5Spolska);
    setStanMP5(stanMP5 - 1);
  };

  const handlerBuyUzipolska = () => {
    setPortfel(Portfel - uzipolska);
    setStanUzi(stanUzi + 1);
  };
  const handlerSellUzipolska = () => {
    setPortfel(Portfel + uziSpolska);
    setStanUzi(stanUzi - 1);
  };

  const handlerBuyDiglepolska = () => {
    setPortfel(Portfel - diglepolska);
    setStanDigle(stanDigle + 1);
  };
  const handlerSellDiglepolska = () => {
    setPortfel(Portfel + digleSpolska);
    setStanDigle(stanDigle - 1);
  };

  return (
    <div>
      <div className="kont">
        <div className="gunsBuy">
          <h3>KUP BROŃ</h3>
          <div className="gun">
            <p>Ak47: {ak47polska}$/each</p>
            <button
              disabled={Portfel < ak47polska ? true : false}
              onClick={handlerBuyAKpolska}
            >
              KUP
            </button>
          </div>
          <div className="gun">
            <p>m16: {m16polska}$/each</p>
            <button
              disabled={Portfel < m16polska ? true : false}
              onClick={handlerBuyM16polska}
            >
              KUP
            </button>
          </div>
          <div className="gun">
            <p>MP5: {mp5polska}$/each</p>
            <button
              disabled={Portfel < ak47polska ? true : false}
              onClick={handlerBuyMP5polska}
            >
              KUP
            </button>
          </div>
          <div className="gun">
            <p>Uzi: {uzipolska}$/each</p>
            <button
              disabled={Portfel < ak47polska ? true : false}
              onClick={handlerBuyUzipolska}
            >
              KUP
            </button>
          </div>
          <div className="gun">
            <p>Digle: {diglepolska}$/each</p>
            <button
              disabled={Portfel < diglepolska ? true : false}
              onClick={handlerBuyDiglepolska}
            >
              KUP
            </button>
          </div>
        </div>
        <div className="gunsSell">
          <h3>SPRZEDAJ BROŃ</h3>
          <div className="gun">
            <p>Ak47: {ak47Spolska}$/each</p>
            <button
              disabled={stanAK < 1 ? true : false}
              onClick={handlerSellAKpolska}
            >
              SPRZEDAJ
            </button>
          </div>
          <div className="gun">
            <p>m16: {m16Spolska}$/each</p>
            <button
              disabled={stanM16 < 1 ? true : false}
              onClick={handlerSellM16polska}
            >
              SPRZEDAJ
            </button>
          </div>
          <div className="gun">
            <p>MP5: {mp5Spolska}$/each</p>
            <button
              disabled={stanMP5 < 1 ? true : false}
              onClick={handlerSellMP5polska}
            >
              SPRZEDAJ
            </button>
          </div>
          <div className="gun">
            <p>Uzi: {uziSpolska}$/each</p>
            <button
              disabled={stanUzi < 1 ? true : false}
              onClick={handlerSellUzipolska}
            >
              SPRZEDAJ
            </button>
          </div>
          <div className="gun">
            <p>Digle: {digleSpolska}$/each</p>
            <button
              disabled={stanDigle < 1 ? true : false}
              onClick={handlerSellDiglepolska}
            >
              SPRZEDAJ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Polska;
