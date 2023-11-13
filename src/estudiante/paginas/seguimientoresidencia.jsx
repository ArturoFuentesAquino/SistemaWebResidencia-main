import React, { useState, useEffect } from 'react';

function Seguimientoresidencia() {
  // Recupera los colores del localStorage al cargar el componente
  const storedCellColors = JSON.parse(localStorage.getItem('cellColors')) || {};
  const [cellColors, setCellColors] = useState(storedCellColors);

  // Función para cambiar el color de una celda
  const handleCellClick = (cellId) => {
    setCellColors((prevColors) => {
      const newColors = {
        ...prevColors,
        [cellId]: prevColors[cellId] === 'red' ? 'white' : 'red',
      };
      // Almacena los colores actualizados en el localStorage
      localStorage.setItem('cellColors', JSON.stringify(newColors));
      return newColors;
    });
  };

  useEffect(() => {
    // Actualiza el localStorage cuando los colores cambian
    localStorage.setItem('cellColors', JSON.stringify(cellColors));
  }, [cellColors]);


  return (
<div className="contenido__seguimientoresidencia">
  <h2>SEGUIMIENTO RESIDENCIA</h2>
<div className="Seguimientoresidencia__preguntas">
  <div className="contenido__preguntas">
    <div className="informacion__pregunta">
      <span>Nombre del residente:</span>
      <input type="text" name="name" placeholder="Nombre del residente"></input>
      <span>Número de control:</span>
      <input type="number" name="numero" placeholder="N° de control"></input>
      <span>Nombre del proyecto:</span>
      <input type="text" name="name" placeholder="Nombre del proyecto"></input>
      <span>Empresa:</span>
      <input type="text" name="name" placeholder="Empresa"></input>
    </div>
    <div className="informacion__pregunta">
      <span>Asesor externo:</span>
      <input type="text" name="name" placeholder="Asesor externo"></input> 
      <span>Asesor interno:</span>
      <input type="text" name="name" placeholder="Asesor interno"></input>
      <span>Periodo de realización:</span>
      <input type="text" name="name" placeholder="Periodo de realización"></input>
    </div>
  </div>
   




    
        
        <table border="1">
          <thead>
            <tr bgcolor="#1a3968">
              <th><font color="white">ACTIVIDAD</font></th>
              <th><font color="white">   </font></th>
              <th><font color="white">1</font></th>
              <th><font color="white">2</font></th>
              <th><font color="white">3</font></th>
              <th><font color="white">4</font></th>
              <th><font color="white">5</font></th>
              <th><font color="white">6</font></th>
              <th><font color="white">7</font></th>
              <th><font color="white">8</font></th>
              <th><font color="white">9</font></th>
              <th><font color="white">10</font></th>
              <th><font color="white">11</font></th>
              <th><font color="white">12</font></th>
              <th><font color="white">13</font></th>
              <th><font color="white">14</font></th>
              <th><font color="white">15</font></th>

            </tr>
            <tr bgcolor="white">
              <td rowSpan={2}><font color="black"> <input type="text" className="actividad"></input></font></td>
              <td><font color="black">P </font></td>
              <td   style={{ backgroundColor: cellColors['cell-1'] || 'white' }}
              onClick={() => handleCellClick('cell-1')}><font color="black">
              </font></td>
              <td  style={{ backgroundColor: cellColors['cell-2'] || 'white' }}
              onClick={() => handleCellClick('cell-2')}><font color="black">
              </font></td>
              <td   style={{ backgroundColor: cellColors['cell-3'] || 'white' }}
                onClick={() => handleCellClick('cell-3')}><font color="black">
              </font></td>
              <td   style={{ backgroundColor: cellColors['cell-4'] || 'white' }}
                onClick={() => handleCellClick('cell-4')}><font color="black">
              </font></td>
              <td style={{ backgroundColor: cellColors['cell-5'] || 'white' }}
                onClick={() => handleCellClick('cell-5')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-6'] || 'white' }}
                onClick={() => handleCellClick('cell-6')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-7'] || 'white' }}
                onClick={() => handleCellClick('cell-7')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-8'] || 'white' }}
                onClick={() => handleCellClick('cell-8')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-9'] || 'white' }}
                onClick={() => handleCellClick('cell-9')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-10'] || 'white' }}
                onClick={() => handleCellClick('cell-10')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-11'] || 'white' }}
                onClick={() => handleCellClick('cell-11')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-12'] || 'white' }}
                onClick={() => handleCellClick('cell-12')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-13'] || 'white' }}
                onClick={() => handleCellClick('cell-13')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-14'] || 'white' }}
                onClick={() => handleCellClick('cell-14')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-15'] || 'white' }}
                onClick={() => handleCellClick('cell-15')}><font color="black"></font></td>
            </tr>
            <tr bgcolor="white">
              <td><font color="black">R</font></td>
              <td   style={{ backgroundColor: cellColors['cell-16'] || 'white' }}
                onClick={() => handleCellClick('cell-16')}><font color="black">
              </font></td>
              <td  style={{ backgroundColor: cellColors['cell-17'] || 'white' }}
                onClick={() => handleCellClick('cell-17')}><font color="black">
              </font></td>
              <td   style={{ backgroundColor: cellColors['cell-18'] || 'white' }}
                onClick={() => handleCellClick('cell-18')}><font color="black">
              </font></td>
              <td   style={{ backgroundColor: cellColors['cell-19'] || 'white' }}
                onClick={() => handleCellClick('cell-19')}><font color="black">
              </font></td>
              <td style={{ backgroundColor: cellColors['cell-20'] || 'white' }}
                onClick={() => handleCellClick('cell-20')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-21'] || 'white' }}
                onClick={() => handleCellClick('cell-21')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-22'] || 'white' }}
                onClick={() => handleCellClick('cell-22')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-23'] || 'white' }}
                onClick={() => handleCellClick('cell-23')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-24'] || 'white' }}
                onClick={() => handleCellClick('cell-24')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-25'] || 'white' }}
                onClick={() => handleCellClick('cell-25')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-26'] || 'white' }}
                onClick={() => handleCellClick('cell-26')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-27'] || 'white' }}
                onClick={() => handleCellClick('cell-27')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-28'] || 'white' }}
                onClick={() => handleCellClick('cell-28')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-29'] || 'white' }}
                onClick={() => handleCellClick('cell-29')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-30'] || 'white' }}
                onClick={() => handleCellClick('cell-30')}><font color="black"></font></td>

            </tr>
            <tr bgcolor="white">
            <td rowSpan={2}><font color="black"> <input type="text" className="actividad"></input> </font></td>
              <td><font color="black">P</font></td>
              <td   style={{ backgroundColor: cellColors['cell-31'] || 'white' }}
                onClick={() => handleCellClick('cell-1')}><font color="black">
              </font></td>
              <td  style={{ backgroundColor: cellColors['cell-32'] || 'white' }}
                onClick={() => handleCellClick('cell-2')}><font color="black">
              </font></td>
              <td   style={{ backgroundColor: cellColors['cell-33'] || 'white' }}
                onClick={() => handleCellClick('cell-3')}><font color="black">
              </font></td>
              <td   style={{ backgroundColor: cellColors['cell-34'] || 'white' }}
                onClick={() => handleCellClick('cell-4')}><font color="black">
              </font></td>
              <td style={{ backgroundColor: cellColors['cell-35'] || 'white' }}
                onClick={() => handleCellClick('cell-35')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-36'] || 'white' }}
                onClick={() => handleCellClick('cell-36')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-37'] || 'white' }}
                onClick={() => handleCellClick('cell-37')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-38'] || 'white' }}
                onClick={() => handleCellClick('cell-38')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-39'] || 'white' }}
                onClick={() => handleCellClick('cell-39')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-40'] || 'white' }}
                onClick={() => handleCellClick('cell-40')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-41'] || 'white' }}
                onClick={() => handleCellClick('cell-41')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-42'] || 'white' }}
                onClick={() => handleCellClick('cell-42')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-43'] || 'white' }}
                onClick={() => handleCellClick('cell-43')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-44'] || 'white' }}
                onClick={() => handleCellClick('cell-44')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-45'] || 'white' }}
                onClick={() => handleCellClick('cell-45')}><font color="black"></font></td>
            </tr>
            <tr bgcolor="white">   
              <td><font color="black">R</font></td>
              <td  style={{ backgroundColor: cellColors['cell-46'] || 'white' }}
              onClick={() => handleCellClick('cell-46')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-47'] || 'white' }}
                onClick={() => handleCellClick('cell-47')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-48'] || 'white' }}
                onClick={() => handleCellClick('cell-48')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-49'] || 'white' }}
                onClick={() => handleCellClick('cell-49')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-50'] || 'white' }}
                onClick={() => handleCellClick('cell-50')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-51'] || 'white' }}
                onClick={() => handleCellClick('cell-51')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-52'] || 'white' }}
                onClick={() => handleCellClick('cell-52')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-53'] || 'white' }}
                onClick={() => handleCellClick('cell-53')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-54'] || 'white' }}
                onClick={() => handleCellClick('cell-54')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-55'] || 'white' }}
                onClick={() => handleCellClick('cell-55')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-56'] || 'white' }}
                onClick={() => handleCellClick('cell-56')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-57'] || 'white' }}
                onClick={() => handleCellClick('cell-57')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-58'] || 'white' }}
                onClick={() => handleCellClick('cell-58')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-58'] || 'white' }}
                onClick={() => handleCellClick('cell-58')}><font color="black"></font></td>
              <td style={{ backgroundColor: cellColors['cell-59'] || 'white' }}
                onClick={() => handleCellClick('cell-59')}><font color="black"></font></td>
            </tr>
            <tr bgcolor="white">   
            <td rowSpan={2}><font color="black"> <input type="text" className="actividad"></input> </font></td>
              <td><font color="black">P</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
            </tr>
            <tr bgcolor="white">   
              <td><font color="black">R</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
            </tr>
            <tr bgcolor="white">   
            <td rowSpan={2}><font color="black"> <input type="text" className="actividad"></input> </font></td>
              <td><font color="black">P</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
            </tr>
            <tr bgcolor="white">   
            <td><font color="black">R</font></td>
            <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
            </tr>
            <tr bgcolor="white">   
            <td rowSpan={2}><font color="black"> <input type="text" className="actividad" ></input> </font></td>
              <td><font color="black">P</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
            </tr>
            <tr bgcolor="white">   
            <td><font color="black">R</font></td>
            <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td> 
            </tr>
            <tr bgcolor="white">   
            <td rowSpan={2}><font color="black"> <input type="text" className="actividad"></input> </font></td>
              <td><font color="black">P</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
            </tr>
            <tr bgcolor="white">   
            <td><font color="black">R</font></td>
            <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
            </tr>
            <tr bgcolor="white">   
            <td rowSpan={2}><font color="black"> <input type="text" className="actividad"></input> </font></td>
              <td><font color="black">P</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
            </tr>
            <tr bgcolor="white">   
            <td><font color="black">R</font></td>
            <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>
              <td><font color="black">-</font></td>  
            </tr>
            <tr bgcolor="white">   
            <td colSpan={2} bgcolor="#1a3968" ><font color="white"> OBSERVACIONES </font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
            </tr>
            <tr bgcolor="white">   
            <td colSpan={1} rowSpan={3} bgcolor="#1a3968"><font color="white"> ENTREGA DE REPORTES </font></td>
            <td><font color="black"> Asesor Interno </font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input> </font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
            </tr>
            <tr bgcolor="white">   
            <td><font color="black"> Estudiante </font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input> </font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
            </tr>
            <tr bgcolor="white">   
            <td><font color="black"> Jefe Depto. </font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input> </font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
              <td colSpan={6}><font color="black"><input type="text" className="actividad"></input></font></td>
            </tr>
          </thead> 
        </table>
        <input className="btn" type="submit" name="register" value="Registrar"></input>
        <input className="btn2" type="submit" name="register" value="Imprimir"></input>
</div>
</div>
  
  );
}
export default Seguimientoresidencia;