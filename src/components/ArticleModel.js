import React, { Component } from 'react';
import articles from '../data/articles';

class ArticleModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      individualArticle: this.props.individualArticle,
    };
  }

  render() {
    const {
      type,
      cape,
      capeDescription,
      webpage,
      title,
      resume,
      writer,
      publishedDate,
      timeToRead,
    } = this.state.individualArticle;

    return (
      <>
        <div className="col-lg-4 mb-5">
          <div className="card h-100 shadow border-0">
            <img
              className="card-img-top"
              src={ cape }
              alt={ capeDescription }
            />
            <div className="card-body p-4">
              <div className="badge bg-success bg-gradient rounded-pill mb-2">
                { type }
              </div>
              <a
                className="text-decoration-none link-dark stretched-link"
                href={ webpage } target="blank"
              >
                <h5 className="card-title mb-3"> { title } </h5>
              </a>
              <p className="card-text mb-0">
                { resume }
              </p>
            </div>
            <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
              <div className="d-flex align-items-end justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="small">
                    <div className="fw-bold"> { writer } </div>
                    <div className="text-muted">
                      { publishedDate } &middot; { timeToRead }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ArticleModel;
