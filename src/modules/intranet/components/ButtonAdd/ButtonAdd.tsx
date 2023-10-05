import { UserAddIcon } from "@/assets/icon/UserAddIcon";
import "./ButtonAdd.scss";

interface props {
  openView: () => void;
  title:string,
}

export const ButtonAdd = ({ title,openView }: props) => {
  return (
    <div className="button-add" onClick={openView} >
      <UserAddIcon />
      <span>{title}</span>
    </div>
  );
};
