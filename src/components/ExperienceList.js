import React, { Component } from 'react';
import ExperienceModel from './ExperienceModel';
import list from '../data/jobExperiences';

class ExperienceList extends Component {
  render() {
    return (
      <>
        {list.map((experience) => (
          <ExperienceModel key={ experience.companyName } personalExperience={ experience } />
        ))}
      </>
    );
  }
}

export default ExperienceList;