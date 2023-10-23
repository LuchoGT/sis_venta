import { SearchIcon } from "@/assets/icon/SearchIcon";
import "./ButtonSearch.scss";
import {ChangeEvent} from 'react'

interface props{
  handleSearch:(e:ChangeEvent<HTMLInputElement>)=>void;
  searchQuery:string;
}


export const ButtonSearch = ({searchQuery,handleSearch}:props) => {

  
  return (
    <div className="button-search">
      <input
        type="text"
        placeholder="Buscar"
        value={searchQuery}
        className="button-search__input"
        onChange={handleSearch}
      />
      <SearchIcon  />
    </div>
  );
};
