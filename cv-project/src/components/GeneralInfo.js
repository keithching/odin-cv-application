import React, { Component } from 'react';
import '../styles/GeneralInfo.css';
import { EditButton } from './Common';


const Name = (props) => {

    const { mode, name, handleChange, editEntry } = props;

    const id = 'name';


    if (mode === 'read') { // cannot be just a universal mode.. needs to be specific
        return (
            <div className="generalInfo_name">
                <label htmlFor="nameInput">Name: </label>
                <span className="display">{name}</span>
                <EditButton mode={mode} id={id} editEntry={editEntry} />
            </div>
        );
    }

    else if (mode === 'edit') {
        return (
            <div className="generalInfo_name">
                <label htmlFor="nameInput">Name: </label>
                <input
                    onChange={(e) => handleChange(id, e)}
                    id="nameInput"
                    type="text"
                    value={name}
                    autoComplete="off"
                />
                <EditButton mode={mode} id={id} editEntry={editEntry} />
            </div>
        );
    }

};


const Email = (props) => {

    const { mode, email, handleChange, editEntry } = props;

    const id = 'email';

    if (mode === 'read') {
        return (
            <div className="generalInfo_email">
                <label htmlFor="emailInput">Email: </label>
                <span className="display">{email}</span>
                <EditButton mode={mode} id={id} editEntry={editEntry} />
            </div>
        );
    }

    else if (mode === 'edit') {
        return (
            <div className="generalInfo_email">
                <label htmlFor="emailInput">Email: </label>
                <input
                    onChange={(e) => handleChange(id, e)}
                    id="emailInput"
                    type="text"
                    value={email}
                    autoComplete="off"
                />
                <EditButton mode={mode} id={id} editEntry={editEntry} />
            </div>
        );
    }

}

const Phone = (props) => {

    const { mode, phone, handleChange, editEntry } = props;

    const id = 'phone';

    if (mode === 'read') {
        return (
            <div className="generalInfo_phone">
                <label htmlFor="phoneInput">Phone: </label>
                <span className="display">{phone}</span>
                <EditButton mode={mode} id={id} editEntry={editEntry} />
            </div>
        );
    }

    else if (mode === 'edit') {
        return (
            <div className="generalInfo_phone">
                <label htmlFor="emailInput">Phone: </label>
                <input
                    onChange={(e) => handleChange(id, e)}
                    id="phoneInput"
                    type="text"
                    value={phone}
                    autoComplete="off"
                />
                <EditButton mode={mode} id={id} editEntry={editEntry} />
            </div>
        );
    }    

}


export { 
    Name,
    Email,
    Phone
 };