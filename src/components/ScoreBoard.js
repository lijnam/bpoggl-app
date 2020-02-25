import React from 'react';

class ScoreBoard extends React.Component {

    scoreBoard () {
       return <div>
            Your Score : 50
        </div>
    }


    render () {
        return this.scoreBoard();
    }
}
export default ScoreBoard;