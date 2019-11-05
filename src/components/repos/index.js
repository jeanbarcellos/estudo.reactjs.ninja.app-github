'use strict'

import React, { PropTypes } from 'react'

import './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={`repos-list ${className}`}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
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
