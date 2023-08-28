import styles from './VideoList.module.css';

const VideoList = ({ title, children }) => {
    // const videos = children || <p>No hay videos</p>
    // const videos = children ? children : <p>No hay videos</p>
    
    return (
        // <div className="wrapper">
        <div className={`${styles.wrapperList} ${styles.margin}`}>
            <h2>{title}</h2>
            {children || <p>No hay videos</p>}
            {/* {videos} */}
        </div>
    )
}

export default VideoList