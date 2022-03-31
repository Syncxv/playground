import Image from 'next/image'
import { useRouter } from 'next/router'
import { ClockCounterClockwise, Compass, Folders, House, PlayCircle, Playlist } from 'phosphor-react'
import Divider from '../atoms/Divider'
import Shorts from '../icons/Shorts'

interface SidebarItemProps {
    type: 'sub' | 'item'
    pathname: string
    label: string
    Icon: any
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, Icon, pathname, type }) => {
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
            {type === 'item' ? (
                <Icon weight={selected ? 'fill' : 'light'} size={24} />
            ) : (
                <Image className="overflow-hidden rounded-full" src={Icon} width={24} height={24} />
            )}
            <span>{label}</span>
        </li>
    )
}

interface Props {}
const Sidebar: React.FC<Props> = () => {
    return (
        <aside className="scroller w-60 flex-none overflow-y-auto bg-yt-700 text-sm text-gray-200">
            <ul>
                <SidebarItem type="item" label="Home" Icon={House} pathname="/" />
                <SidebarItem type="item" label="Explore" Icon={Compass} pathname="/explore" />
                <SidebarItem type="item" label="Shorts" Icon={Shorts} pathname="/shorts" />
                <SidebarItem type="item" label="Subscriptions" Icon={Folders} pathname="/subs" />
            </ul>
            <Divider />
            <ul>
                <SidebarItem type="item" label="Library" Icon={Playlist} pathname="/library" />
                <SidebarItem type="item" label="History" Icon={ClockCounterClockwise} pathname="/history" />
                <SidebarItem type="item" label="Your Vidoes" Icon={PlayCircle} pathname="/videos" />
            </ul>
            <Divider />
            <span className="py-3 px-5 font-semibold uppercase leading-loose text-yt-400">subscriptions</span>
            {Array.from(Array(50)).map((_, i) => (
                <SidebarItem key={i} type="sub" label="Stupit" Icon="/pfp.jpg" pathname="/videos" />
            ))}
        </aside>
    )
}
export default Sidebar
