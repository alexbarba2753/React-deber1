import React from "react";
import "../App.css";
import fotoPerfil from "../imagenes/foto mateo.jpg"

const Datos = () => {
    return (
        <div className="section">
            <h2>Datos Personales</h2>
            <img src={fotoPerfil} alt="Perfil" className="profile-img"></img>
            <p><strong>Nombres:</strong> Alex Mateo Barba Gavidia</p>
            <p><strong>Dirección:</strong> Montevideo Oe9-229 e Independencia</p>
            <p><strong>Teléfono:</strong> 098 483 3785</p>
            <p><strong>Correo Electrónico:</strong> alex.barba@epn.edu.ec</p>
        </div>
    );
};

export default Datos;
