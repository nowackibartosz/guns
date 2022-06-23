import { useContext } from "react";
import { Context } from "../../Context";

const Country2 = () => {
  const {
    border2,
    setBorder2,

    onlyBuy,
    onlySell,
    setOnlyBuy,
    setOnlySell,
    setOnly1,

    setOnly3,
    only2,
    Portfel,
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
    setPortfel(Portfel - weapon1R);
    setStanWeapon1(stanWeapon1 + 1);
  };
  const handlerSellAK = () => {
    setPortfel(Portfel + weapon1SR);
    setStanWeapon1(stanWeapon1 - 1);
  };
  const handlerBuyM16 = () => {
    setPortfel(Portfel - weapon2R);
    setStanWeapon2(stanWeapon2 + 1);
  };
  const handlerSellM16 = () => {
    setPortfel(Portfel + weapon2SR);
    setStanWeapon2(stanWeapon2 - 1);
  };

  const handlerBuyMP5 = () => {
    setPortfel(Portfel - weapon3R);
    setStanWeapon3(stanWeapon3 + 1);
  };
  const handlerSellMP5 = () => {
    setPortfel(Portfel + weapon3SR);
    setStanWeapon3(stanWeapon3 - 1);
  };

  const handlerBuyUzi = () => {
    setPortfel(Portfel - weapon4R);
    setStanWeapon4(stanWeapon4 + 1);
  };
  const handlerSellUzi = () => {
    setPortfel(Portfel + weapon4SR);
    setStanWeapon4(stanWeapon4 - 1);
  };
  const handlerBuyDigle = () => {
    setPortfel(Portfel - weapon5R);
    setStanWeapon5(stanWeapon5 + 1);
  };
  const handlerSellDigle = () => {
    setPortfel(Portfel + weapon5SR);
    setStanWeapon5(stanWeapon5 - 1);
  };

  const klik = () => {
    setOnly1((prevState) => -1);
    setOnly3((prevState) => -1);
    setBorder2((prevState) => "5px solid yellow");
  };
  const klikBuy = () => {
    setOnlySell((prevState) => -1);
  };

  const klikSell = () => {
    setOnlyBuy((prevState) => -1);
  };

  return (
    <div className="cal">
      <div className="title">Rosja</div>
      <div
        className="country rus"
        style={{ zIndex: only2, border: border2 }}
        onClick={klik}
      >
        <div className="gunsBuy" onClick={klikBuy}>
          <div className="gun">
            <p>{weapon1R}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon1R || onlyBuy < 1 ? true : false}
              onClick={handlerBuyAK}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon2R}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon2R || onlyBuy < 1 ? true : false}
              onClick={handlerBuyM16}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon3R}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon3R || onlyBuy < 1 ? true : false}
              onClick={handlerBuyMP5}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon4R}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon4R || onlyBuy < 1 ? true : false}
              onClick={handlerBuyUzi}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon5R}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon5R || onlyBuy < 1 ? true : false}
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
        <div className="gunsSell" onClick={klikSell}>
          <div className="gun">
            <p>{weapon1SR}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon1 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellAK}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon2SR}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon2 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellM16}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon3SR}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon3 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellMP5}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon4SR}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon4 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellUzi}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon5SR}$/each</p>
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

export default Country2;
