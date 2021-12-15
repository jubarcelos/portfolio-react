import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Home.css';
import '../css/NavBar.css';
import '../css/TimeLine.css';
import BlogPage from '../components/BlogPage';
import julia from '../assets/images/JuliaBarcelos.jpeg';
import TimeLineHardSkills from '../components/TimeLineHardSkills';


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
                    <h1 className="hello typing-animation">
                      Hello, I'm Julia Barcelos <br />
                    </h1>
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
                      <a className="btn btn-outline-light btn-lg px-4" href="#!">
                        Experience
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                  <img width="250"
                    className="img-fluid rounded-3 my-5"
                    src={ julia }
                    alt="Julia"
                  />
                </div>
              </div>
            </div>
          </header>
          {/* // Learning section */ }
          <section className="py-5" id="features">
            <div className="container px-5 my-5">
              <div className="row gx-5">
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <h2 className="fw-bolder mb-0">A better way to start building something is starting.</h2>
                </div>
                <div className="col-lg-8">
                  <TimeLineHardSkills />
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial section */ }
          <div className="py-4 green-gradient">
            <div className="container px-5 my-5 ">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-10 col-xl-7">
                  <div className="text-center">
                    <div className="fs-4 fw-bold text-white d-flex align-items-center justify-content-center">
                      Julia (Jujuba) Barcelos
                      <span className="fw-bold text-success mx-1">/</span>
                      Desenvolvedora Web Jr
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
          {/* Blog preview section */ }
          { <BlogPage /> }
          {/* Call to action */ }
          <aside className="bg-success p-4 p-sm-5 mt-5 black-gradient">
            <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
              <div className="mb-4 mb-l-0">
                <div className="fs-2 fw-bold text-white">
                  I'm open to opportunities.<br />
                  If you have someone, feel open to contact me.
                </div>
              </div>
            </div>
          </aside>
        </main >
      </>
    )
  }
}

export default Home
