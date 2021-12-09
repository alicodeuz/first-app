import React from 'react';
import Button from '../Common/Button';


const Gallery = () => {
  return (
    <header className="py-3">
      <div className="container d-flex align-center justify-content-between">
        <a href="#home" className="nav-link brand">Logo</a>
        <ul className="nav nav-pills">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
        <Button status="primary" />
        <Button status="danger" />
        <Button status="warning" />
      </div>
    </header>
  )
};

// export { Gallery }
export default Gallery;