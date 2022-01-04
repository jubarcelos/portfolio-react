import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';

class BlogPage extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">Articles by myself</h2>
                <p className="lead fw-normal text-muted mb-5">
                  I've been write about web develop life and my experiences in there career.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <ArticleList />
          </div>
        </div>
      </section>
    )
  }
}

export default BlogPage;
