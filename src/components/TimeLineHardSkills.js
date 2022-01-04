import React, { Component } from 'react';

class TimeLineHardSkills extends Component {
  render() {
    return (
      <div class="grid">
        <div className="item item1" > </div>
        <div className="item item2" >
          <div className=" learning bg-success bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-grid-1x2-fill"></i>
          </div>
          <h2 className="h5">In process since - 26.10.2021</h2>
          <h3 className="h5">Trybe course Front-end module</h3>
          <p className="mb-0">
            React Class and Funcional components | Ciclos de vida e React Router | React testing library | React icons e bootstrap | Redux | Hooks
          </p>
        </div>
        <div className="item item3" >
          <div className=" learning bg-success bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-tools"></i>
          </div>
          <h2 className="h5">Finished - 25.10.2021</h2>
          <h3 className="h5">Trybe course Foundations module</h3>
          <p className="mb-0">
            git/gitHub | HTML | CSS | Lógica de programação| JS ES6| Testes Unitários Jest
          </p>
        </div>
        <div className="item item4" ></div>
        <div className="item item 5" >
          <div className=" learning bg-warning bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-lightbulb"></i>
          </div>
        </div>
        <div className="item item6"></div>

        <div className="item item8" >
          <div className=" learning bg-success bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-kanban"></i>
          </div>
          <h2 className="h5">Finished - 30.08.2021</h2>
          <h3 className="h5">FAVENI - MBA Project Management</h3>
        </div>
        <div className="item item9" >
          <div className=" learning bg-success bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <h2 className="h5">Finished - 10.12.2015</h2>
          <h3 className="h5">UFSC - Chemistry Bachelor</h3>
        </div>
        <div className="item item10" ></div>

      </div >
    );
  }
}
export default TimeLineHardSkills;
