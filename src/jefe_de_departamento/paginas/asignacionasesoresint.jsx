import React, { useState, useEffect } from "react";

import {
  fetchData,
  createData,
  updateData,
  deleteData /*, conaxios*/,
  updateDataDoc,
  residenteaceptado,
} from "./formato";
import axios from "axios";

/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */

const Asignacionasesorint = (props) => {
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
    nombre: "",
    ncontrol: "",
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
  //const residentesregistro = 


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //#######################################

  useEffect(() => {
    // Cargar los datos iniciales al montar el componente
    async function fetchDataAsync() {
      try {
        const data = await fetchData(nombretabla);
        setData(data);
        const especialidades = await fetchData(nombreespecialidades);
        setEspecialidades(especialidades);
        const asesores = await fetchData(nombreasesores);
        setAsesores(asesores);
        console.log("Cargo todos los datos !");
        //setEditingMode(true)
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
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
  const [errors, setErrors] = useState({
    nombre: "",
    ncontrol: "",
    nombre_anteproyecto: "",
    periodo: "",
    empresa: "",
    asesorE: "",
    carrera: "",
    // Otros campos del ítem
  });

//##################################################


const crear = async () => {
    /*
    const residenteSeleccionado = data.data.find(
        (item) => item.attributes.nombre === newItem.nombre
      );
    
      // Verificar si se encontró un residente
      if (residenteSeleccionado) {
        try {
          // Agregar lógica para crear el elemento con los datos del residente seleccionado
          await residenteaceptado({
            // Incluir aquí las propiedades del residente seleccionado que desees agregar al nuevo elemento
            nombre: residenteSeleccionado.attributes.nombre,
            ncontrol: residenteSeleccionado.attributes.ncontrol,
            nombre_anteproyecto: residenteSeleccionado.attributes.nombre_anteproyecto,
            periodo: residenteSeleccionado.attributes.periodo,
            empresa: residenteSeleccionado.attributes.empresa,
            asesorE: residenteSeleccionado.attributes.asesorE,
            carrera: residenteSeleccionado.attributes.carrera,
          });
    
          // Puedes realizar otras acciones después de crear el elemento
          console.log("Elemento creado exitosamente");
        } catch (error) {
          console.error("Error al crear el elemento:", error);
        }
      } else {
        // Manejar el caso en que no se encontró un residente
        console.log("Residente no encontrado");
      }
  
      */
      console.log("PRESIONADO");
 };

  //########################################################################
  const handleResidenteChange = (e) => {
// Obtener el residente seleccionado
const residenteSeleccionado = data.data.find(
    (item) => item.attributes.nombre === e.target.value
  );
  
  // Verificar si se encontró un residente
  if (residenteSeleccionado) {
    // Actualizar el estado con la información del residente seleccionado
    setNewItem({
      ...newItem,
      nombre: residenteSeleccionado.attributes.nombre,
      ncontrol: residenteSeleccionado.attributes.ncontrol,
      nombre_anteproyecto: residenteSeleccionado.attributes.nombre_anteproyecto,
      periodo: residenteSeleccionado.attributes.periodo,
      empresa: residenteSeleccionado.attributes.empresa,
      asesorE: residenteSeleccionado.attributes.asesorE,
      carrera: residenteSeleccionado.attributes.carrera,
    });
  } else {
    // Manejar el caso en que no se encontró un residente
    console.log("Residente no encontrado");
    setNewItem({
        ...newItem,
        nombre: "",
        ncontrol: "",
        nombre_anteproyecto: "",
        periodo: "",
        empresa: "",
        asesorE: "",
        carrera: "",
      });
  }
  
  };
  //#####################################################################
  return (
    <div className="contenido">
      <div className="contenido__texto">
        <h1>Asignación de Asesor interno de Residencia Profesional</h1>
      </div>
      <div className="Evalucionreporteresidente__preguntas">
        <div className="contenido__preguntas">
          <div className="informacion__pregunta">
            <span>Seleccione al Residente Aprobado:</span>
            
            <select
              value={newItem.nombreResidente}
              onChange={handleResidenteChange}
            >
              <option value="">Seleccionar Un Residente</option>
              {data &&
                data.data.map((item) => (
                  <option key={item.id} value={item.attributes.nombre}>
                    {item.attributes.nombre}
                  </option>
                ))}
            </select>
            <span>Nombre del Asesor:</span>
            <input
              type="text"
              name="name"
              value={newItem.asesorE}
              onChange={(e) =>
                setNewItem({ ...newItem, asesorE: e.target.value })
              }
            ></input>
            {errors.asesorE && <p style={{ color: "red" }}>{errors.asesorE}</p>}
            <span>Nombre del proyecto:</span>
            <input
              type="text"
              name="name"
              value={newItem.nombre_anteproyecto}
              onChange={(e) =>
                setNewItem({ ...newItem, nombre_anteproyecto: e.target.value })
              }
            ></input>
         <span>Numero de Control:</span>
            <input
              type="text"
              name="name"
              value={newItem.ncontrol}
              onChange={(e) =>
                setNewItem({ ...newItem, ncontrol: e.target.value })
              }
            ></input>
          </div>
          <div className="informacion__pregunta">
          <span>Nombre del Residente:</span>
            <input
              type="text"
              name="name"
              value={newItem.nombre}
              onChange={(e) =>
                setNewItem({ ...newItem, nombre: e.target.value })
              }
            ></input>
          <span>Carrera:</span>
            <input
              type="text"
              name="name"
              value={newItem.carrera}
              onChange={(e) =>
                setNewItem({ ...newItem, carrera: e.target.value })
              }
            ></input>
         <span>Periodo de Realizacion:</span>
            <input
              type="text"
              name="name"
              value={newItem.periodo}
              onChange={(e) =>
                setNewItem({ ...newItem, periodo: e.target.value })
              }
            ></input>
          </div>
        </div>
      </div>
      <button className="btn-asig" onClick={crear}>Crear</button>
      <input
        className="btn-asig"
        type="submit"
        name="register"
        value="Imprimir"
      ></input>
    </div>
  );
};
export default Asignacionasesorint;
