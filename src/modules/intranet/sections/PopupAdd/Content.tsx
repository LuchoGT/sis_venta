import { FormPruebas } from "@/interfaces/interfaces";
import React, { useEffect } from "react";
import {useState} from 'react';
import { useForm } from "react-hook-form";

interface props {
  onClose: () => void;
  viewingIndex: number | null;
  data: FormPruebas[];
}

interface probando{
    cursos:string;
    grado:string;
}

export const Content = ({ onClose, data, viewingIndex }: props) => {
  const { register, setValue } = useForm<FormPruebas>();

  useEffect(() => {
    if (viewingIndex !== null) {
      const itemToView = data[viewingIndex];
      setValue("nombres", itemToView.nombres + " " + itemToView.apellidos);
    }
  }, [viewingIndex, data]);

  const [probando, setProbando] = useState<probando[]>(()=>{
    const savedDataF = localStorage.getItem('asignar');
    return savedDataF ? JSON.parse(savedDataF) : [];
  });

  const pro = (efe: probando) => {
    const newP = [...probando, efe];
    setProbando(newP);
    localStorage.setItem('asignar', JSON.stringify(newP));
    console.log('probando asignar');
    
  };

  useEffect(() => {
    const savedData = localStorage.getItem('asignar');
    if (savedData) {
      setProbando(JSON.parse(savedData));
    }
  }, []);

  return (
    <form className="popUp-add__form">
      <div className="popUp-add__content">
        <label>Docente</label>
        <input
          type="text"
          className="popUp-add__input"
          disabled={viewingIndex !== null}
          {...register("nombres", { required: true })}
        />
      </div>
      <div className="popUp-add__content">
        <div>
          <span>Curso</span>
          <select {...register('cursos')}>
            <option value="">---</option>
            <option value="mat">Matematica</option>
            <option value="len">Lenguaje</option>
            <option value="fis">Fisica</option>
          </select>
        </div>
        <div>
          <span>Grado/Sección/Nivel/Turno</span>
          <select {...register('grado')}>
            <option value="">---</option>
            <option value="ta">3° - A - Primaria - Mañana</option>
            <option value="tb">3° - B - Primaria - Mañana</option>
            <option value="tc">3° - C - Primaria - Mañana</option>
          </select>
        </div>
        <div onClick={()=>pro}>Agregar</div>
        <div className="teacher-add__courses">
          <ul className="teacher-add__list">
            {/* <li className="teacher-add__item">Biologia - 3 -B</li>
            <li className="teacher-add__item">Biologia - 3 -B</li>
            <li className="teacher-add__item">Biologia - 3 -B</li>
            <li className="teacher-add__item">Biologia - 3 -B</li> */}
            {
                probando.map((item,index)=>(
                    <li className="teacher-add__item" key={index}>
                        {item.cursos}-{item.grado}
                    </li>
                ))
            }
          </ul>
        </div>
      </div>
      <div className="popUp-add__buttons">
        <button
          className="popUp-add__button popUp-add__button--cancel"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button type="submit" className="popUp-add__button">
          Agregar
        </button>
      </div>
    </form>
  );
};
