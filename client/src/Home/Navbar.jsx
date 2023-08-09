import React,{useState} from 'react'
import {Offcanvas,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FcMusic } from 'react-icons/fc';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <nav className="navbar-nav navbar-expand-lg fixed-top mb-5">
        <ul className='list-unstyled d-flex flex-direction-row justify-content-center align-items-center mt-3'>
<Button variant="dark" onClick={handleShow}>
      <i className="bi bi-list"></i>
      </Button>
<li className='text-center nav-item mx-auto'>
      <h2 id="title">TrackByte <FcMusic/></h2>
</li>
        </ul>
      </nav>
      <Offcanvas show={show} onHide={handleClose} className="bg-black sidebar">
        <Offcanvas.Header closeButton className='bg-dark nav-head'>
          <Offcanvas.Title className="text-white"><h4>
          Choose an action
          </h4>
          </Offcanvas.Title>  
        </Offcanvas.Header>
        <Offcanvas.Body>
      <ul className="list-unstyled  ">
        <li className='p-2'>
            <Link to='/'><h4>
              Home
              </h4>
</Link>
        </li>
        {/* <li className="p-2">
          <Link to='/addSong'>
            <h4>
            Add new song
            </h4>
            </Link>
        </li> */}
        {/* <li  className="p-2">
          <Link to="/addtoplaylist">
           <h4>
Add song to playlist
            </h4>
          </Link>
        </li> */}
        <li className="p-2">
            <Link to='/viewPlaylist'><h4>
              View your playlist
              </h4>
              </Link>
        </li>
        <li className="p-2">
            <Link to='/viewAlbums'><h4>
              View all albums
              </h4>
              </Link>
        </li>
        <li className="p-2">
            <Link to='/viewAll'><h4>
              View all songs
              </h4>
              </Link>
        </li>
      </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Navbar
