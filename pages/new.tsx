import { Flowbite } from 'flowbite-react'
import NavbarSidebarLayout from '../layouts/navbar-sidebar'

import theme from '../flowbite-theme'

const New = () => {
  return (
    <NavbarSidebarLayout>
      <Flowbite theme={{ theme }}>
        <h1>Hellow</h1>
      </Flowbite>
    </NavbarSidebarLayout>
  )
}

export default New
