import type { NextPage } from 'next'
import Layout from '../components/Layout'
import VideoCard from '../components/VideoCard'

const Home: NextPage = () => {
    return (
        <>
            <div className="all-shit grid grid-cols-auto-fit place-content-center justify-items-center gap-10 p-8">
                {Array.from(Array(20)).map((_, i) => (
                    <VideoCard
                        key={i}
                        video={{
                            title: 'The Heap: what does malloc() do? - bin 0x14',
                            thumbnail: '/liveoverflow.jpg',
                            uploadDate: new Date(Date.now() - 24 * 60 * 60 * 1000 * 500),
                            views: '100k'
                        }}
                        user={{ avatar: '/pfp.jpg', username: 'bruv', verified: Math.random() > 0.5 }}
                    />
                ))}
            </div>
        </>
    )
}

export default Home
