import { useContext } from "react";

import { Context } from "../../Context";

const Country1 = (setPortfel, setStanWeapon1, setStanWeapon2) => {
  const {
    Portfel,
    stanWeapon1,
    stanWeapon2,
    weapon1,
    weapon2,
    weapon1S,
    weapon2S,
  } = useContext(Context);

  ///HANLDERY DO ZAKUPU/SPRZEDAŻY BRONI W DANYM KRAJU
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

  return (
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
  );
};
export default Country1;
