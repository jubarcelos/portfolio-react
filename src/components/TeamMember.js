import React, { Component } from 'react';

class TeamMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: this.props.member,
    };
  }

  render() {
    const { name, image, occupation, linkedin, github } = this.state.member;
    return (
      <div className="col mb-5 mt-5">
        <div className="text-center">
          <img
            className="img-fluid rounded-circle mb-4 px-4"
            src={image}
            alt={name}
            width="150"
          />
          <h5 className="fw-bolder">{name}</h5>
          <div className="fst-italic text-muted">{occupation}</div>
          <div className="fst-italic text-muted">
            <i className="bi bi-linkedin text-primary"></i> {linkedin}
          </div>
          <div className="fst-italic text-muted">
            <i className="bi bi-github text-dark"> </i>
            {github}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
