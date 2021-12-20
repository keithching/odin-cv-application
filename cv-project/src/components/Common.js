import React from 'react';
import '../styles/Common.css';

const EditButton = (props) => {

    const { mode, id, editEntry, specificID } = props;

    return (
        <button className="editButton" onClick={(e) => editEntry(id, e, specificID)}>
            {mode === 'read' ? <i id="edit" className="fas fa-edit"></i> : <i id="update" className="far fa-check-square"></i>}
        </button>
    );

};

const DeleteButton = (props) => {

    const { id, deleteEntry, specificID } = props;

    return (
        <button className="deleteButton" onClick={(e) => deleteEntry(id, e, specificID)}>
            <i className="fas fa-trash-alt"></i>
        </button>
    );

};


export {
    EditButton, 
    DeleteButton
};