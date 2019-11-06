import React, { PropTypes } from 'react'

import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'

import './app.css'

const AppContent = ({
  userInfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => {
  return (
    <div>
      <div className='app'>
        <Search isDisabled={isFetching} handleSearch={handleSearch} />
        {isFetching && <div>Carregando...</div>}

        {!!userInfo && <UserInfo userInfo={userInfo} />}

        {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length && (
          <Repos
            className='repos'
            title='Repositórios:'
            repos={repos}
            handlePagination={clicked => handlePagination('repos', clicked)}
          />
        )}

        {!!starred.length && (
          <Repos
            className='starred'
            title='Favoritos:'
            repos={starred}
            handlePagination={clicked => handlePagination('starred', clicked)}
          />
        )}
      </div>
    </div>
  )
}

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
