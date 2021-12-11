import React from 'react';

const defaultImage = "https://cdn.pixabay.com/photo/2021/12/08/11/01/christmas-6855367__340.jpg";

const GalleryItem = ({ link = '#', src = defaultImage, title, disabled, alt = 'default', ...props }) => {
  console.log(props);
  return (
    <div className="col">
      <div className={`card ${disabled ? 'disabled' : title ? 'has-title' : ''}`}>
        <img src={src} className="card-img-top" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  )
};

export default GalleryItem;
