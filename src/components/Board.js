import React from 'react';
import { connect } from "react-redux";
import { getCharacters } from "../redux/actions";
class Board extends React.Component {
    componentDidMount () {
        this.props.getCharacters();
    }

    table () {
        var characters = this.props.characters;
        var tableData = characters.map(row => {
            let td = row.map((ch, index) => {
                return <td key={index}>{ch.toUpperCase()}</td>;
            });
            return <tr key={row}>{td}</tr>;
        });

        return (<table className="table board" border="1">
            <tbody>
                {tableData}
            </tbody>
        </table>);
    }

    render () {
        return this.table();
    }
}
const mapStateToProps = state => {
    let { characters } = state.boggleReducers === undefined ? [] : state.boggleReducers;
    return { characters };
};
const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => {
            dispatch(getCharacters());

        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);;