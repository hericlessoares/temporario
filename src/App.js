import React,{useState}from "react";
//import api from './api';

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

const fsalario=(s,ss)=>{
 return(
   <div>
     <label>
       Salario
       <input type="text" value={s} onChange={(e)=>{ss(e.target.value)}}/>
     </label>
   </div>
 )
}
const fdependentes=(d,sd)=>{
  return(
    <div>
      <label>
        Dependentes
        <input type="text" value={d} onChange={(e)=>{sd(e.target.value)}}/>
      </label>
    </div>
  )
 }

 const fcalcular=(s,d,sr)=>{
  const calc=()=>{
    sr(s/d)
    }
    return(
      <div>
        <button onClick={calc}>Calcular</button>
      </div>
    )
 }

 const fresultado=(r)=>{
   return(
     <div>
       <p>Resultado:{r.toFixed(2)}</p>
     </div>
   )
 }

export default function App() {

  const [salario,setSalario]=useState(0)
  const [dependentes,setDependentes]=useState(0)
  const [resultado,setResultado]=useState(0)
  return (
    <>
      <Cabecalho />
      {fsalario(salario,setSalario)}
      {fdependentes(dependentes,setDependentes)}
      {fcalcular(salario,dependentes,setResultado)}
      {fresultado(resultado)}
    </>
  );
}


