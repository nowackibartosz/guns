import "./Wallet.css";
import { useContext } from "react";

import { Context } from "../Context";

const Wallet = () => {
  const {
    Portfel,
    stanWeapon1,
    stanWeapon2,
    stanWeapon3,
    stanWeapon4,
    stanWeapon5,
  } = useContext(Context);

  return (
    <div className="aboutme">
      <div className="portfel">
        {" "}
        <p>
          CASH <strong>{Portfel}$</strong>{" "}
        </p>
      </div>

      <div className="wszystkiestany">
        <div className="stany">
          {" "}
          <div className="guni pic1 yel"></div>
          <div className="stan">{stanWeapon1}</div>
        </div>
        <div className="stany">
          {" "}
          <div className="guni pic2 yel"></div>
          <div className="stan">{stanWeapon2}</div>
        </div>
        <div className="stany">
          {" "}
          <div className="guni pic3 yel"></div>
          <div className="stan">{stanWeapon3}</div>
        </div>
        <div className="stany">
          {" "}
          <div className="guni pic4 yel"></div>
          <div className="stan">{stanWeapon4}</div>
        </div>
        <div className="stany">
          {" "}
          <div className="guni pic5 yel"></div>
          <div className="stan">{stanWeapon5}</div>
        </div>
      </div>
    </div>
  );
};
export default Wallet;
