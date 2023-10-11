import "./Table.scss";
import { useTable } from "./useTable";
import { MenuAction } from "../MenuAction/MenuAction";
import { useState,useEffect } from 'react'
// import { Probando } from "../TeacherAddContent/Probando";
import { Form2 } from "../../sections/Form/Form2";


export const Table = () => {
  const { header, teachers,options,openCard,closeCard,showCard} = useTable();

  // const options = [
  //   { title: 'Detalle', ct: 'Contenido de la Opción 1' },
  //   { title: 'Editar', ct: 'Contenido de la Opción 2' },
  //   { title: 'Asignar curso', ct: 'Contenido de la Opción 3' },
  //   { title: 'Deshabilitar', ct: 'Contenido de la Opción 3' },
  // ];

  // const [showCard, setShowCard] = useState<boolean[]>([false, false, false]);

  // const openCard = (index: number) => {
  //   const updatedShowCard = [...showCard];
  //   updatedShowCard[index] = true;
  //   setShowCard(updatedShowCard);
  // };

  // const closeCard = (index: number) => {
  //   const updatedShowCard = [...showCard];
  //   updatedShowCard[index] = false;
  //   setShowCard(updatedShowCard);
  // };
  const [data, setData] = useState([]);
  // const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    // Obtener los datos de localStorage al cargar la página
    const storedData = JSON.parse(localStorage.getItem('formData') || '[]');
    setData(storedData);
  }, []);

  return (
    <>
      <div className="table">
        <div className="table__headers">
          {header.map((item, index) => (
            <div key={index}>{item.text}</div>
          ))}
        </div>
        <div className="table__items">
          {data.map((item, index) => (
            <div key={index} className="table__item">
              <div>{index + 1}</div>
              <div>{item.nombres + " " + item.apellidos}</div>
              <div></div>
              {/* <div>{item.estado}</div> */}
              <MenuAction 
                options={options}
                openCard={openCard}/>
            </div>
          ))}
        </div>
      </div>
      {
        options.map((option,index)=>(
          <div key={index} className="queseso">
            {
              showCard[index] && (
                <Form2
                  title={option.title}
                  ct={option.ct}
                  sub={option.sub}
                  onClose={() => closeCard(index)}
                />
              )
            }
          </div>
        ))
      }
    </>
  );
};
