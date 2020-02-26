import React from 'react';
import { connect } from "react-redux";
// import { getCharacters } from "../redux/actions";

class ScoreBoard extends React.Component {

    scoreBoard () {
        return <div>
            Your Score : {this.props.score}
        </div>
    }


    render () {
        return this.scoreBoard();
    }
}
const mapStateToProps = state => {
    let { score } = state.boggleReducers === undefined ? [] : state.boggleReducers;
    return { score };
};
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);