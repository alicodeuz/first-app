import React from 'react';
import Button from '../Common/Button';
// import ButtonClass from '../Common/ButtonClass';

const Gallery = () => {
  const user = { name: 'Abdulla', lastName: 'Qurbonov' };

  const handleLogin = (e) => {
    alert(`${user.name} ${user.lastName} is logged in`);
  }

  const handleSignUp = (e) => {
    alert(`${user.name} ${user.lastName} signed up`);
  }

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
        <div>
          <Button
            status="danger"
            style={{ marginRight: 20 }}
            title="Sign Up"
            outline
            className="me-3"
            onClick={handleSignUp}
          />
          <Button
            status="primary"
            title="Login"
            id="test-id"
            onClick={handleLogin}
          />
          {/* <ButtonClass
            status="primary"
            title="Class Button"
            id="test-id"
          /> */}
        </div>
      </div>
    </header>
  )
};

// export { Gallery }
export default Gallery;