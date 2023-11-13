import React from 'react';

const AlumnosResidentesAsign = () => {


  return (
    <div className="contenido__Alumnos_residentes">
      <h2>Relación de alumnos a asesorar en la Residencia Profesional</h2>
      <div className="tablita">
        <table border="1">
          <thead>
            <tr>
              <th>N° DE CONTROL</th>
              <th>NOMBRE</th>
              <th>CARRERA</th>
              <th>EMPRESA</th>
              <th>PROYECTO</th>
              <th>PERIODO</th>
              <th>ASESOR EXTERNO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button>MODIFICAR</button>
                  <br />
                  <button>ELIMINAR</button>
                </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlumnosResidentesAsign;
