interface props{
    tabName:string,
    selectedTab:string, 
    handleTabClick:(tabName:string)=>void;
}

export const ConfigMenu = ({ tabName, selectedTab, handleTabClick }:props) => {
  return (
    <li
      className={`config__element ${selectedTab === tabName ? "active" : ""}`}
      onClick={() => handleTabClick(tabName)}
    >
      {tabName}
    </li>
  );
};