import { useState } from "react";

export const usePopup = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);

  const tooglePopUp = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };

  return {
    isOpenPopUp,
    tooglePopUp,
  };
};
