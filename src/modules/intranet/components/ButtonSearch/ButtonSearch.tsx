import { SearchIcon } from "@/assets/icon/SearchIcon";
import "./ButtonSearch.scss";

export const ButtonSearch = () => {
  return (
    <div className="button-search">
      <input
        type="text"
        placeholder="Buscar"
        className="button-search__input"
      />
      <SearchIcon />
    </div>
  );
};
