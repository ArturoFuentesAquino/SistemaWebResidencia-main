const Evalucionseguimiento = () => {
    return (
        <div className="contenido__Evalucionreporteresidente">
            <div className="Evalucionreporteresidente__titulo">
                <h1>Evaluación De Seguimiento De Residencia Profesional</h1>
                <div className="contenido__fondo"></div>            
            </div>
            <div className="Evalucionreporteresidente__preguntas">
                <div className="contenido__preguntas">
                    <div className="informacion__pregunta">
                        <span>Nombre del residente:</span>
                        <input type="text" name="name" placeholder="Nombre del residente"></input>
                        <span>Nombre del proyecto:</span>
                        <input type="text" name="name" placeholder="Nombre del proyecto"></input>
                        <span>Periodo de realización de la Residencia <br /> Profesional:</span>
                        <input type="text" name="name" placeholder="Periodo de realización de la Residencia Profesional"></input>
                    </div>
                    <div className="informacion__pregunta">
                        <span>Número de control:</span>
                        <input type="number" name="numero" min="0" placeholder="N° de control"></input>
                        <span>Programa educativo:</span>
                        <input type="text" name="name" placeholder="Programa educativo"></input>
                        <span>Calificación Parcial <br /> (promedio de ambas evaluaciones):</span>
                        <input type="text" name="name" placeholder="Calificación parcial"></input>
                    </div>
                </div>

                <div className="informacion__tabla">
                    <table  border="1"><thead>
                        <tr>
                            <th colSpan="4">En qué medida el residente cumple con lo siguiente</th>
                        </tr>
                        <tr>
                            <th colSpan="2">Criterios a evaluar</th>
                            <th>Valor</th>
                            <th>Evaluación</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <th rowSpan="10">Evaluación por el asesor interno</th>
                            </tr>
                            <tr>
                                <td>Asistió puntualmente a las reuniones de asesoría</td>
                                <td>10</td>
                                <td>
                                    <select name="selected">
                                        <option value="uno"></option>
                                        <option value="uno">1</option>
                                        <option value="dos">2</option>
                                        <option value="tres">3</option>
                                        <option value="cuatro">4</option>
                                        <option value="cinco">5</option>
                                        <option value="seis">6</option>
                                        <option value="siete">7</option>
                                        <option value="ocho">8</option>
                                        <option value="nueve">9</option>
                                        <option value="diez">10</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Demuestra conocimiento en el área de su especialidad</td>
                                <td>20</td>
                                <td>
                                    <select name="selected">
                                        <option value="uno"></option>
                                        <option value="uno">1</option>
                                        <option value="dos">2</option>
                                        <option value="tres">3</option>
                                        <option value="cuatro">4</option>
                                        <option value="cinco">5</option>
                                        <option value="seis">6</option>
                                        <option value="siete">7</option>
                                        <option value="ocho">8</option>
                                        <option value="nueve">9</option>
                                        <option value="diez">10</option>
                                        <option value="once">11</option>
                                        <option value="doce">12</option>
                                        <option value="trece">13</option>
                                        <option value="catorce">14</option>
                                        <option value="quince">15</option>
                                        <option value="dieciseis">16</option>
                                        <option value="diecisiete">17</option>
                                        <option value="dieciocho">18</option>
                                        <option value="diecinueve">19</option>
                                        <option value="veinte">20</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Trabaja en equipo y se comunica de forma efectiva (oral y escrita)</td>
                                <td>15</td>
                                <td>
                                    <select name="selected">
                                        <option value="uno"></option>
                                        <option value="uno">1</option>
                                        <option value="dos">2</option>
                                        <option value="tres">3</option>
                                        <option value="cuatro">4</option>
                                        <option value="cinco">5</option>
                                        <option value="seis">6</option>
                                        <option value="siete">7</option>
                                        <option value="ocho">8</option>
                                        <option value="nueve">9</option>
                                        <option value="diez">10</option>
                                        <option value="once">11</option>
                                        <option value="doce">12</option>
                                        <option value="trece">13</option>
                                        <option value="catorce">14</option>
                                        <option value="quince">15</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Es dedicado y proactivo en las actividades encomendadas</td>
                                <td>20</td>
                                <td>
                                    <select name="selected">
                                        <option value="uno"></option>
                                        <option value="uno">1</option>
                                        <option value="dos">2</option>
                                        <option value="tres">3</option>
                                        <option value="cuatro">4</option>
                                        <option value="cinco">5</option>
                                        <option value="seis">6</option>
                                        <option value="siete">7</option>
                                        <option value="ocho">8</option>
                                        <option value="nueve">9</option>
                                        <option value="diez">10</option>
                                        <option value="once">11</option>
                                        <option value="doce">12</option>
                                        <option value="trece">13</option>
                                        <option value="catorce">14</option>
                                        <option value="quince">15</option>
                                        <option value="dieciseis">16</option>
                                        <option value="diecisiete">17</option>
                                        <option value="dieciocho">18</option>
                                        <option value="diecinueve">19</option>
                                        <option value="veinte">20</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Es ordenado y cumple satisfactoriamente con las actividades
                                    encomendadas en los tiempos establecidos en el cronograma</td>
                                <td>20</td>
                                <td>
                                    <select name="selected">
                                        <option value="uno"></option>
                                        <option value="uno">1</option>
                                        <option value="dos">2</option>
                                        <option value="tres">3</option>
                                        <option value="cuatro">4</option>
                                        <option value="cinco">5</option>
                                        <option value="seis">6</option>
                                        <option value="siete">7</option>
                                        <option value="ocho">8</option>
                                        <option value="nueve">9</option>
                                        <option value="diez">10</option>
                                        <option value="once">11</option>
                                        <option value="doce">12</option>
                                        <option value="trece">13</option>
                                        <option value="catorce">14</option>
                                        <option value="quince">15</option>
                                        <option value="dieciseis">16</option>
                                        <option value="diecisiete">17</option>
                                        <option value="dieciocho">18</option>
                                        <option value="diecinueve">19</option>
                                        <option value="veinte">20</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Propone mejoras al proyecto</td>
                                <td>15</td>
                                <td>
                                    <select name="selected">
                                        <option value="uno"></option>
                                        <option value="uno">1</option>
                                        <option value="dos">2</option>
                                        <option value="tres">3</option>
                                        <option value="cuatro">4</option>
                                        <option value="cinco">5</option>
                                        <option value="seis">6</option>
                                        <option value="siete">7</option>
                                        <option value="ocho">8</option>
                                        <option value="nueve">9</option>
                                        <option value="diez">10</option>
                                        <option value="once">11</option>
                                        <option value="doce">12</option>
                                        <option value="trece">13</option>
                                        <option value="catorce">14</option>
                                        <option value="quince">15</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Calificación total</td>
                                <td>100</td>
                                <td>
                                   <input></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="observaciones">
                        <span>Observaciones:</span>
                        <textarea name="textarea" placeholder="Ingrese las observaciones" />
                        <input className="btn" type="submit" name="register" value="Registrar"></input>
                        <input className="btn" type="submit" name="register" value="Imprimir"></input>

                    </div>

                </div>
            </div>

        </div>
    );
};
export default Evalucionseguimiento;