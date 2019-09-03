import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToprops = state => {
  return {
    articles: state.articles
  }
}

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map(article => (
        <li data-testid="list-item" key={article.id}>
          {article.title}
        </li>
      ))}
    </ul>
  )
}
ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

// connect return a higer order component
const connectedList = connect(mapStateToprops)(ArticleList)
export { connectedList as ArticleList }
