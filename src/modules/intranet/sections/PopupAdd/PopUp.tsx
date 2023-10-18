import { useForm } from "react-hook-form";
import "./PopupAdd.scss";
import { FormPruebas } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { PopUpTitle } from "../../components/PopUpTitle/PopUpTitle";
import { Content } from "./Content";


interface props {
    onClose: () => void;
     viewingIndex: number | null;
     data: FormPruebas[];
    title:string;
  assignItem: (index: number, countries: string) => void; // Nueva prop para asignar un país
  }

export const PopUp = ({onClose,viewingIndex,data,title,assignItem}:props) => {

 



  return (
    <div className='popUp-add'>
        <div className="popUp-add__container">
          {/* <div className="popUp-add__head">
            <p className="popUp-add__title">Asignación de curso</p>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
            </svg>
          </div> */}
          <PopUpTitle title={title}/>
          <Content 
            onClose={onClose}
            data={data}
            viewingIndex={viewingIndex}
            onAssign={(index, cursos) => {
              assignItem(index, cursos); // Llama a la función para asignar el país
            }}
            />
        </div>
    </div>
  )
}
