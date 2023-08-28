import styles from './App.module.css'
import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';


const App = () => (
  <div className={styles.container}>
  {/* <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      background: 'red'
  }}> */}
    <VideoList title='Curso de React'>
      <VideoItem 
        title= 'Componentes'
        duration={2760}
        uploadDate={new Date(2023, 1, 25)}
        description='Componentes en React'
      />
      <VideoItem 
        title= 'useContext'
        duration={3149}
        uploadDate={new Date(2023, 2, 25)}
        description='Componentes en React'
      />
    </VideoList>
    <VideoList title='Curso de NodeJS'>
      <VideoItem 
        title= 'Introducción al Backend'
        duration={2760}
        uploadDate={new Date(2023, 1, 25)}
        description='Introducción al Backend con NodeJS'
      />
    </VideoList>
    <VideoList title= 'Introducción a SyncFusion'></VideoList>
  </div>
);

export default App;
