'use strict'

const pagination = ({ total, activePage }) => {
  // Hack
  // return Array.apply(null, { length: total }).map((_, i) => i + 1)

  // Implementação em ECMA6
  return Array.from({length: total}, (_, i) => i + 1)
}

export default pagination
