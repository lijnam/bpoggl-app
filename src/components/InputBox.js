import React from 'react';
import searchService from '../services/search';
class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            characters: [
                ['x', 'j', 'o', 'y'],
                ['u', 'r', 't', 's'],
                ['s', 'u', 'n', 's'],
                ['i', 'o', 'a', 'l'],
            ]
        }

        this.checkWord = this.checkWord.bind(this);
        this.onWordChange = this.onWordChange.bind(this);
    }


    inputBox () {
        return (<div>
            <input type="text" value={this.state.word} onChange={this.onWordChange}></input>
            <button onClick={this.checkWord}>Submit</button>
        </div>);
    }

    /* async componentDidMount () {
        await this.setState({ word: 'run' })
        if (this.checkWord()) {
            alert('found!!!')
        } else {
            alert('not found!!!')
        }
    } */


    async checkWord (e) {
        for (let k = 0; k < this.state.characters.length; k++) {
            for (let l = 0; l < this.state.characters[0].length; l++) {
                let used = [];
                let current_char = 0;
                if (this.state.characters[k][l] === this.state.word[0]) {
                    // console.log('found ' + this.state.word[0] + ' at ' + k + ',' + l)
                    used.push(k + '-' + l);
                    current_char++;
                    let result = await searchService(this.state.characters, k, l, used, this.state.word, current_char);
                    console.log('main: ' + result);
                    if (result === true) {
                        return result;
                    }
                }
            }
        }
        return false;

    }

    initUsed () {
        var used = [];
        // console.log('char 0 length:' + this.state.characters[0].length)
        for (let k = 0; k < this.state.characters.length; k++) {
            var falsValue = [];
            for (let l = 0; l < this.state.characters[0].length; l++) {
                falsValue.push(false)
            }
            used.push(falsValue);
        }
        return used;
    }

    onWordChange (e) {
        this.setState({ word: e.target.value });
    }

    render () {
        return this.inputBox();
    }
}
export default InputBox;