import React from 'react'

const IsVideoPresent = (videos,videoId) => {
  return  videos?.some((video) => video._id === videoId);  
}

export default IsVideoPresent