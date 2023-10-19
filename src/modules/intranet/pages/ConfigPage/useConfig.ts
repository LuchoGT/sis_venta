import { useState } from "react"

export const useConfig = () => {

    const [isOpenList, setIsOpenList] = useState<boolean>(true);

    const toogleOpenList=()=>{
      setIsOpenList(!isOpenList);
    }
   
  return {
    isOpenList,
    toogleOpenList
  }
}
