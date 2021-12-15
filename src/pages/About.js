import React from 'react';

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
                      { `const about = { ` } <br />
                      name: Julia Barcelos, <br />
                      age: 31 years old,<br />
                      married: true,<br />
                      nerd-hobby: board games,<br />
                      sport: beach tennis,<br />
                      soft-Skill: { `[ resilience, empathy, communication, leadership], ` }<br />
                      { `}` }
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
                  <h2 className="fw-bolder">Where I came from</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    I'm from Tubarão-SC Brazil, but I moved to Florianópolis-SC before starting my bachelor's degree. I have lived here since 2008, I get married here too.<br />
                    I have a beautiful dog named Bruce. In this photo, you can know my little family.<br />
                    I have a bachelor's degree in chemistry and an MBA in project management and during a pandemic situation, I decided to change my career and start to study to be a web programmer.
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
                  <h2 className="fw-bolder">About my old career</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    I developed myself during my career in the pharmaceutical industry. <br />
                    I started working as a laboratory analyst, doing bench experiments, using a lot of different technics and instruments to prove the effectiveness of medications.
                    At same company, 6 months later I was promoted and I change my position to work with experiments more complex and lead a small team.<br />
                    After that experience, I worked on Brazil base of a multinational company from France, and my job was to validate and implement methods developed on the origin company.<br />
                    For finally, I finished my career in the industry as a chemistry researcher, develop new methods, for new drugs, and complement the routine of old analyses.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- About section three--> */ }

          <section className="py-5 bg-light" >
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
                    I'm looking for a great company to work for. A place where I can collaborate with my skills, and learn from others at the same time.
                    I'm new in this area, but I've been working since 2007 and I have a lot of experience to show you.<br/>
                    "People are the secret of a good result" correct?<br/>
                    That's the main reason I want to work with greater people.
                    I'll like having a place to go to work, meet people in there.  and have company to go take a beer at the end of a hard day at work. This is good to make connections.
                    I also want to be able to work from home. So... I'm looking for a company with flexibility.

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
              <div className="row gx-10 row-cols-md-2 row-cols-md-5 justify-content-center">
                <div className="fst-italic text-muted">
                  <a href="https://github.com/jubarcelos" target="blank"><h1><i className="bi bi-github text-dark"></i></h1></a >
                </div>
                <div className="fst-italic text-muted">
                  <a href="https://www.linkedin.com/in/julia-barcelos-443b7ab6" target="blank"><h1><i className="bi bi-linkedin"></i></h1></a >
                </div>
                <div className="fst-italic text-muted">
                  <a href="http://discord.com/users/887730660847013918" target="blank"><h1><i class="bi bi-discord text-dark"></i></h1></a >
                </div>
                <div className="fst-italic text-muted">
                  <a href="https://twitter.com/juliasbarcelos1" target="blank"><h1><i class="bi bi-twitter"></i></h1></a >
                </div>
                <div className="fst-italic text-muted">
                  <a href="http://wa.me/55048991222729" target="blank"><h1><i class="bi bi-whatsapp text-dark"></i></h1></a>
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
