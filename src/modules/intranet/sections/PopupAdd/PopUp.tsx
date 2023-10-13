import "./PopupAdd.scss";


interface props {
    toggleViewAsignarCurso: () => void;
  }
export const PopUp = ({toggleViewAsignarCurso}:props) => {
  return (
    <div className='popUp-add'>
        <h1>HOLAAAAA</h1>
        <button onClick={toggleViewAsignarCurso}>Cerrar</button>
    </div>
  )
}
