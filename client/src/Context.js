import { createContext } from "react";

export const defaultObject = {
  stanWeapon1: 0,
  stanWeapon2: 0,
  stanWeapon3: 0,
  stanWeapon4: 0,
  stanWeapon5: 0,
  Day: 1,
  Portfel: 800,
};

export const Context = createContext(defaultObject);
