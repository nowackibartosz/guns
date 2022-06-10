import { createContext } from "react";

export const defaultObject = {
  // ak47: 100,
  // m16: 150,
  // mp5: 80,
  // uzi: 70,
  // digle: 50,
  // ak47S: 80,
  // m16S: 100,
  // mp5S: 70,
  // uziS: 40,
  // digleS: 30,
  stanAK: 0,
  stanM16: 0,
  stanMP5: 0,
  stanUzi: 0,
  stanDigle: 0,
  Portfel: 1000,
};

export const AppContext = createContext(defaultObject);
