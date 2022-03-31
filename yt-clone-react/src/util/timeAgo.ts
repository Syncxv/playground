//https://stackoverflow.com/a/3177838/13651761 love you <3
export const timeSince = (date: Date) => {
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

    var interval = seconds / 31536000

    if (interval > 1) {
        return Math.floor(interval) + ' years'
    }
    interval = seconds / 2592000
    if (interval > 1) {
        return Math.floor(interval) + ' months'
    }
    interval = seconds / 86400
    if (interval > 1) {
        return Math.floor(interval) + ' days'
    }
    interval = seconds / 3600
    if (interval > 1) {
        return Math.floor(interval) + ' hours'
    }
    interval = seconds / 60
    if (interval > 1) {
        return Math.floor(interval) + ' minutes'
    }
    return Math.floor(seconds) + ' seconds'
}
