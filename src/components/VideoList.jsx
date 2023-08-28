import React from 'react'

const VideoList = ({ title, children }) => {
    // const videos = children || <p>No hay videos</p>
    // const videos = children ? children : <p>No hay videos</p>
    
    return (
        <div>
            <h2>{title}</h2>
            {children || <p>No hay videos</p>}
            {/* {videos} */}
        </div>
    )
}

export default VideoList