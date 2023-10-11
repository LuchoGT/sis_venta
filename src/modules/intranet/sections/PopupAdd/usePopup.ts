import { useState } from "react";

export const usePopup = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);

  const openPopUp = ()=>setIsOpenPopUp(true);
  const closePopUp = ()=>setIsOpenPopUp(false);

  return{
    isOpenPopUp,
    openPopUp,
    closePopUp,
  }
}
