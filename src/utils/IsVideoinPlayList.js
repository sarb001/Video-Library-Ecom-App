import React from 'react'

const IsVideoinPlayList = (playlist,videoId,playlistid) => {
    return  playlist.filter((item) => item._id === playlistid)[0].videos.some((item) => item._id === videoId);
}

export default IsVideoinPlayList