import React, { Component } from 'react';
import '../styles/CV.css';

class CV extends Component {

    render() {

        const { name, email, phone, educations, works } = this.props;

        return (
            <div>
                <div className="CV_name">
                    {name}
                </div>
                <div className="CV_email_phone">
                    {email} | {phone}
                </div>
                <div className="CV_practicalExperience_title">EXPERIENCE</div>
                <div className="CV_works">
                    <ul>
                        {works.map(work => {
                            return (
                                <li key={work.id} className="CV_work">
                                    <div className="row">
                                        <div className="positionTitle_companyName">
                                            {work.positionTitle} at {work.companyName}
                                        </div>
                                        <div className="dateFromAndUntil">
                                            {work.dateFromAndUntil}
                                        </div>
                                    </div>
                                    <div className="mainTasks">
                                        {work.mainTasks}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="CV_educationalExperience_title">EDUCATION</div>
                <div className="CV_educations">
                    <ul>
                        {educations.map(education => {
                            return (
                                <li key={education.id} className="CV_education">
                                    <div className="row">
                                        <div className="schoolName">
                                            {education.schoolName}
                                        </div>
                                        <div className="dateOfStudy">
                                            {education.dateOfStudy}
                                        </div>
                                    </div>
                                    <div className="titleOfStudy">
                                        {education.titleOfStudy}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CV;