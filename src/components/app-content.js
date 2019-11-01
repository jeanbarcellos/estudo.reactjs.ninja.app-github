import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => {
  return (
    <div>
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />

        <Repos
          className='repos'
          title='Repositórios:'
          repos={[
            {
              name: 'Nome do repositório',
              link: '#'
            },
            {
              name: 'Nome do repositório',
              link: '#'
            }
          ]}
        />

        <Repos
          className='starred'
          title='Favoritos:'
          repos={[
            {
              name: 'Nome do repositório',
              link: '#'
            },
            {
              name: 'Nome do repositório',
              link: '#'
            }
          ]}
        />
      </div>
    </div>
  )
}

export default AppContent
