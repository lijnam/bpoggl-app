import React from 'react';
import wordChecker from '../services/wordChecker';
import { connect } from "react-redux";
import { addScore, addWord } from "../redux/actions";

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
        }

        this.submitWord = this.submitWord.bind(this);
        this.onWordChange = this.onWordChange.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }


    inputBox () {
        return (<div>
            <input type="text" value={this.state.word} onChange={this.onWordChange} onKeyPress={this.keyPressed}></input>
            <button onClick={this.submitWord}>Submit</button>
        </div>);
    }

    keyPressed (e) {
        if (e.charCode === 13) {
            this.submitWord();
        }
    }

    async submitWord () {
        let doesWordExist = await wordChecker(this.props.characters, this.state.word);
        let isWordUsed = this.props.words.includes(this.state.word);
        let isWordCorrect = true
        if (!isWordCorrect) {

        } else if (!doesWordExist) {

        } else if (isWordUsed) {

        }
        else {
            this.props.addWord(this.state.word)
            this.props.addScore(this.state.word.length);
            this.setState({ word: '' });
        }
    }



    onWordChange (e) {
        this.setState({ word: e.target.value });
    }

    render () {
        return this.inputBox();
    }
}
const mapStateToProps = state => {
    let { words, score, characters } = state.boggleReducers === undefined ? [] : state.boggleReducers;
    return { words, score, characters };
};
const mapDispatchToProps = {
    addScore,
    addWord
}
export default connect(mapStateToProps, mapDispatchToProps)(InputBox);