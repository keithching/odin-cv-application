import React from 'react';
import { EditButton, DeleteButton } from './Common';
import '../styles/PracticalExperience.css';

const PracticalExperience = (props) => {

    const { works, addWork, handleChange, editEntry, deleteEntry } = props;

    const id = 'work';

    return (
        <div className="practicalExperience">
            <ul>
                {works.map(work => {
                    return (
                        <li key={work.id} className="work">
                            <Work work={work} handleChange={handleChange} />
                            <EditButton mode={work.mode} id={id} editEntry={editEntry} specificID={work.id} />
                            <DeleteButton id={id} deleteEntry={deleteEntry} specificID={work.id} />
                        </li>
                    );
                })}
            </ul>
            <button className="addWork" onClick={addWork}>Add Work</button>
        </div>
    );

};

const Work = (props) => {

    const { work, handleChange } = props;

    const id = 'work';

    if (work.mode === 'read') {
        return (
            <div>
                <div>
                    <span className="display">{work.companyName}</span>
                </div>
                <div>
                    <span className="display">{work.positionTitle}</span>
                </div>
                <div>
                    <span className="display">{work.mainTasks}</span>
                </div>
                <div>
                    <span className="display">{work.dateFromAndUntil}</span>
                </div>
            </div>
        );
    } else if (work.mode === 'edit') {
        return (
            <div>
                <div>
                    <label htmlFor="companyNameInput">Company Name: </label>
                    <input
                        onChange={(e) => handleChange(id, e, work.id)}
                        className="display"
                        id="companyNameInput"
                        type="text"
                        value={work.companyName}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="positionTitleInput">Position Title: </label>
                    <input
                        onChange={(e) => handleChange(id, e, work.id)}
                        className="display"
                        id="positionTitleInput"
                        type="text"
                        value={work.positionTitle}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="mainTasksInput">Main Tasks: </label>
                    <input
                        onChange={(e) => handleChange(id, e, work.id)}
                        className="display"
                        id="mainTasksInput"
                        type="text"
                        value={work.mainTasks}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="dateFromAndUntilInput">Date From and Until: </label>
                    <input
                        onChange={(e) => handleChange(id, e, work.id)}
                        className="display"
                        id="dateFromAndUntilInput"
                        type="text"
                        value={work.dateFromAndUntil}
                        autoComplete="off"
                    />
                </div>
            </div>
        );
    }

};


export default PracticalExperience;