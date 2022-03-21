import React from 'react';
import Iam from '../assets/images/myCode.png';
import Bruce from '../assets/images/Bruce.jpg';
import '../css/Home.css';
import '../css/About.css';
import resume from '../assets/images/resume.png';
import world from '../assets/images/world.png';
import workTeam from '../assets/images/workTeam.png';
import MediaSocial from '../components/MediaSocial';


class About extends React.Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
        <section className="py-5" id="scroll-target">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-4">
                <h1 className="Iam typing-animation">  Who I'm...</h1>
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  width="250px"
                  src={ world }
                  alt="girl hold the world"
                />
                </div>
                <div className="img-ju col-lg-8">
                  <img className="img-fluid rounded mb-5 mb-lg-0"
                  src={ Iam }
                  alt="a code, with a object with personal information"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- About section one--> */ }
          <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src={ Bruce }
                    alt="julia's family"
                    width="400px"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="Iam">Where I came from</h2>
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
                    src={ resume }
                    alt="..."
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="Iam">About my old career</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    I developed myself during my career in the pharmaceutical industry. <br />
                    I started working as a laboratory analyst, doing bench experiments to prove the effectiveness of medications.
                    At same company, I change my position to lead a small team.<br />
                    After that experience, I worked at French multinational company, and my job was to validate and implement methods developed on the origin company.<br />
                    I finished my career in the industry as a chemistry researcher, develop new methods, for new drugs, and complement the routine of old analyses.
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
                    src={ workTeam }
                    alt="team working"
                  // src="../assets/images/Bruce.jpg"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="Iam"> Ambition &amp; Dreams</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    I'm looking for a great company to work for. A place where I can collaborate with my skills, and learn from others at the same time.<br />
                    {/* I'm new in this area, but I've been working since 2007 and I have a lot of experience to show you.<br/> */ }
                    "People are the secret of a good result" correct?<br />
                    That's the main reason I want to work with greater people.
                    I'm looking for a company with flexibility. <br />
                    I can like to have a place to go work, meet people in there, go out to drink beer at the end of a hard day at work. This is good to make connections.
                    I also want to be able to work from home.

                  </p>
                </div>
              </div>
            </div>
          </section>
          <MediaSocial />
        </main>
      </>
    );
  }
}

export default About;
