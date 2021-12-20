import React, { useState } from 'react';
import { Name, Email, Phone } from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import CV from './components/CV';
import uniqid from 'uniqid';
import './styles/App.css';


const App = () => {

  const [ name, setName ] = useState({
    text: 'Name',
    mode: 'read'
  });

  const [ email, setEmail] = useState({
    text: 'Email', 
    mode: 'read'
  });

  const [ phone, setPhone ] = useState({
    text: 'Phone', 
    mode: 'read'  
  });

  const [ education, setEducation ] = useState({
    mode: 'read',
    id: uniqid(),
    schoolName: 'School Name',
    titleOfStudy: 'Title of Study',
    dateOfStudy: 'Date of Study'
  });

  const [ educations, setEducations ] = useState([]);

  const [ work, setWork ] = useState({
    mode: 'read',
    id: uniqid(),
    companyName: 'Company Name',
    positionTitle: 'Position Title',
    mainTasks: 'Main Tasks',
    dateFromAndUntil: 'Date from and until'
  });

  const [ works, setWorks ] = useState([]);


  const handleChange = (id, e, specificID) => {

    if (id === 'name') {
      setName({
        text: e.target.value,
        mode: name.mode
      });
    } else if (id === 'email') {
      setEmail({
          text: e.target.value,
          mode: email.mode 
      });
    } else if (id === 'phone') {
        setPhone({
          text: e.target.value,
          mode: phone.mode 
        });
    } else if (id === 'education') {

      setEducations((prevEducations) => {
        const matchingEducation = prevEducations.find(prevEducation => prevEducation.id === specificID);
        const updatedEducations = [...prevEducations];

        for (let i = 0; i < updatedEducations.length; i++) {
          if (updatedEducations[i] === matchingEducation) {
            if (e.target.id === 'schoolNameInput') {
              updatedEducations[i].schoolName = document.getElementById('schoolNameInput').value;
            } else if (e.target.id === 'titleOfStudyInput') {
              updatedEducations[i].titleOfStudy = document.getElementById('titleOfStudyInput').value;
            } else if (e.target.id === 'dateOfStudyInput') {
              updatedEducations[i].dateOfStudy = document.getElementById('dateOfStudyInput').value;
            }
          }
        }
        
        return updatedEducations;
      });


    } else if (id === 'work') {

      setWorks((prevWorks) => {
        const matchingWork = prevWorks.find(work => work.id === specificID);
        const updatedWorks = [...prevWorks];

        updatedWorks.forEach(work => {
          if (work === matchingWork) {
            if (e.target.id === 'companyNameInput') {
              work.companyName = document.getElementById('companyNameInput').value;
            } else if (e.target.id === 'positionTitleInput') {
              work.positionTitle = document.getElementById('positionTitleInput').value;
            } else if (e.target.id === 'mainTasksInput') {
              work.mainTasks = document.getElementById('mainTasksInput').value;
            } else if (e.target.id === 'dateFromAndUntilInput') {
              work.dateFromAndUntil = document.getElementById('dateFromAndUntilInput').value;
            }
          }
        });

        return updatedWorks;
      });
    }
  };

  
  const editEntry = (id, e, specificID) => {

    if (id === 'name') {

      setName((prevName) => {
        if (prevName.mode === 'read') {
          return {
            text: prevName.text,
            mode: 'edit'
          };
        } else if (prevName.mode === 'edit') {
          return {
            text: prevName.text,
            mode: 'read'
          }
        }
      });
      
    } else if (id === 'email') {

      setEmail((prevEmail) => {
        if (prevEmail.mode === 'read') {
          return {
            text: prevEmail.text,
            mode: 'edit'
          };
        } else if (prevEmail.mode === 'edit') {
          return {
            text: prevEmail.text,
            mode: 'read'
          };
        }
      });

    } else if (id === 'phone') {

      setPhone((prevPhone) => {
        if (prevPhone.mode === 'read') {
          return {
            text: prevPhone.text,
            mode: 'edit'
          };
        } else if (prevPhone.mode === 'edit') {
          return {
            text: prevPhone.text,
            mode: 'read'
          };
        }
      });

    } else if (id === 'education') {

      setEducations((prevEducations) => {
        const matchingEducation = prevEducations.find(prevEducation => prevEducation.id === specificID);
        const updatedEducations = [...prevEducations]; // spread the existing array into a new array
        // https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render

        for (let i = 0; i < updatedEducations.length; i++) {
          if (updatedEducations[i] === matchingEducation) {
            if (e.target.id === 'edit') {
              updatedEducations[i].mode = 'edit';
            } else if (e.target.id === 'update') {
              updatedEducations[i].mode = 'read';
            }
          }
        }

        return updatedEducations;
      });

    } else if (id === 'work') {

      setWorks((prevWorks) => {
        const matchingWork = prevWorks.find(work => work.id === specificID);
        const updatedWorks = [...prevWorks];

        updatedWorks.forEach(work => {
          if (work === matchingWork) {
            if (e.target.id === 'edit') {
              work.mode = 'edit';
            } else if (e.target.id === 'update') {
              work.mode = 'read';
            }
          }
        });
        
        return updatedWorks;
      });

    }
  };

  const deleteEntry = (id, e, specificID) => {

    if (id === 'education') {
      
      setEducations(() => {
        return educations.filter(education => education.id !== specificID);
      });

    } else if (id === 'work') {
      
      setWorks(() => {
        return works.filter(work => work.id !== specificID);
      });

    }

  };


  const addEducation = () => {

    setEducations(educations.concat(education));

    setEducation({
      mode: 'read',
      id: uniqid(),
      schoolName: 'School Name',
      titleOfStudy: 'Title of Study',
      dateOfStudy: 'Date of Study'
    });

  };


  const addWork = () => {

    setWorks(works.concat(work));

    setWork({
      mode: 'read',
      id: uniqid(),
      companyName: 'Company Name',
      positionTitle: 'Position Title',
      mainTasks: 'Main Tasks',
      dateFromAndUntil: 'Date from and until'
    });

  };


  return (
      <div className="main">
        <div className="left">
          <h2>General Information</h2>
          <div>
            <Name 
              mode={name.mode} 
              name={name.text} 
              handleChange={handleChange}
              editEntry={editEntry}
            />
          </div>
          <div>
            <Email 
              mode={email.mode} 
              email={email.text} 
              handleChange={handleChange}
              editEntry={editEntry}
            />
          </div>
          <div>
            <Phone
              mode={phone.mode} 
              phone={phone.text} 
              handleChange={handleChange}
              editEntry={editEntry}
            />
          </div>

          <h2>Educational Experience</h2>
          <div>
            <EducationalExperience
              educations={educations}
              addEducation={addEducation}
              handleChange={handleChange}
              editEntry={editEntry}
              deleteEntry={deleteEntry}
            />
          </div>

          <h2>Practical Experience</h2>
          <div>
            <PracticalExperience
              works={works}
              addWork={addWork}
              handleChange={handleChange}
              editEntry={editEntry}
              deleteEntry={deleteEntry}
            />
          </div>
        </div>
        <div className="right">
          <div className="container">
            <CV 
              name={name.text}
              email={email.text}
              phone={phone.text}
              educations={educations}
              works={works}
            />
          </div>
        </div>
      </div>
  );

};


export default App;


