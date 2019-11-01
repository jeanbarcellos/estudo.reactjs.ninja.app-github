'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/15021804?v=3' />

    <h1 className='username'>
      <a href='https://github.com/jeanbarcellos'>Jean Barcellos</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 122</li>
      <li>Seguidores: 10</li>
      <li>Seguindo: 10</li>
    </ul>
  </div>
)

export default UserInfo