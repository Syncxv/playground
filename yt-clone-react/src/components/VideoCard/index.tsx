import Image from 'next/image'
import { timeSince } from '../../util/timeAgo'

interface Props {
    video: {
        title: string
        thumbnail: string
        views: string
        uploadDate: Date
    }
    user: {
        username: string
        avatar: string
        verified: boolean
    }
}

const VideoCard: React.FC<Props> = ({ video, user }) => {
    return (
        <>
            <div className="video-card  w-80">
                <img className="aspect-video" src={video.thumbnail} alt="well" />
                <div className="mt-3 flex w-full items-start gap-2">
                    <img className="w-10 overflow-hidden rounded-full" src={user.avatar} />
                    <div className="text-base">
                        <p>{video.title}</p>
                        <div className="text-sm text-yt-400">
                            <div className="username">
                                <span>{user.username}</span>
                            </div>
                            <span>
                                {video.views} views • {timeSince(video.uploadDate)} ago
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VideoCard
