import React from 'react';

class Characters extends React.Component {

    table () {
        const characters = [
            ['x', 'j', 'o', 'y'],
            ['u', 'r', 't', 's'],
            ['s', 'u', 'n', 's'],
            ['i', 'o', 'a', 'l'],
        ];
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
export default Characters;