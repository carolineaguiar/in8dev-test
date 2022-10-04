import React, { useState } from "react"
import "./App.css";
import Axios from "axios";

function App() {

  const [values, setValues] = useState();
  const handleChangeValues = (value) => {
    setValues(preValue=>({
      ...preValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = (values) =>{
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      email: values.email,
      birthDate: values.birthDate,
      phone: values.phone,
    }).then((response) => {
      console.log(response)
    });
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">CADASTRO</h1>
        <p>Nome</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Nome Completo" 
          className="register-input"
          onChange={handleChangeValues}
        />
        <p>E-mail</p>
        <input 
          type="email" 
          name="email" 
          placeholder="E-mail" 
          className="register-input"
          onChange={handleChangeValues}
        />
        <p>Data de Nascimento</p>
        <input 
          type="date" 
          name="birthDate" 
          className="register-input"
          onChange={handleChangeValues}
        />
        <p>Telefone </p>
        <input 
          type="phone" 
          name="phone" 
          placeholder="Telefone" 
          className="register-input"
          onChange={handleChangeValues}
        /> <br/>
      </div>
      <button className="register-button" onClick={() => handleClickButton(values)}>CADASTRAR</button>
    </div>
  );
}

export default App;
