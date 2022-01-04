import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Home.css';
import '../css/NavBar.css';
import '../css/TimeLine.css';
import BlogPage from '../components/BlogPage';
import TimeLineHardSkills from '../components/TimeLineHardSkills';
import process from '../assets/images/process.png';
import me from '../assets/images/me.png';


class Home extends Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
          <header className="bg-dark py-5">
            <div className="container px-5">
              <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-8 col-xl-7 col-xxl-6">
                  <div className="my-5 text-center text-xl-start">
                    <h1 className="hello typing-animation">Hello, I'm</h1>
                    <h3 className="hello typing-animation">Julia Barcelos</h3>
                    <p className="get-visit">
                      Welcome to meet me, are nice have you here! <br />
                      Come see my experience click directly on these buttons.
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                      <NavLink
                        className="btn btn-success btn-lg px-4 me-sm-3"
                        exact to="/portfolio">
                        Repositories
                      </NavLink>
                      <NavLink 
                        className="btn btn-outline-light btn-lg px-4"
                        exact to="/experiences">
                        Experiences
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                  <img width="250"
                    className="bigCircle"
                    src={ me }
                    alt="girl"
                  />
                </div>
              </div>
            </div>
          </header>
          {/* Learning section */ }
          <section className="py-5" id="features">
            <div className="container px-5 my-5">
              <div className="row gx-5">
                <div className="col-lg-4">
                  <h2 className="fw-bolder mb-0">A better way to build something is start.</h2>
                </div>
                <div className="col-lg-8">
                  <TimeLineHardSkills />
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial section */ }
          <div className="py-4 green-gradient">
            <div className="container px-4 my-4 ">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-10">
                  <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center fs-2 fw-bold text-white">
                      <div className="fw-bold">
                        Julia Barcelos
                       <span className="fw-bold text-success mx-1">/</span>
                        Desenvolvedora Web Jr
                      </div>
                    </div>
                    <div className="fs-5 mb-5 fst-italic text-white">
                      "We cannot solve problems with the kind of thinking we employed when we came up with them."<br />
                      — Albert Einstein
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { <BlogPage /> }
        </main >
      </>
    )
  }
}

export default Home
