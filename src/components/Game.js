import React from 'react';
import wordChecker from '../services/wordChecker';
import { connect } from "react-redux";
import { addScore, addWord, resetScore, getCharacters } from "../redux/actions";
import checkSpell from '../services/spellChecker';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            errorMessage: '',
            gameStarted: false,
            timer: ''
        }

        this.submitWord = this.submitWord.bind(this);
        this.startGame = this.startGame.bind(this);
        this.onWordChange = this.onWordChange.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }

    errorBox () {
        if (this.state.errorMessage !== '') {
            return (<div className="alert alert-danger" role="alert">
                {this.state.errorMessage}
            </div>);
        }
        return;
    }

    game () {
        let errorBox = this.errorBox()
        let btn = '';
        let wordInput = <input type="text" value={this.state.word} onChange={this.onWordChange} onKeyPress={this.keyPressed} disabled={!this.state.gameStarted}></input>;
        let timer = <span>{this.state.timer}</span>;
        if (this.state.gameStarted) {
            btn = <button onClick={this.submitWord}>Submit Word</button>;
        } else {
            btn = <button onClick={this.startGame} disabled={this.props.characters.length < 1}>Start the Game</button>;
        }

        return (
            <div>
                <div>
                    {timer}
                </div>

                {wordInput}
                {btn}
                {errorBox}
            </div>
        );
    }

    keyPressed (e) {
        if (e.charCode === 13) {
            this.submitWord();
        }
    }
    async startGame () {
        console.log('game started');
        this.props.resetScore();
        this.setState({ gameStarted: true });
        let gametime = 60;
        let stopAt = new Date(new Date().setSeconds(new Date().getSeconds() + gametime)).getTime();
        var me = this;
        let interval = await setInterval(function () {
            var now = new Date().getTime();
            var time = stopAt - now;
            var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((time % (1000 * 60)) / 1000);
            // console.log(minutes + ':' + seconds);
            if (time < 0) {
                me.endGame();
                clearInterval(interval);
            } else {
                me.setState({ timer: 'Time remaining : ' + minutes + ':' + seconds })
            }
        }, 1000);

    }
    endGame () {
        console.log('reset geme');
        this.props.getCharacters()
        this.setState({ gameStarted: false, timer: '' });
    }

    async submitWord () {
        let isWordUsed = this.props.words.includes(this.state.word);
        if (isWordUsed) {
            console.log('word already used');
            this.setState({ errorMessage: 'word already used' });
            return;
        }

        let doesWordExist = await wordChecker(this.props.characters, this.state.word);
        if (!doesWordExist) {
            console.log('word doesnt exist');
            this.setState({ errorMessage: 'word does not exist in the board' });
            return;
        }

        let isWordCorrect = await checkSpell(this.state.word);
        if (!isWordCorrect) {
            console.log('not word');
            this.setState({ errorMessage: 'word is not in dictionary' });
            return;
        }

        this.setState({ errorMessage: '' });
        this.props.addWord(this.state.word)
        this.props.addScore(this.state.word.length);
        this.setState({ word: '' });

    }

    onWordChange (e) {
        this.setState({ word: e.target.value });
    }

    render () {
        return this.game();
    }
}

const mapStateToProps = state => {
    let { words, score, characters } = state.boggleReducers === undefined ? [] : state.boggleReducers;
    return { words, score, characters };
};
const mapDispatchToProps = {
    addScore,
    addWord,
    resetScore,
    getCharacters
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);