import React from 'react'
import NavBar from '../NavBar'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col bg-blue-500">
      <NavBar />
      <div className="flex flex-1 overflow-y-hidden">
        <main className="flex-1 bg-yt-800 text-sm text-gray-100">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
