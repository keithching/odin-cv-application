import React, { Component } from 'react';
import '../styles/Common.css';

class EditButton extends Component  {

    render() {

        const { mode, id, editEntry, specificID } = this.props;

        return (
            <button className="editButton" onClick={(e) => editEntry(id, e, specificID)}>
                {mode === 'read' ? <i id="edit" className="fas fa-edit"></i> : <i id="update" className="far fa-check-square"></i>}
            </button>
        );
    }

}

class DeleteButton extends Component {

    render() {

        const { id, deleteEntry, specificID } = this.props;

        return (
            <button className="deleteButton" onClick={(e) => deleteEntry(id, e, specificID)}>
                <i className="fas fa-trash-alt"></i>
            </button>
        );

    }
}


export {
    EditButton, 
    DeleteButton
};