import React, { useState } from 'react';
import GameForm from "./GameForm";

const Game = (props) => {
    const { name, description, id, category, likes, deleteGame, updateGame, like, } = props;


    const [showForm, setShowForm] = useState(false);

    return (
      <div style={{ margin: "15px", border: "6px solid red" }}>
        <h1>
          {id}- {name}
        </h1>
        <p>likes: {likes}</p>
        <p>{description}</p>
        <button onClick={() => deleteGame(id)}>delete me</button>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "cancel edit" : "edit"}
        </button>
        {showForm && (
          <GameForm
            updateGame={updateGame}
            id={id}
            category={category}
            name={name}
            description={description}
          />
        )}
        <button onClick={() => like(id)}>like</button>
      </div>
    );
  };

  export default Game;
//     const deleteHandler = async (id) => {
//         let res = await axios.delete(`/games/${id}`)
//         deleteGame(res.data.id)
//     }

//     return (
//         <div className="game-container">
//             <h1>
//                 {id}- {name}
//                 <span onClick={() => deleteHandler(id)}>delete</span>
//             </h1>
//             <p>likes: {likes}</p>
//             <p>{description}</p>
//         </div>
//     );
// };

