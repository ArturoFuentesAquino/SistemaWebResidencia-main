import React, { useState, useEffect } from "react";
import "./estilos-impresion.css";
import {
  fetchData,
  createData,
  updateData,
  deleteData /*, conaxios*/,
  updateDataDoc,
  agregarevaluacion,
} from "./formato";
import axios from "axios";

/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */

const Tablaevaluacionreporte = (props) => {
  const nombrealm = props.graphData.graphData.graphData.displayName;
  const correo = props.graphData.graphData.graphData.mail;
  const numerosExtraidos = correo.match(/\d+/);
  const numerosComoCadena = numerosExtraidos ? numerosExtraidos[0] : "";
  // Para obtener los números como un número entero, puedes hacer:
  //const numerosComoEntero = numerosExtraidos ? parseInt(numerosExtraidos[0], 10) : null;

  //console.log("esto es props", correo);
  const [data, setData] = useState(null);
  //PARA VISUALISAR ESPECIALIDEDEDES
  const [especialidades, setEspecialidades] = useState(null);
  //PARA VISUALISAR ESPECIALIDEDEDES
  const [asesores, setAsesores] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [editingId, setEditingId] = useState(null); // ID del elemento en edición
  const [documentId, setDocumentId] = useState(null);
  const [documents, setDocuments] = useState([]);

  const [documentoCargado, setDocumentoCargado] = useState(false);

  const [newItem, setNewItem] = useState({
    nombre: nombrealm,
    ncontrol: numerosComoCadena,
    nombre_anteproyecto: "",
    periodo: "",
    empresa: "",
    asesorE: "",
    carrera: "",
  });

  ///api/residentesuploads
  //pruebas de importacion
  const nombretabla = "api/residentesuploads";
  const nombredocumentos = "api/upload/files/";
  //#####################################
  const nombreespecialidades = "api/especialidads";
  const nombreasesores = "api/asesores-is";
  //pruebas de importacion
  const contenidodocumento = "api/upload";
  //
  const direccionapi = "http://localhost:1337/";
  ///
  const naevalua = "api/evaluacion1s";
  const naevaluaE = "api/evaluacion1-es";

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //#######################################
  const [evalu, setEvalu] = useState(null);

  const [evaluE, setEvalue] = useState(null);
  const fetchDataAsync = async () => {
    try {
      const fetchedData = await fetchData(nombretabla);
      setData(fetchedData);

      const fetchedEspecialidades = await fetchData(nombreespecialidades);
      setEspecialidades(fetchedEspecialidades);

      const fetchedAsesores = await fetchData(nombreasesores);
      setAsesores(fetchedAsesores);

      const fetchedEvalu = await fetchData(naevalua);
      setEvalu(fetchedEvalu);

      const fetchedEvaluE = await fetchData(naevaluaE);
      setEvalue(fetchedEvaluE);

      console.log("Cargo todos los datos!", fetchedEvalu);
      //setEditingMode(true)
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    // Cargar los datos iniciales al montar el componente
    fetchDataAsync();
  }, []);

  useEffect(() => {
    // Realiza una solicitud GET a la API de Strapi para obtener la lista de documentos
    async function fetchDocuments() {
      try {
        //http://localhost:1337/api/upload/files/
        const response = await axios.get(`${direccionapi}${nombredocumentos}`); // Asegúrate de usar la URL correcta
        //boleano = true;
        setDocumentoCargado(true);
        setDocuments(response.data);
      } catch (error) {
        setDocumentoCargado(false);
        console.error("Error al obtener la lista de documentos:", error);
      }
    }
    fetchDocuments();
  }, []);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mostrarPopupS, setMostrarPopupS] = useState(false);

  const imprimir3 = () => {
    // Ocultar otros elementos antes de imprimir
    window.print();
  };

  const handleCerrarPopup = () => {
    // Lógica para cerrar el popup
    setMostrarPopup(false);
  };

  const handleCrearClick = () => {
    setMostrarPopup(true);
  };

  const mostrarp2 = () => {
    setMostrarPopupS(true);
  };
  const cerrarp2 = () => {
    setMostrarPopupS(false);
  };

  const criteriosAEvaluar = [
    { label: "Portada", valor: 2, atributo: "dato1" },
    { label: "Agradecimientos", valor: 2, atributo: "dato2" },
    { label: "Resumen", valor: 2, atributo: "dato3" },
    { label: "Índice", valor: 2, atributo: "dato4" },
    { label: "Introducción", valor: 2, atributo: "dato5" },
    { label: "Problemas a resolver, priorizándolos", valor: 5, atributo: "dato6" },
    { label: "Objetivos", valor: 5, atributo: "dato7" },
    { label: "Justificación", valor: 5, atributo: "dato8" },
    { label: "Marco teórico (fundamentos teóricos)", valor: 10, atributo: "dato9" },
    { label: "Procedimiento y descripción de las actividades realizadas", valor: 5, atributo: "dato10" },
    { label: "Resultados, planos, gráficas, prototipos, manuales, programas, análisis estadísticos, modelos matemáticos, simulaciones, normativaes, regulaciones y restricciones, entre otros. Solo para proyectos que por su naturaleza lo requieran: estudio de mercado, estudio técnico y estudio económico", valor: 45, atributo: "dato11" },
    { label: "Conclusiones, recomendaciones y experiencia profesional adquirida", valor: 2, atributo: "dato12" },
    { label: "Competencias desarrolladas y/o aplicadas", valor: 10, atributo: "dato13" },
    { label: "Fuentes de información", valor: 3, atributo: "dato14" },
    { label: "Calificación total", valor: 100, atributo: "dato15" },
  ];

  return (
    <div className="contenido">
      <div className="Anteproyectosubir__titulo">
        <h1>¡Bienvenido Aseror Tecnm!</h1>
        <h1>
          En este apartado tu podras visualisar las evaluaciones que ha realizado
        </h1>
      </div>
      <div className="informacion__tabla">
        <table border="1">
          <thead>
            <tr>
              <th>EVALUACION DE REPORTE FINAL DE RESIDENCIA PROFESIONAL</th>
              <th>Calificaion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data
                .filter((item) => item.attributes.correoasesor === correo)
                .map((item) => {
                  // Verificar si evalu es diferente de null y tiene la propiedad data
                  if (evalu && evalu.data && evaluE && evaluE.data) {
                    // Verificar si existe un elemento en evalu con el mismo idevaluado
                    const evaluacionCorrespondiente = evalu.data.find(
                      (evaluItem) =>
                        evaluItem.attributes.idevaluado === item.id.toString()
                    );

                    // Verificar lo mismo para evaluE
                    const evaluacionCorrespondienteE = evaluE.data.find(
                      (evaluEItem) =>
                        evaluEItem.attributes.idevaluado === item.id.toString()
                    );

                    // Mostrar la fila solo si se encuentra una correspondencia en evalu o evaluE
                    if (
                      evaluacionCorrespondiente ||
                      evaluacionCorrespondienteE
                    ) {
                      return (
                        <React.Fragment key={item.id}>
                          {/* Fila para evalu */}
                          {evaluacionCorrespondiente && (
                            <tr>
                              <td>{item.attributes.nombre}</td>
                              <td>
                                {evaluacionCorrespondiente.attributes.dato15}
                              </td>
                              <button
                                className="btn-asig"
                                onClick={handleCrearClick}
                              >
                                Imprimir Evaluacion Interna
                              </button>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    }
                  }

                  return null; // O puedes mostrar un mensaje o lo que desees cuando no haya correspondencia
                })}
          </tbody>
        </table>
      </div>

      {mostrarPopup && (
        <div className="popup">
          <div className="popup-contenido">
            <table className="mi-tabla2">
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://istmo.tecnm.mx/wp-content/uploads/2021/08/logo-tec-png-naranja.png"
                      alt="Descripción de la imagen"
                      width="100" // Establece el ancho en píxeles
                      height="50" // Establece la altura en píxeles
                    />
                  </td>
                  <td style={{ textAlign: "center", fontWeight: "bold" }}>
                    Instituto Tecnológico Del Istmo
                    <br />
                    "Por una Tecnología Propia como principio de libertad"
                    <br />
                    EVALUACION Y SEGUIMIENTO DE RESIDENCIA
                    <br />
                    PROFESIONAL
                  </td>
                  <td style={{ textAlign: "center", fontWeight: "bold" }}>
                    Código:
                    <br />
                    FR-ITISTMO-7.5.1-07-07
                    <br />
                    Versión:
                    <br />
                    Rev. 1
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

            <p style={{ textAlign: "center" }}>"Hoja Oficial membretada"</p>
            {data &&
              data.data
                .filter((item) => item.attributes.correo === correo)
                .map((item) => (
                  <>
                    <p style={{ textAlign: "left" }}>
                      Nombre del Residente: {item.attributes.nombre}{" "}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Numero de control: {newItem.ncontrol}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Nombre del Proyecto: {item.attributes.nombre_anteproyecto}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Programa Educativo: {item.attributes.carrera}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Periodo de realizacion de la residencia profesional:
                      {item.attributes.periodo}{" "}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Calificación Parcial (Promedio de ambas evaluaciones) :{" "}
                      {item.attributes.califasesorI}
                    </p>
                  </>
                ))}

            <table className="mi-tabla2">
              <tbody>
                {data &&
                  data.data
                    .filter((item) => item.attributes.correo === correo)
                    .map((item) => {
                      // Verificar si evalu es diferente de null y tiene la propiedad data
                      if (evalu && evalu.data) {
                        // Verificar si existe un elemento en evalu con el mismo idevaluado
                        const evaluacionCorrespondiente = evalu.data.find(
                          (evaluItem) =>
                            evaluItem.attributes.idevaluado ===
                            item.id.toString()
                        );

                        // Mostrar la fila solo si se encuentra una correspondencia en evalu
                        if (evaluacionCorrespondiente) {
                          // Ahora puedes acceder a item.attributes.nombre si se cumple la condición
                          return (
                            <>
                              <tr>
                                En qué medida el residente cumple con lo
                                siguiente
                              </tr>

                              <th>Criterios a evaluar </th>
                              <th>Valor</th>
                              <th>Evaluacion</th>

                              {criteriosAEvaluar.map((criterio, index) => (
                                <tr key={item.id + `-dato${index + 1}`}>
                                  <td>{criterio.label}</td>
                                  <td>{criterio.valor}</td>
                                  <td>
                                    {
                                      evaluacionCorrespondiente.attributes[
                                        criterio.atributo
                                      ]
                                    }
                                  </td>
                                </tr>
                              ))}

                              {/* Agrega más filas si es necesario */}
                              <p style={{ textAlign: "left" }}>Observaciones</p>
                                <p style={{ textAlign: "left" }}>
                                    {evaluacionCorrespondiente.attributes.observaciones}

                                </p>
                            </>
                          );
                        }
                      }

                      return null;
                      
                      // O puedes mostrar un mensaje o lo que desees cuando no haya correspondencia
                    })}
              </tbody>
            </table>
            <br />
           
            <table className="mi-tabla">
              <tbody>
                <tr>
                  <td>
                    <p style={{ textAlign: "center" }}>
                      <br />
                      <br />
                      <br />
                      <br />
                      {data &&
                  data.data
                    .filter((item) => item.attributes.correo === correo)
                    .map((item) => {
                      // Verificar si evalu es diferente de null y tiene la propiedad data
                      if (evalu && evalu.data) {
                        // Verificar si existe un elemento en evalu con el mismo idevaluado
                        const evaluacionCorrespondiente = evalu.data.find(
                          (evaluItem) =>
                            evaluItem.attributes.idevaluado ===
                            item.id.toString()
                        );

                        // Mostrar la fila solo si se encuentra una correspondencia en evalu
                        if (evaluacionCorrespondiente) {
                          // Ahora puedes acceder a item.attributes.nombre si se cumple la condición
                          return (
                            <>
                           
                           <p> {evaluacionCorrespondiente.attributes.asesori} </p>
                            
                            </>
                          );
                        }
                      }

                      return null;
                      
                      // O puedes mostrar un mensaje o lo que desees cuando no haya correspondencia
                    })}
                    </p>
                  </td>
                  <td>
                    <p style={{ textAlign: "center" }}>
                      <br />
                      <br />
                      <br />
                      <br />
                      Sello de la empresa, organismo o dependencia
                    </p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p style={{ textAlign: "center" }}>
                      <br />
                      <br />
                      <br />
                      <br />
                      Fecha de evaluacion
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Agrega más campos según sea necesario */}
            <button className="btn-asig" onClick={imprimir3}>
              Imprimir
            </button>
            <button className="btn-asig" onClick={handleCerrarPopup}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {mostrarPopupS && (
        <div className="popup">
          <div className="popup-contenido">
            <table className="mi-tabla2">
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://istmo.tecnm.mx/wp-content/uploads/2021/08/logo-tec-png-naranja.png"
                      alt="Descripción de la imagen"
                      width="100" // Establece el ancho en píxeles
                      height="50" // Establece la altura en píxeles
                    />
                  </td>
                  <td style={{ textAlign: "center", fontWeight: "bold" }}>
                    Instituto Tecnológico Del Istmo 2
                    <br />
                    "Por una Tecnología Propia como principio de libertad"
                    <br />
                    EVALUACION Y SEGUIMIENTO DE RESIDENCIA
                    <br />
                    PROFESIONAL
                  </td>
                  <td style={{ textAlign: "center", fontWeight: "bold" }}>
                    Código:
                    <br />
                    FR-ITISTMO-7.5.1-07-07
                    <br />
                    Versión:
                    <br />
                    Rev. 1
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

            <p style={{ textAlign: "center" }}>"Hoja Oficial membretada"</p>
            {data &&
              data.data
                .filter((item) => item.attributes.correo === correo)
                .map((item) => (
                  <>
                    <p style={{ textAlign: "left" }}>
                      Nombre del Residente: {item.attributes.nombre}{" "}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Numero de control: {item.attributes.ncontrol}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Nombre del Proyecto: {item.attributes.nombre_anteproyecto}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Programa Educativo: {item.attributes.carrera}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Periodo de realizacion de la residencia profesional:
                      {item.attributes.periodo}{" "}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Calificación Parcial (Promedio de ambas evaluaciones) :{" "}
                      {item.attributes.califasesorI}
                    </p>
                  </>
                ))}

            <table className="mi-tabla2">
              <tbody>
                {data &&
                  data.data
                    .filter((item) => item.attributes.correo === correo)
                    .map((item) => {
                      // Verificar si evalu es diferente de null y tiene la propiedad data
                      if (evaluE && evaluE.data) {
                        // Verificar si existe un elemento en evalu con el mismo idevaluado
                        const evaluacionCorrespondienteE = evaluE.data.find(
                          (evaluItem) =>
                            evaluItem.attributes.idevaluado ===
                            item.id.toString()
                        );

                        // Mostrar la fila solo si se encuentra una correspondencia en evalu
                        if (evaluacionCorrespondienteE) {
                          // Ahora puedes acceder a item.attributes.nombre si se cumple la condición
                          return (
                            <>
                              <tr>
                                En qué medida el residente cumple con lo
                                siguiente
                              </tr>

                              <th>Criterios a evaluar </th>
                              <th>Valor</th>
                              <th>Evaluacion</th>
                              {criteriosAEvaluar.map((criterio, index) => (
                                <tr key={item.id + `-dato${index + 1}`}>
                                  <td>{criterio.label}</td>
                                  <td>{criterio.valor}</td>
                                  <td>
                                    {
                                      evaluacionCorrespondienteE.attributes[
                                        criterio.atributo
                                      ]
                                    }
                                  </td>
                                </tr>
                              ))}

                              {/* Agrega más filas si es necesario */}
                              {/* Agrega más filas si es necesario */}
                              <p style={{ textAlign: "left" }}>Observaciones</p>
                                <p style={{ textAlign: "left" }}>
                                    {evaluacionCorrespondienteE.attributes.observaciones}

                                </p>
                            </>
                          );
                        }
                      }

                      return null; // O puedes mostrar un mensaje o lo que desees cuando no haya correspondencia
                    })}
              </tbody>
            </table>
            <br />
           
            <table className="mi-tabla">
              <tbody>
                <tr>
                  <td>
                    <p style={{ textAlign: "center" }}>
                      <br />
                      <br />
                      <br />
                      <br />
                      {data && data.data.filter((item) => item.attributes.correo === correo).map((item) => (
                            <>
                        {item.attributes.asesorE}
                        </>

                    ))}
                    
                    </p>
                  </td>
                  <td>
                    <p style={{ textAlign: "center" }}>
                      <br />
                      <br />
                      <br />
                      <br />
                      Sello de la empresa, organismo o dependencia
                    </p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p style={{ textAlign: "center" }}>
                      <br />
                      <br />
                      <br />
                      <br />
                      Fecha de evaluacion
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Agrega más campos según sea necesario */}
            <button className="btn-asig" onClick={imprimir3}>
              Imprimir
            </button>
            <button className="btn-asig" onClick={cerrarp2}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Tablaevaluacionreporte;
