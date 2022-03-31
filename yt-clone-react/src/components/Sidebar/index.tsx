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
    isOpen: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, Icon, pathname, type, isOpen }) => {
    const router = useRouter()
    const selected = router.pathname === pathname
    return (
        <li
            onClick={() => router.push(pathname)}
            className={`flex  ${
                isOpen ? 'gap-6' : 'flex-col justify-center gap-2 text-center text-xs'
            } cursor-pointer items-center  bg-opacity-50 py-3 px-5 ${
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

interface Props {
    isOpen: boolean
}
const Sidebar: React.FC<Props> = ({ isOpen }) => {
    return (
        <aside
            className={`scroller ${
                isOpen ? 'w-60' : 'w-24'
            } flex-none overflow-y-auto bg-yt-700 text-sm text-gray-200`}
        >
            <ul>
                <SidebarItem isOpen={isOpen} type="item" label="Home" Icon={House} pathname="/" />
                <SidebarItem isOpen={isOpen} type="item" label="Explore" Icon={Compass} pathname="/explore" />
                <SidebarItem isOpen={isOpen} type="item" label="Shorts" Icon={Shorts} pathname="/shorts" />
                <SidebarItem
                    isOpen={isOpen}
                    type="item"
                    label="Subscriptions"
                    Icon={Folders}
                    pathname="/subs"
                />
            </ul>
            <Divider />
            <ul>
                <SidebarItem
                    isOpen={isOpen}
                    type="item"
                    label="Library"
                    Icon={Playlist}
                    pathname="/library"
                />
                <SidebarItem
                    isOpen={isOpen}
                    type="item"
                    label="History"
                    Icon={ClockCounterClockwise}
                    pathname="/history"
                />
                <SidebarItem
                    isOpen={isOpen}
                    type="item"
                    label="Your Vidoes"
                    Icon={PlayCircle}
                    pathname="/videos"
                />
            </ul>
            <Divider />

            {isOpen && (
                <>
                    <span className="py-3 px-5 font-semibold uppercase leading-loose text-yt-400">
                        subscriptions
                    </span>
                    {Array.from(Array(50)).map((_, i) => (
                        <SidebarItem
                            key={i}
                            type="sub"
                            isOpen={isOpen}
                            label="Stupit"
                            Icon="/pfp.jpg"
                            pathname="/videos"
                        />
                    ))}
                </>
            )}
        </aside>
    )
}
export default Sidebar
