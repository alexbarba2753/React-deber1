import React from "react";
import "../App.css";
import ecuavoley from "../imagenes/ecuavoley.jpg";

const Deportes = () => {
    return (
        <div className="section">
        <h2>Deportes Favoritos</h2>
        <div className="sports">
            <div>
                <img src={ecuavoley} alt="Voley" className="sport-img"></img>
                <p>Ecuavoley</p>
            </div>
            <div>
                <img src="../imagenes/futbol.jpg" alt="futbol" className="sport-img"></img>
                <p>Futbol</p>
            </div>
            <div>
                <img src="../imagenes/natacion.jpg" alt="futbol" className="sport-img"></img>
                <p>Natación</p>
            </div>
            <div>
                <img src="../imagenes/volleyball.jpg" alt="futbol" className="sport-img"></img>
                <p>Volleyball</p>
            </div>
        </div>
        </div>
    );
};

export default Deportes;
