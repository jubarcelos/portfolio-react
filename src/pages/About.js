import '../css/styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/TeamMember';

class About extends React.Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
          <header className="py-5">
            <div className="container px-5">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-xxl-12">
                  <div className="my-5">
                    <h1 className="fw-bolder mb-3">Who I'm</h1>
                    <p className="lead fw-normal text-muted mb-3">
                      { `const generalInfo = {
                        name: Julia Barcelos,
                        age: 31 years old,
                        married: true,
                        nerd hobby: board games,
                        sport: beach tennis, }`
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- About section one--> */ }
          <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                    // src="../assets/images/Bruce.jpg"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="fw-bolder">My history</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    I'm from Tubarão-SC, but I moved to Florianópolis before start my bachelor's degree on chemistry. <br />
                    I have lived here since 2008, I get married here too.
                    On this photo you can know my family.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- About section two--> */ }
          <section className="py-5">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-first order-lg-last">
                  <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="fw-bolder">Goal</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    I developed myself during my entirely career on pharmaceutical industry.
                    First I worked as analytic laboratory, doing experiments in the bench, using a lot of instruments and different technics
                  </p>
                </div>
              </div>
            </div>
          </section>
            {/* <!-- About section three--> */ }

          <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                    // src="../assets/images/Bruce.jpg"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="fw-bolder"> Ambition &amp; Dreams</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    I have interesting to practice my English and one day work for outline of country.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Media section--> */ }
          <section className="py-5 bg-light">
            <div className="container px-5 my-5">
              <div className="text-center">
                <h2 className="fw-bolder">Social media</h2>
                <p className="lead fw-normal text-muted mb-5">
                  You can find me on this channels
                </p>
              </div>
              <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                <div className="fst-italic text-muted">
                  <Link  to="https://github.com/jubarcelos" target="blank"><h1><i className="bi bi-github text-dark"></i></h1></Link >
                </div>
                <div className="fst-italic text-muted">
                  <Link  to="https://www.linkedin.com/in/julia-barcelos-443b7ab6" target="blank"><h1><i className="bi bi-linkedin"></i></h1></Link >
                </div>
                <div className="fst-italic text-muted">
                  <Link  to="https://discord.gg/ZNjsHH7D" target="blank"><h1><i class="bi bi-discord text-dark"></i></h1></Link >
                </div>
                <div className="fst-italic text-muted text-center">
                  <Link  to="https://twitter.com/juliasbarcelos1" target="blank"><h1><i class="bi bi-twitter"></i></h1></Link >
                </div>
                <div className="fst-italic text-muted">
                  <Link to="http://wa.me/55048991222729" target="blank"><i class="bi bi-whatsapp text-dark"></i></Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default About;
