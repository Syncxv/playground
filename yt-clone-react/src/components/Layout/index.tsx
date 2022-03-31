import React from 'react'

interface Props {}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className="bg-blue-500 flex flex-col h-screen">
        {children}
    </div>
  )
}

export default Layout