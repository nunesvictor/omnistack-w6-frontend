import React, { useState } from "react";
import api from '../../services/api';

import logo from "../../assets/logo.svg";
import "./styles.css";

const Main = props => {
  const [newBox, setNewBox] = useState('');

  const handleInputChange = (e) => {
    setNewBox(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    
    const response = await api.post('boxes', {
      title: newBox
    });

    props.history.push(`/box/${response.data._id}`);
  }

  return (
    <div id="main-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <input
          value={newBox}
          placeholder="Criar um box"
          onChange={handleInputChange}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default Main;
