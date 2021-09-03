import React from 'react';
import Game from "./Game";

const Games = ({ games, deleteGame, updateGame, like }) => {
    return (
      <div style={{ margin: "15px", border: "6px solid green" }}>
        <h1>Games</h1>
        {games.map((game) => (
          <Game
            like={like}
            updateGame={updateGame}
            deleteGame={deleteGame}
            key={game.id}
            {...game}
          />
          // <Item key={item.id} id={item.id} likes={item.likes}/>
        ))}
      </div>
    );
  };

export default Games;
// const Games = (props) => {
//     const { games, deleteGame } = props;

//     const renderGames = () => {
//         if (games.length == 0) {
//             return <h1>No Games</h1>;
//         }

//         return games.map((game) => {
//             return <Game 
//             key={game.id} 
//             deleteGame={deleteGame}
//             {...game} />;
//         });
//     };
//     return (
//         <div className="items.container">
//             <h1>Games Component</h1>
//             {renderGames()}
//         </div>
//     );
// };




