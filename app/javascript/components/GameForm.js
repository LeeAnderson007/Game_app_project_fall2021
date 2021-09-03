import React, { useState } from "react";
import Error from "./Error";

const GameForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const [category, setCategory] = useState(props.category ? props.category : "");
  const [description, setDescription] = useState(props.description ? props.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.id) {
      props.updateGame({ id: props.id, name, category });
    } else {
      props.addGameProp({ name, category });
    }
    if (!props.error) {
      setName("");
      setCategory("");
    }
  };
  return (
    <div style={{ margin: "15px", border: "6px solid yellow" }}>
      <h1>Game Form</h1>
      {props.error && <Error error={props.error} />}
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p>category</p>
        <input
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <p>description</p>
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>{props.id ? "Update Game" : "Add"}</button>
      </form>
    </div>
  );
};


export default GameForm;