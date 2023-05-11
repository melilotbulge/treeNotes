import React from "react";
import arboltrans from "../Imagenes/arboltrans.png";

export default function CreateNote() {
  return (
    <div className="container">
      <img className="arbol" src={arboltrans} alt="logo" />
      <button className="Salir">Salir</button>
      <h2>Agregar Nota</h2>
      <div>
        <input type="text" />
        <button className="eliminar">Eliminar</button>
        <button className="editar">Editar</button>
        <button className="guardar">Guardar</button>
      </div>
    </div>
  );
}
