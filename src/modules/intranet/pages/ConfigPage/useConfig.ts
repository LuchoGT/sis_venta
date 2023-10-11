import { useState } from "react"

export const useConfig = () => {

    const [isOpenList, setIsOpenList] = useState<boolean>(true);

    const closeListConfig=()=>setIsOpenList(false);
    const openListConfig=()=>setIsOpenList(true);
  return {
    isOpenList,
    openListConfig,
    closeListConfig,
  }
}
