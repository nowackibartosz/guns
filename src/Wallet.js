import { useContext } from "react";

import { AppContext } from "./AppContext";

const Porrtfel = () => {
  const { stanAK, stanM16, stanMP5, stanUzi, stanDigle, Portfel } =
    useContext(AppContext);

  return (
    <div className="portfel">
      <p>
        W portfelu <strong>{Portfel}$</strong>{" "}
      </p>

      <p>ilośc posiadanych ak47: {stanAK}</p>
      <p>ilośc posiadanych m16: {stanM16}</p>
      <p>ilośc posiadanych MP5: {stanMP5}</p>
      <p>ilośc posiadanych Uzi: {stanUzi}</p>
      <p>ilośc posiadanych digli: {stanDigle}</p>
    </div>
  );
};

export default Porrtfel;
