import { useRouter } from 'next/router'
import { Compass, Folders, House } from 'phosphor-react'
import CreateIcon from '../icons/CreateIcon'
import Shorts from '../icons/Shorts'

interface Props {}

interface SidebarItemProps {
    pathname: string
    label: string
    Icon: any
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, Icon, pathname }) => {
    const router = useRouter()
    const selected = router.pathname === pathname
    console.log(pathname, router)
    return (
        <li
            onClick={() => router.push(pathname)}
            className={`flex cursor-pointer items-center gap-6 bg-opacity-50 py-3 px-5 ${
                selected ? 'bg-yt-500' : 'hover:bg-yt-500'
            }`}
        >
            <Icon weight={selected ? 'fill' : 'light'} size={24} />
            <span>{label}</span>
        </li>
    )
}

const Sidebar: React.FC<Props> = () => {
    return (
        <aside className="w-60 flex-none overflow-y-auto bg-yt-700 text-sm text-gray-200">
            <SidebarItem label="Home" Icon={House} pathname="/" />
            <SidebarItem label="Explore" Icon={Compass} pathname="/explore" />
            <SidebarItem label="Shorts" Icon={Shorts} pathname="/shorts" />
            <SidebarItem label="Subscriptions" Icon={Folders} pathname="/subs" />
        </aside>
    )
}
export default Sidebar
