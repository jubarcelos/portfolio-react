import React from 'react';

function Portfolio() {
  return (
    <>
      <main className="flex-shrink-0">
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Meus Projetos</h1>
              <p className="lead fw-normal text-muted mb-0">github portfolio</p>
            </div>
            <div className="row gx-5">
              <div className="col-lg-6">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                  <a
                    className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                    href="https://jubarcelos.github.io/solarsystem/" target="blank"
                  >
                    Solar System
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                  <a
                    className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                    href="https://jubarcelos.github.io/shoppingCart/" target="blank"
                  >
                    Simple Shopping Cart
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src="https://dummyimage.com/600x400/343a40/6c757d" target="blank"
                    alt="..."
                  />
                  <a
                    className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                    href="https://jubarcelos.github.io/toDoList/" target="blank"
                  >
                    Simple To Do List
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                  <a
                    className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                    href="https://jubarcelos.github.io/pixels-art/" target="blank"
                  >
                    Pixel Arts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <h2 className="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <a className="btn btn-lg btn-primary" href="http://wa.me/55048991222729" target="blank">
              Contact me
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
