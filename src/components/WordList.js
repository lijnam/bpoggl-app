import React from 'react';
import { connect } from "react-redux";

class WordList extends React.Component {

    wordList () {
        let lists = this.props.words.map((word, index) => (<li key={index}>{word}</li>))
        return <div>
            Used Words
            <ul>
                {lists}
            </ul>
        </div>
    }


    render () {
        return this.wordList();
    }
}
const mapStateToProps = state => {
    let { words } = state.boggleReducers === undefined ? [] : state.boggleReducers;
    return { words };
};
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(WordList);