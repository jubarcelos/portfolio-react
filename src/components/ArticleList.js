import React, { Component } from 'react';
import ArticleModel from './ArticleModel';
import list from '../data/articles';

class ArticleList extends Component {
  render() {
    return (
      <>
        {list.map((article) => (
          <ArticleModel key={ article.id } individualArticle={ article } />
        ))}
      </>
    );
  }
}

export default ArticleList;