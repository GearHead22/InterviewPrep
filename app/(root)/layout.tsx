import React, { ReactNode } from 'react'

const layout = ({children}:{children: ReactNode}) => {
  return (
    <div>
        {/* <nav>
        Navbar
        </nav> */}
        <div>{children}</div>
    </div>
  )
}

export default layout