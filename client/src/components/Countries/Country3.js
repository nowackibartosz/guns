import { useContext } from "react";
import { Context } from "../../Context";

const Country3 = () => {
  const {
    border3,
    setBorder3,
    onlyBuy,
    onlySell,
    setOnlyBuy,
    setOnlySell,
    Portfel,
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
    setOnly1,
    setOnly2,

    only3,
  } = useContext(Context);

  const handlerBuyAK = () => {
    setPortfel(Portfel - weapon1C);
    setStanWeapon1(stanWeapon1 + 1);
  };
  const handlerSellAK = () => {
    setPortfel(Portfel + weapon1SC);
    setStanWeapon1(stanWeapon1 - 1);
  };
  const handlerBuyM16 = () => {
    setPortfel(Portfel - weapon2C);
    setStanWeapon2(stanWeapon2 + 1);
  };
  const handlerSellM16 = () => {
    setPortfel(Portfel + weapon2SC);
    setStanWeapon2(stanWeapon2 - 1);
  };

  const handlerBuyMP5 = () => {
    setPortfel(Portfel - weapon3C);
    setStanWeapon3(stanWeapon3 + 1);
  };
  const handlerSellMP5 = () => {
    setPortfel(Portfel + weapon3SC);
    setStanWeapon3(stanWeapon3 - 1);
  };

  const handlerBuyUzi = () => {
    setPortfel(Portfel - weapon4C);
    setStanWeapon4(stanWeapon4 + 1);
  };
  const handlerSellUzi = () => {
    setPortfel(Portfel + weapon4SC);
    setStanWeapon4(stanWeapon4 - 1);
  };
  const handlerBuyDigle = () => {
    setPortfel(Portfel - weapon5C);
    setStanWeapon5(stanWeapon5 + 1);
  };
  const handlerSellDigle = () => {
    setPortfel(Portfel + weapon5SC);
    setStanWeapon5(stanWeapon5 - 1);
  };

  const klik = () => {
    setOnly1((prevState) => -1);
    setOnly2((prevState) => -1);
    setBorder3((prevState) => "5px solid yellow");
  };

  const klikBuy = () => {
    setOnlySell((prevState) => -1);
  };

  const klikSell = () => {
    setOnlyBuy((prevState) => -1);
  };

  return (
    <div className="cal">
      <div className="title">Chiny</div>
      <div
        className="country chi"
        style={{ zIndex: only3, border: border3 }}
        onClick={klik}
      >
        <div className="gunsBuy" onClick={klikBuy}>
          <div className="gun">
            <p>{weapon1C}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon1C || onlyBuy < 1 ? true : false}
              onClick={handlerBuyAK}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon2C}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon2C || onlyBuy < 1 ? true : false}
              onClick={handlerBuyM16}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon3C}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon3C || onlyBuy < 1 ? true : false}
              onClick={handlerBuyMP5}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon4C}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon4C || onlyBuy < 1 ? true : false}
              onClick={handlerBuyUzi}
            >
              BUY
            </button>
          </div>
          <div className="gun">
            <p>{weapon5C}$/each</p>
            <button
              className="buttongun"
              disabled={Portfel < weapon5C || onlyBuy < 1 ? true : false}
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
            <p>{weapon1SC}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon1 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellAK}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon2SC}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon2 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellM16}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon3SC}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon3 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellMP5}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon4SC}$/each</p>
            <button
              className="buttongun"
              disabled={stanWeapon4 < 1 || onlySell < 1 ? true : false}
              onClick={handlerSellUzi}
            >
              SELL
            </button>
          </div>
          <div className="gun">
            <p>{weapon5SC}$/each</p>
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

export default Country3;
