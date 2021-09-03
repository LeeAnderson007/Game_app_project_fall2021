import axios from 'axios';
import React, { useState } from 'react';
import GameForm from "./GameForm";
import Games from './Games';

const App = () => {
    const [games, setGames] = useState([]);
    const [errors, setErrors] = useState(null);
    const [showForm, setShowForm] = useState(true);
    

    const getGames = async () => {
        try {
        let res = await axios.get("/games");
        //console.log('clicked, TODO: make this work')
        setGames(res.data);
    } catch (err) {}
    };
    

    const deleteGame = async (id) => {
        try {
          // delete from db
          await axios.delete(`/games/${id}`);
          // remove from ui (state)
          const newGames = games.filter((g) => g.id !== id);
          setGames(newGames);
        } catch (err) {
          alert("failed to delete");
          console.log(err);
        }
      };
    // const deleteGame = (id) => {
    //     try {
    //     const filteredGames = games.filteredGames( game => {
    //         return game.id !== id
    //     })
    //     setGames(filteredGames)
    // };

    const updateGame= async (game) => {
        console.log(game);
        try {
            let res = await axios.put(`/games${game.id}`, game);
            let newGames = games.map((g) => (g.id == game.id ? game : g));
            setGames(newGames);
        } catch (err) {
            alert("err");
        }
    };

    const like = async (id) => {
        console.log(id);
        try {
          // I need api call...
          let res = await axios.put(`/games/${id}/like`);
          let newGames = games.map((g) => (g.id === id ? res.data : g));
          setGames(newGames);
        } catch (err) {}
      };

      const addGame = (game) => {
        console.log(game);
        try {
            // reset any errors if there was one
            setErrors(null);
            // add to datatbase
            let res = await axios.post("/games", game);
            console.log(res);
            //if successfull add to state
            setGames([res.data, ...games]);
          } catch (err) {
            setErrors(err.response.data.errors);
          }
    };
    
    return (
        <div style={{ margin: "15px", border: "6px solid blue" }}>
      <h1>App</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "hide form" : "new game form"}
      </button>
      <br />
      {showForm && <GameForm error={errors} addGameProp={addGame} />}
      <button onClick={getGames}>get Games</button>
            <Games games={games} deleteGame={deleteGame} addGame={addGame} updateGame={updateGame} like={like}/>
        </div>
    );
};

export default App;


