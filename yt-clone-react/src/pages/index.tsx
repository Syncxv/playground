import type { NextPage } from 'next'
import Layout from '../components/Layout'
import VideoCard from '../components/VideoCard'

const Home: NextPage = () => {
    return (
        <>
            <div className="all-shit grid grid-cols-auto-fit content-center justify-items-center gap-10 p-8">
                {Array.from(Array(10)).map((_, i) => (
                    <VideoCard
                        video={{
                            title: 'The Heap: what does malloc() do? - bin 0x14',
                            thumbnail: '/liveoverflow.jpg',
                            uploadDate: new Date(),
                            views: '100k'
                        }}
                        user={{ avatar: '/pfp.jpg', username: 'bruv', verified: true }}
                    />
                ))}
            </div>
        </>
    )
}

export default Home
