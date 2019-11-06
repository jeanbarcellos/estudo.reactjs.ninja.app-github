'use strict'

import React, { PropTypes } from 'react'
import Pagination from 'components/pagination'

import './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}</h2>
    <ul className={'repos-list'}>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination total={10} activePage={3} />
  </div>
)

// props default
Repos.defaultProps = {
  className: '',
  repos: []
}

// Definição dos tipos das propriedades
Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
