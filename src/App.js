import React, { useState } from 'react'

import Albuns from './Albuns'
import Counter from './Counter'
import Users from './Users'


const pages = {
  albuns: {
    text: 'Álbuns',
    component: Albuns,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuários',
    component:  Users,
  }
}



function App() {
  const [page, setPage] = useState('albuns')

  const handleChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component


  const pageNames = Object.keys(pages)

  return(
    <>

      {
        pageNames.map(page => <button onClick={() => handleChangePage(page)}>{pages[page].text}</button>)
      }

      { Page && <Page /> }
    </>
  )
}

export default App;
