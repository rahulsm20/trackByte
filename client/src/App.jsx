import {Routes,Route} from 'react-router-dom'
import Home from './Home/Home'
import AddSong from './Create/AddSong'
import AddToPlaylist from './Create/AddToPlaylist'
import './App.css'
import ViewPlaylist from './Display/ViewPlaylist'

function App() {
  return (
    <div className="App text-white">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addSong' element={<AddSong/>}/>
        <Route path='/addtoplaylist' element={<AddToPlaylist/>}/>
        <Route path='/viewPlaylist' element={<ViewPlaylist/>}/>
        <Route path='*' element={<h1>Error 404 Page does not exist :(</h1>}/>
      </Routes>
    </div>
  )
}

export default App
