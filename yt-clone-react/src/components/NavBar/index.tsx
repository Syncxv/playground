import Image from 'next/image'
import AppIcon from '../icons/AppIcon'
import BellIcon from '../icons/BellIcon'
import CreateIcon from '../icons/CreateIcon'
import MenuIcon from '../icons/MenuIcon'
import SearchIcon from '../icons/SearchIcon'
import YoutubeLogo from '../icons/YoutubeLogo'

interface Props {
    onClick: () => any
}

const NavBar: React.FC<Props> = ({ onClick }) => {
    return (
        <nav className="flex h-14 flex-none items-center justify-between bg-yt-700 px-6 text-sm text-gray-200">
            <div className="flex items-center gap-6">
                <div onClick={onClick}>
                    <MenuIcon />
                </div>
                <YoutubeLogo />
            </div>
            <div className="relative flex">
                <input
                    className="search-input w-80 bg-yt-900 p-2 outline-none"
                    placeholder="Search"
                    type="text"
                />
                <button className="border-none bg-gray-600 px-3">
                    <SearchIcon />
                </button>
            </div>
            <div className="flex items-center gap-6">
                <div className="icons flex items-center gap-5">
                    <CreateIcon />
                    <AppIcon />
                    <BellIcon />
                </div>
                <Image
                    className="cursor-pointer overflow-hidden rounded-full"
                    src="/pfp.jpg"
                    width={32}
                    height={32}
                />
            </div>
        </nav>
    )
}
export default NavBar
