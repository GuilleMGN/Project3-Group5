import React from "react";

function Table(props) {
    return (
        <table className="table table-striped table-hover table-condensed">
            <thead>
                <tr>
                    <th data-field="name">Name <span> </span></th>
                    <th>PurrCoin</th>
                </tr>
            </thead>
            <tbody>
                { (props.users.length > 0) ? props.users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.purrcoin}</td>
                        </tr>
                    )
                }) : <tr><td colSpan="5">No results found. </td></tr> }
            </tbody>
        </table>
    )
}

export default Table;