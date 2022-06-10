import { useContext } from "react";

import { AppContext } from "./AppContext";

const Porrtfel = () => {
  const { stanAK, stanM16, stanMP5, stanUzi, stanDigle, Portfel } =
    useContext(AppContext);

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
          <div className="stan">{stanAK}</div>
        </div>
        <div className="stany">
          {" "}
          <div className="guni pic2 yel"></div>
          <div className="stan">{stanM16}</div>
        </div>
        <div className="stany">
          {" "}
          <div className="guni pic3 yel"></div>
          <div className="stan">{stanMP5}</div>
        </div>
        <div className="stany">
          {" "}
          <div className="guni pic4 yel"></div>
          <div className="stan">{stanUzi}</div>
        </div>
        <div className="stany">
          {" "}
          <div className="guni pic5 yel"></div>
          <div className="stan">{stanDigle}</div>
        </div>
      </div>
    </div>
  );
};

export default Porrtfel;
