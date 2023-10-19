import "./PopupAdd.scss";
import { FormPruebas } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { PopUpTitle } from "../../components/PopUpTitle/PopUpTitle";
import { Content } from "./Content";

interface props {
  onClose: () => void;
  viewingIndex: number | null;
  data: FormPruebas[];
  title: string;
  assignItem: (index: number, cursos: FormPruebas["cursos"]) => void; // Nueva prop para asignar un país
}

export const PopUp = ({
  onClose,
  viewingIndex,
  data,
  title,
  assignItem,
}: props) => {
  return (
    <div className="popUp-add">
      <div className="popUp-add__container">
        <PopUpTitle title={title} />
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
  );
};
