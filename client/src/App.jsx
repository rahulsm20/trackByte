import {Routes,Route} from 'react-router-dom'
import Home from './Home/Home'
import AddSong from './Create/AddSong'
import AddToPlaylist from './Create/AddToPlaylist'
import './App.css'
import ViewPlaylist from './Display/ViewPlaylist'
import ViewSongs from './Display/ViewSongs'
import Album from './Album/Album'
import Index from './Home/Index'
import DeleteFromPlaylist from './Delete/DeleteSong'
import ViewAll from './Display/ViewAll'
function App() {
  return (
    <div className="App text-white">
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/analytics' element={<Home/>}/>
        <Route path='/addSong' element={<AddSong/>}/>
        <Route path='/delfromplaylist' element={<DeleteFromPlaylist/>}/>
        <Route path='/addtoplaylist' element={<AddToPlaylist/>}/>
        <Route path='/viewPlaylist' element={<ViewPlaylist/>}/>
        <Route path='/viewAlbums' element={<ViewSongs/>}/>
        <Route path='/viewAll' element={<ViewAll/>}/>
        <Route path='album/:name' element={<Album/>}/>
        <Route path='*' element={<h1>Error 404 Page does not exist :(</h1>}/>
      </Routes>
    </div>
  )
}

export default App
