import React, { Component } from 'react';
import data from '../data/personalData';
import TeamMember from './TeamMember';
export default class ListMember extends Component {
  render() {
    return (
      <>
        {data.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </>
    );
  }
}
