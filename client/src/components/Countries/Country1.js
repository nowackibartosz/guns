import { useContext } from "react";
import { Context } from "../../Context";

const Country1 = () => {
  const {
    border1,
    setBorder1,

    onlyBuy,
    onlySell,
    setOnlyBuy,
    setOnlySell,

    setOnly2,
    setOnly3,
    only1,
    Portfel,
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
  } = useContext(Context);

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

  const handlerBuyMP5 = () => {
    setPortfel(Portfel - weapon3);
    setStanWeapon3(stanWeapon3 + 1);
  };
  const handlerSellMP5 = () => {
    setPortfel(Portfel + weapon3S);
    setStanWeapon3(stanWeapon3 - 1);
  };

  const handlerBuyUzi = () => {
    setPortfel(Portfel - weapon4);
    setStanWeapon4(stanWeapon4 + 1);
  };
  const handlerSellUzi = () => {
    setPortfel(Portfel + weapon4S);
    setStanWeapon4(stanWeapon4 - 1);
  };
  const handlerBuyDigle = () => {
    setPortfel(Portfel - weapon5);
    setStanWeapon5(stanWeapon5 + 1);
  };
  const handlerSellDigle = () => {
    setPortfel(Portfel + weapon5S);
    setStanWeapon5(stanWeapon5 - 1);
  };
  const klik = () => {
    setOnly2((prevState) => -1);
    setOnly3((prevState) => -1);
    setBorder1((prevState) => "5px solid yellow");
  };

  const klikBuy = () => {
    setOnlySell((prevState) => -1);
  };

  const klikSell = () => {
    setOnlyBuy((prevState) => -1);
  };

  return (
    <div className="cal">
      <div className="title">USA</div>
      <div
        className="country usa"
        style={{ zIndex: only1, border: border1 }}
        onClick={klik}
      >
        <div className="gunsBuy" onClick={klikBuy}>
          <div className="gun">
            <p>{weapon1}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon1 || onlyBuy < 1 ? true : false}
              onClick={handlerBuyAK}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon2}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon2 || onlyBuy < 1 ? true : false}
              onClick={handlerBuyM16}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon3}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon3 || onlyBuy < 1 ? true : false}
              onClick={handlerBuyMP5}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon4}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon4 || onlyBuy < 1 ? true : false}
              onClick={handlerBuyUzi}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon5}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon5 || onlyBuy < 1 ? true : false}
              onClick={handlerBuyDigle}
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
        <div
          className="gunsSell"
          onClick={klikSell}
          style={{ zIndex: onlySell }}
        >
          <div className="gun">
            <p>{weapon1S}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon1 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellAK}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon2S}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon2 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellM16}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon3S}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon3 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellMP5}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon4S}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon4 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellUzi}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon5S}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon5 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellDigle}
            >
              SELL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country1;
