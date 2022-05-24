import React, { Component } from 'react'

class MediaSocial extends Component {
  render() {
    return (
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
              <a id="#contact" href="http://wa.me/55048991222729" target="blank"><h1><i class="bi bi-whatsapp text-dark"></i></h1></a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MediaSocial
