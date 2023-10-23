import { useState } from "react"

export const useConfig = () => {

  const [selectedTab, setSelectedTab] = useState('Cursos');

  const handleTabClick = (tabName:string) => {
    setSelectedTab(tabName);
  };
   
  return {
    selectedTab,
    handleTabClick
  }
}
