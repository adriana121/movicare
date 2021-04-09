import logo from "../assets/logo.png";
import familia from "../assets/familia.png";
import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="container_images">
        <img width="550px" src={logo} alt="logo" />
        <img width="550px" src={familia} alt="familia" />
      </div>

      <div className="container_content">
        <p className="title">
          ¿QUIERES SER PARTE DE NUESTRO SERVICIO DELIVERY?
        </p>
        <p className="content">
          SOLO NECESITAS CONTAR CON UN MEDIO DE TRANSPORTE Y LLENAR NUESTRO
        </p>
            <button className='button'>
            <Link style={{textDecoration:'none', color:'white', border:'#65B32E,2px,solid'}} to="/form">Formulario</Link>
            </button>
        
      </div>
    </div>
  );
}

export default Home;
