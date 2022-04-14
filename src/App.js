import React, { useState } from 'react'

import Albuns from './pages/Albuns'
import Counter from './pages/Counter'
import Template from './templates/Template'
import Users from './pages/Users'



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

  return(
      <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
        { Page && <Page /> }
      </Template>
  )
}

export default App;
