import React, { Component } from  'react';
import api from '../../api.js'


export default class Conta extends Component{



    constructor(props){
        super(props);
        this.salario=""
        this.dependentes=""
      
    }
    handleSalario = (event) =>{
        this.salario = (event.target.value);
        console.log(this.salario);
    }
    handledependentes = (event) =>{
        this.dependentes = (event.target.value);
        console.log(this.dependentes);
    }
   


    enviarformulario = (event) =>{
      api.post('/calculo',this.salario, this.dependentes)}

      render(){
        return(
            <form
                className="inputs"
                onSubmit={this.enviarformulario.bind(this)}
          
         >
       
      <h5>Este cálculo demostra como obter um valor de salário líquido a partir do salário bruto e dos principais descontos do salário (INSS e IRRF)</h5>
       

        
      
          
       <input
                  className="inp"
                  type="number"
                  placeholder="Salario"
                  min="1"
                  step=".01"
                  onChange={this.handleSalario.bind(this)}

                />


         
          <input 
          className="detalhe"
          type="Number"
          placeholder="Dependentes"
          step="0.01" min="0" 
          />
        
        <button className="form-cadastro_input form-cadastro_submit">
          Calcular
        </button>
      </form>
  );
};
}
