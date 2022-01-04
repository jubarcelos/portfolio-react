import React, { Component } from 'react';

class ExperienceModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalExperience: this.props.personalExperience,
    };
  }

  render() {
    const {
      companyName,
      companyOccupation,
      jobDescription,
      hardSkills,
      softSkills,
    } = this.state.personalExperience;
    return (
      <>
        <div className="col mb-5 mt-5">
          <div className="text-center">
            <h3 className="fw-bolder">{ companyName }</h3>
            <h5 className="fw-bolder">{ companyOccupation }</h5>
            <div className="fst-italic text-muted">{ jobDescription }</div>
            <div className="fst-italic text-muted">
              <p className="bi text-primary"></p> { hardSkills }
            </div>
            <div className="fst-italic text-muted">
              <p className="bi text-primary"></p> { softSkills }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ExperienceModel;

