import Image from 'next/image'
import { Check } from 'phosphor-react'
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
                            <div className="username flex items-center gap-2">
                                <span>{user.username}</span>
                                {user.verified && (
                                    <div className="relative h-3 w-3  rounded-full bg-slate-400 p-2">
                                        <Check
                                            className="absolute top-1/2 left-1/2"
                                            style={{ transform: 'translate(-50%, -50%)' }}
                                            weight="bold"
                                            color="black"
                                            size={12}
                                        />
                                    </div>
                                )}
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
