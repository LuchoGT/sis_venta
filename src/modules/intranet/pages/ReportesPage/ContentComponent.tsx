import { CursosContent } from "./CursosContent";
import { SalonesContent } from "./SalonesContent";

interface props{
    selectedTab:string;
}

export const ContentComponent = ({selectedTab}:props) => {
    let content = null;

    if (selectedTab === 'Cursos') {
      content = <CursosContent />;
    } else if (selectedTab === 'Salones') {
      content = <SalonesContent />;
    }
  
    return (
      <div>
        {content}
      </div>
    );
}
