import {useState} from 'react'

export const ComponenteAbiertoCerrado = () => {

    const [abierto, setAbierto] = useState(false);

    const toggleAbierto = () => {
      setAbierto(!abierto);
    };
  return (
    <div>
    <button onClick={toggleAbierto}>
      Abri Componente
    </button>
    {abierto && <div>
        <p>Contenido del componente que puedes abrir y cerrar.</p>
        <button onClick={toggleAbierto}>Cerrar</button>
        </div>}
  </div>
  )
}
