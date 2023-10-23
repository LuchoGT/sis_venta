
interface props{
    tabName:string,
    selectedTab:string, 
    handleTabClick:(tabName:string)=>void;
}

export const ConfigMenu = ({ tabName, selectedTab, handleTabClick }:props) => {
  return (
    <li
      className={`config__element ${selectedTab === tabName ? "" : "config__disabled"}`}
      onClick={() => handleTabClick(tabName)}
    >
       {tabName}
      {selectedTab === tabName && <div className="config__indicator" />}
    </li>
  );
};
