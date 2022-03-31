import React from 'react'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex h-screen flex-col bg-blue-500">
            <NavBar />
            <div className="flex flex-1 overflow-y-hidden">
                <Sidebar />
                <main className="scroller flex-1 overflow-y-auto bg-yt-800 text-sm text-gray-100">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
