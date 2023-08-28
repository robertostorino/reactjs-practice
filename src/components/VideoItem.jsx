// import './VideoItem.css';
import styles from './VideoItem.module.css';

const VideoItem = ({ title, description, uploadDate, duration }) => {
    
    let seconds = duration % 60;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    const minutes = Math.floor(duration / 60);
    
    return (
        // <div className='video'/>
        <div className={styles.container}>
            <h3>{title}</h3>
            <div>
                <span className={styles.duration}>
                    {minutes}:{seconds}
                </span>
                <span>{uploadDate.toLocaleDateString()}</span>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default VideoItem