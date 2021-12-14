import React, { Component } from 'react';
import { Name, Email, Phone } from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import CV from './components/CV';
import uniqid from 'uniqid';
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      // edit as individual
      name: {
        text: 'Name',
        mode: 'read'
      },
      email: {
        text: 'Email',
        mode: 'read'
      },
      phone: {
        text: 'Phone',
        mode: 'read'
      },

      // edit as a group
      education: {
        mode: 'read',
        id: uniqid(),
        schoolName: 'School Name',
        titleOfStudy: 'Title of Study',
        dateOfStudy: 'Date of Study'
      },

      educations: [],

      // edit as a group
      work: {
        mode: 'read',
        id: uniqid(),
        companyName: 'Company Name',
        positionTitle: 'Position Title',
        mainTasks: 'Main Tasks',
        dateFromAndUntil: 'Date from and until'
      },

      works: [],


    }

    this.handleChange = this.handleChange.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addWork = this.addWork.bind(this);
  }


  handleChange = (id, e, specificID) => {

    if (id === 'name') {
      this.setState((state) => {
        return {
            name: {
              text: e.target.value,
              mode: state.name.mode
            }
        }
      });
    }
    else if (id === 'email') {
      this.setState((state) => {
        return {
            email: {
              text: e.target.value,
              mode: state.email.mode 
            }
        }
      });
    }
    else if (id === 'phone') {
      this.setState((state) => {
        return {
            phone: {
              text: e.target.value,
              mode: state.phone.mode 
            }
        }
      });
    } else if (id === 'education') {

      this.setState((state) => {

        const matchingEducation = state.educations.find(education => education.id === specificID);

        const updatedEducations = state.educations;

        updatedEducations.forEach(education => {
          if (education === matchingEducation) {
            if (e.target.id === 'schoolNameInput') {
              education.schoolName = document.getElementById('schoolNameInput').value;
            } else if (e.target.id === 'titleOfStudyInput') {
              education.titleOfStudy = document.getElementById('titleOfStudyInput').value;
            } else if (e.target.id === 'dateOfStudyInput') {
              education.dateOfStudy = document.getElementById('dateOfStudyInput').value;
            }
          }
        });

        return {
          educations: updatedEducations
        }

      });
    } else if (id === 'work') {

      this.setState((state) => {

        const matchingWork = state.works.find(work => work.id === specificID);

        const updatedWorks = state.works;

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

        return {
          works: updatedWorks
        }

      });
    }

  };

  
  editEntry = (id, e, specificID) => {

    if (id === 'name') {

      this.setState((state) => {
        if (state.name.mode === 'read') {
  
          return {
              name: {
                text: state.name.text,
                mode: 'edit'
              }
            };
  
        } else if (state.name.mode === 'edit') {
  
          return {
              name: {
                text: state.name.text,
                mode: 'read'
              }
          };
  
        }
      });
      
    } else if (id === 'email') {

      this.setState((state) => {
        if (state.email.mode === 'read') {
  
          return {
              email: {
                text: state.email.text,
                mode: 'edit'
              }
          };
  
        } else if (state.email.mode === 'edit') {
  
          return {
              email: {
                text: state.email.text,
                mode: 'read'
              }
          };
  
        }
      });
    } else if (id === 'phone') {

      this.setState((state) => {
        if (state.phone.mode === 'read') {
  
          return {
              phone: {
                text: state.phone.text,
                mode: 'edit'
              }
          };
  
        } else if (state.phone.mode === 'edit') {
  
          return {
              phone: {
                text: state.phone.text,
                mode: 'read'
              }
          };
  
        }
      });

    } else if (id === 'education') {

      this.setState((state) => {

        const matchingEducation = state.educations.find(education => education.id === specificID);
  
        const updatedEducations = state.educations;

        updatedEducations.forEach(education => {
          if (education === matchingEducation) {
            if (e.target.id === 'edit') {
              education.mode = 'edit';
            } else if (e.target.id === 'update') {
              education.mode = 'read';
            }

          }
        });
        
        return {
          educations: updatedEducations
        };

      });

    } else if (id === 'work') {

      this.setState((state) => {

        const matchingWork = state.works.find(work => work.id === specificID);
  
        const updatedWorks = state.works;

        updatedWorks.forEach(work => {
          if (work === matchingWork) {
            if (e.target.id === 'edit') {
              work.mode = 'edit';
            } else if (e.target.id === 'update') {
              work.mode = 'read';
            }

          }
        });
        
        return {
          works: updatedWorks
        };

      });

    }

  };


  deleteEntry = (id, e, specificID) => {

    if (id === 'education') {
      
      this.setState((state) => {
        return {
          educations: state.educations.filter(education => education.id !== specificID)
        };
      });

    } else if (id === 'work') {
      
      this.setState((state) => {
        return {
          works: state.works.filter(work => work.id !== specificID)
        };
      });

    }

  };




  addEducation = () => {
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        mode: 'read',
        id: uniqid(),
        schoolName: 'School Name',
        titleOfStudy: 'Title of Study',
        dateOfStudy: 'Date of Study'
      }
    })
  };


  addWork = () => {
    this.setState({
      works: this.state.works.concat(this.state.work),
      work: {
        mode: 'read',
        id: uniqid(),
        companyName: 'Company Name',
        positionTitle: 'Position Title',
        mainTasks: 'Main Tasks',
        dateFromAndUntil: 'Date from and until'
      }
    })
  };



  render() {

    const { name, email, phone, education, educations, work, works} = this.state;

    return (
      <div className="main">
        <div className="left">
          <h2>General Information</h2>
          <div>
            <Name 
              mode={name.mode} 
              name={name.text} 
              handleChange={this.handleChange}
              editEntry={this.editEntry}
            />
          </div>
          <div>
            <Email 
              mode={email.mode} 
              email={email.text} 
              handleChange={this.handleChange}
              editEntry={this.editEntry}
            />
          </div>
          <div>
            <Phone
              mode={phone.mode} 
              phone={phone.text} 
              handleChange={this.handleChange}
              editEntry={this.editEntry}
            />
          </div>

          <h2>Educational Experience</h2>
          <div>
            <EducationalExperience
              educations={educations}
              addEducation={this.addEducation}
              handleChange={this.handleChange}
              editEntry={this.editEntry}
              deleteEntry={this.deleteEntry}
            />
          </div>

          <h2>Practical Experience</h2>
          <div>
            <PracticalExperience
              works={works}
              addWork={this.addWork}
              handleChange={this.handleChange}
              editEntry={this.editEntry}
              deleteEntry={this.deleteEntry}
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
  }

}

export default App;
