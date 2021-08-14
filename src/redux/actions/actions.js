import { DATGHE, HUYGHE } from "../types/types";



export const datGheAction = (ghe) => {
  return {
    type: "DATGHE",
    ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUYGHE,
    soGhe,
  };
};
