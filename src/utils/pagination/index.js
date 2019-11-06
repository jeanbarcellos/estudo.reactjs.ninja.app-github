'use strict'

const pagination = ({ total, activePage }) => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  return [1, 2, 3, '...', 6]
}

export default pagination
