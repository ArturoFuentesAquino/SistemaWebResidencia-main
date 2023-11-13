import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PaginaCor from "../PaginaCor"
import PaginaEstu from "../PaginaEstu";
import PaginaJefeCarrera from "../PaginaJefeCarrera"
/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const ProfileData = (props) => {
  console.log(props.graphData);

  if (props.graphData.jobTitle === "Estudiante") {
    // Realiza la navegación a la ruta "/home" si el jobTitle es "Estudiante"
    return (
        <Router>
      <div>
      {/*<PaginaJefeCarrera graphData={props} />*/}
      {/*<PaginaEstu graphData={props}/>*/}
      {/*<PaginaCor graphData={props}/>*/}
      <PaginaEstu graphData={props}/>*
      </div>
    </Router>
      );
  }

  return (
    <div id="profile-div">
      <p><strong>First Name: </strong> {props.graphData.givenName}</p>
      <p><strong>Last Name: </strong> {props.graphData.surname}</p>
      <p><strong>Email: </strong> {props.graphData.userPrincipalName}</p>
      <p><strong>Id: </strong> {props.graphData.id}</p>
      <p><strong>Job Title: </strong> {props.graphData.jobTitle}</p>
    </div>
  );
};
