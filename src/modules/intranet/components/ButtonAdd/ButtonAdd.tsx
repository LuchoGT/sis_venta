import { UserAddIcon } from "@/assets/icon/UserAddIcon";
import "./ButtonAdd.scss";

interface props {
  toggleOpen: () => void;
  title:string,
}

export const ButtonAdd = ({ title,toggleOpen }: props) => {
  return (
    <div className="button-add" onClick={toggleOpen} >
      <UserAddIcon />
      <span>{title}</span>
    </div>
  );
};
