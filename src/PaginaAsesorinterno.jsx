import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/*Componentes*/
import Barra from "./asesor_interno/componentes/barra_lateral.jsx";
import Cabecera from "./componentes/cabecera.jsx";
import Pie from "./componentes/pie_de_pagina.jsx";
/* Paginas */
import Inicio from "./asesor_interno/paginas/inicio.jsx";
import Alumnosresidentesasign from "./asesor_interno/paginas/alumnosresidentesasign.jsx";
import Evaluacionseguimiento from "./asesor_interno/paginas/evaluacionseguimiento.jsx";
import Evaluacionreporte from "./asesor_interno/paginas/evaluacionreporte.jsx";
import Tablaevaluacionesseguimiento from "./asesor_interno/paginas/tablaevaluacionseguimiento.jsx";
import Tablaevaluacionesreporte from "./asesor_interno/paginas/tablaevaluacionreporte.jsx";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */



const PaginaAsesorInterno = (props) => {
   
    
    return (
        <div className="contenedor">
        <Barra />
        <div className="principal">
          <header className="cabecera">
            <Cabecera graphData={props}  />
          </header>
          <main className="cuerpo">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/alumnosresidentesasign" element={<Alumnosresidentesasign graphData={props} />} />
              <Route path="/evaluacionreporte" element={<Evaluacionreporte graphData={props}/>} />
              <Route path="/tablaevaluacionesreporte" element={<Tablaevaluacionesreporte />} />
              <Route path="/evaluacionseguimiento" element={<Evaluacionseguimiento />} />
              <Route path="/tablaevaluacionesseguimiento" element={<Tablaevaluacionesseguimiento />} />
            </Routes>
          </main>
          <footer className="pie-pagina">
            <Pie />
          </footer>
        </div>
      </div>

    );
};

export default PaginaAsesorInterno;