// import './App.css'
import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';


const App = () => (
  <>
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
  </>
);

export default App;
