import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import Game from './components/Game';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import WordList from './components/WordList';
function App () {

  return (
    <Provider store={store}>
      < div className="row" >
        <div className="col-md-8">
          <Board></Board>
          <Game></Game>
        </div>
        <div className="col-md-2">
          <ScoreBoard></ScoreBoard>
          <WordList></WordList>
        </div>
      </div >
      
    </Provider>


  );
}

export default App;
