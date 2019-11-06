'use strict'

const centerRule = ({ total, activePage }) => {
  if (activePage - 1 <= 0) {
    return 0
  }

  return activePage - 1
}

const pagination = ({ total, activePage }) => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const visiblePages = 3

  let pages = [
    1,
    ...Array.from(
      { length: visiblePages },
      (_, i) => i + centerRule({total, activePage})
    ),
    total
  ]

  // retirar numeros duplicados
  pages = pages.filter((page, index, array) => array.indexOf(page) === index)

  // corrigir exibição dos ultimos e penultimos numeros
  let penultimatePage = pages[pages.length - 2]
  let lastPage = pages[pages.length - 1]

  if (penultimatePage === (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage
    ]
  }

  penultimatePage = pages[pages.length - 2]
  lastPage = pages[pages.length - 1]

  if (penultimatePage < (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage
    ]
  }


  return pages
}

export default pagination
