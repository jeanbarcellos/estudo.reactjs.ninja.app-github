'use strict'

import React, { PropTypes } from 'react'
import Pagination from 'components/pagination'

import './repos.css'

const Repos = ({ className, title, repos, handlePagination }) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}</h2>
    <ul className={'repos-list'}>
      {repos.repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination total={10} activePage={3} onClick={handlePagination} />
  </div>
)

// props default
Repos.defaultProps = {
  className: '',
  repos: {}
}

// Definição dos tipos das propriedades
Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.object
}

export default Repos
