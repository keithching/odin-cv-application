import React, { Component } from 'react';
import { EditButton, DeleteButton } from './Common';
import '../styles/EducationalExperience.css';

class EducationalExperience extends Component {

    render() {
        
        const { educations, addEducation, handleChange, editEntry, deleteEntry } = this.props;

        const id = 'education';

        return (
            <div className="educationalExperience">
                <ul>
                    {educations.map(education => {
                        return (
                            <li key={education.id} className="education">
                                <Education education={education} handleChange={handleChange} />
                                <EditButton mode={education.mode} id={id} editEntry={editEntry} specificID={education.id} />
                                <DeleteButton id={id} deleteEntry={deleteEntry} specificID={education.id} />
                            </li>
                        );
                    })}
                </ul>
                <button className="addEducation" onClick={addEducation}>Add Education</button>
            </div>
        );
    }
}

const Education = (props) => {

    const { education, handleChange } = props;

    const id = 'education';

    if (education.mode === 'read') {
        return (
            <div>
                <div>
                    <span className="display">{education.schoolName}</span>
                </div>
                <div>
                    <span className="display">{education.titleOfStudy}</span>
                </div>
                <div>
                    <span className="display">{education.dateOfStudy}</span>
                </div>
            </div>
        );
    } else if (education.mode === 'edit') {
        return (
            <div>
                <div>
                    <label htmlFor="schoolNameInput">School Name: </label>
                    <input
                        onChange={(e) => handleChange(id, e, education.id)}
                        className="display"
                        id="schoolNameInput"
                        type="text"
                        value={education.schoolName}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="titleOfStudyInput">Title of Study: </label>
                    <input 
                        onChange={(e) => handleChange(id, e, education.id)}
                        className="display"
                        id="titleOfStudyInput"
                        type="text"
                        value={education.titleOfStudy}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="dateOfStudyInput">Date of Study: </label>
                    <input
                        onChange={(e) => handleChange(id, e, education.id)}
                        className="display"
                        id="dateOfStudyInput"
                        type="text"
                        value={education.dateOfStudy}
                        autoComplete="off"
                    />
                </div>
            </div>
        );  
    }

}


export default EducationalExperience;