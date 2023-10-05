import { useState } from "react"

export const useConfig = () => {

    const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(true);

    const closePopUp=()=>setIsPopUpOpen(false);
    const openPopUp=()=>setIsPopUpOpen(true);
  return {
    isPopUpOpen,
    openPopUp,
    closePopUp,
  }
}
