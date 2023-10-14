import { UserAddIcon } from "@/assets/icon/UserAddIcon";
import "./ButtonAdd.scss";

interface props {
  toggleOpenView: () => void;
  title:string,
}

export const ButtonAdd = ({ title,toggleOpenView }: props) => {
  return (
    <div className="button-add" onClick={toggleOpenView} >
      <UserAddIcon />
      <span>{title}</span>
    </div>
  );
};
