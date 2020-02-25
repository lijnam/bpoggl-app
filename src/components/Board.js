import React from 'react';
import ScoreBoard from './ScoreBoard';
import InputBox from './InputBox';
import Characters from './Characters';
class Board extends React.Component {

   

    board () {
        return (< div className="row" >
            <div className="col-md-8">
                <Characters></Characters>
                <InputBox></InputBox>
            </div>
            <div className="col-md-2">
                <ScoreBoard></ScoreBoard>
            </div>

        </div >
        );
    }

    render () {
        return this.board();
    }
}
export default Board;