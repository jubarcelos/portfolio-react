import React, { Component } from 'react';

class TimeLineHardSkills extends Component {
  render() {
    return (
      <ul class="knowledge grid">
        <li className="item item1" >
          <div className=" learning bg-success bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-grid-1x2-fill"></i>
          </div>
          <h2 className="h5">In process since - 08.2021</h2>
          <h3 className="h5">Trybe course fullstack developer</h3>
          <p className="mb-0">
          </p>
        </li>
        <div className=" item2" ></div>
        <div className=" item3" ></div>

        <li className="item item4" >
          <div className=" learning bg-success bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-kanban"></i>
          </div>
          <h2 className="h5">Finished - 30.08.2021</h2>
          <h3 className="h5">FAVENI - MBA Project Management</h3>
        </li>
        <li className="item item5" >
          <div className=" learning bg-success bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <h2 className="h5">Finished - 10.12.2015</h2>
          <h3 className="h5">UFSC - Chemistry Bachelor</h3>
        </li>
        <div className=" item6" ></div>

      </ul>
    );
  }
}
export default TimeLineHardSkills;
