import { useState } from "react";
import "./Game.css";
import { Context, defaultObject } from "../../Context";
import Wallet from "../../components/Wallet";
import Historia from "../../components/Historia";
import Country1 from "../../components/Country1";

const Game = () => {
  // //HAJSSS/
  const [Portfel, setPortfel] = useState(defaultObject.Portfel);

  // // ILOŚC W PORTFELU I PRZY SOBIE
  const [stanWeapon1, setStanWeapon1] = useState(defaultObject.stanWeapon1);
  const [stanWeapon2, setStanWeapon2] = useState(defaultObject.stanWeapon2);

  return (
    <div className="App">
      <Context.Provider
        value={{
          Portfel,
          stanWeapon1,
          stanWeapon2,
          setStanWeapon1,
          setStanWeapon2,
          setPortfel,
        }}
      >
        <Country1 />
        <Wallet />
        <Historia />
      </Context.Provider>
    </div>
  );
};

export default Game;
