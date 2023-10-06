import { useEffect, useState } from "react";

interface Header {
  text: string;
}
export const usePruebatable = () => {
  const [header, setHeader] = useState<Array<Header>>([]);

  useEffect(() => {
    setHeader([
      {
        text: "No.",
      },
      {
        text: "Nombre.",
      },
      {
        text: "Cursos.",
      },
      {
        text: "Habilitar.",
      },
      {
        text: "Acciones.",
      },
    ]);
  }, []);


  return {
    header,
  };
};
