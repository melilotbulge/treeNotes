import { singInGoogle } from "../firebase/functionfirebase";
import React from "react";
import arboltrans from "../Imagenes/arboltrans.png";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div class="Home">
      <img src={arboltrans} alt="logo" />
      <h1>Tree-Notes </h1>
      <h2>Plasma tus ideas</h2>
      <button className="google-btn" onClick={singInGoogle}>
        <Link to={`/wall`}>Ingresa con Google</Link>
        {/* antes de renderizar a pagina realizar confirmacion de que me loguie */}
      </button>
    </div>
  );
}
