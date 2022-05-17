import React, { useEffect, useState } from "react";

const Paginacion = ({
  query,
  hookSetEstadoPagina,
  hookEstadoPagina,
  datos,
}) => {
  const [estadoCantidad, setEstadoCantidad] = useState(0);
  if (query[0]) return <p>Loading ...</p>;
  if (query[1]) return <p>error</p>;

  let cantidadPaginas = [];

  let cantidadPaginaMod = datos.length % 10;
  let cantidadExactaPaginas = datos.length /10;




if(cantidadPaginaMod !== 0){
  cantidadExactaPaginas= Math.floor(cantidadExactaPaginas)+1;
}

console.log(cantidadExactaPaginas, datos.length);


  for (let i = 0; i < cantidadExactaPaginas; i++) {
    cantidadPaginas.push([i]);
  }

  if (datos) {
    return cantidadPaginas.map((paginas) => (
      <button
        name={[paginas[0]]}
        style={
          hookEstadoPagina.EstadoPagina == paginas[0]
            ? { backgroundColor: "#74b3cc" }
            : { backgroundColor: "" }
        }
        onClick={() => {
          hookSetEstadoPagina({
            ...hookEstadoPagina,
            EstadoPagina: paginas[0],
          });
        }}
      >
        {paginas[0] + 1}
      </button>
    ));
  }
};

export default Paginacion;