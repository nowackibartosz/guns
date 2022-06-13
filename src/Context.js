import { createContext } from "react";

export const defaultObject = {
  stanWeapon1: 0,
  stanWeapon2: 0,

  Portfel: 1000,
};

export const Context = createContext(defaultObject);
