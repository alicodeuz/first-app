import { nanoid } from 'nanoid';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import Button from '../Common/Button';

export default function AddItem(props) {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState({
    title: 'Demo',
    url: '',
    disabled: false,
    promotion: true
  });

  const handleModalVisible = () => {
    setVisible(!visible);
  }

  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;
    if (type === 'checkbox') {
      setItem({ ...item, [name]: checked });
      // if (name === 'disabled') {
      //   setItem({ ...item, [name]: checked, promotion: !checked });
      // } else {
      //   setItem({ ...item, [name]: checked, disabled: !checked });
      // }
    } else {
      setItem({ ...item, [name]: value });
    }
  };

  console.log(item);

  const handleSave = (e) => {
    e.preventDefault();
    console.log(nanoid(6), uuid())
    const newItem = {
      ...item,
      id: nanoid()
    };

    const gallery = localStorage.gallery;

    if (gallery) {
      const mergedItems = JSON.parse(gallery)
      mergedItems.push(newItem);
      localStorage.setItem('gallery', JSON.stringify(mergedItems))
    } else {
      localStorage.setItem('gallery', JSON.stringify([newItem]));
    }
  };

  return (
    <>
      <Button onClick={handleModalVisible} title="Add Item">Add item</Button>
      <div
        className="modal fade show"
        style={{
          display: visible ? 'block' : 'none',
          backgroundColor: 'rgba(0,0,0,0.65)'
        }}
        id="staticBackdrop"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleModalVisible} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input
                    onChange={handleChange}
                    name="title"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={item.title}
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input
                    value={item.url}
                    onChange={handleChange}
                    type="url"
                    name="url"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    checked={item.disabled}
                    onChange={handleChange}
                    type="checkbox"
                    name="disabled"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">Disable</label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    checked={item.promotion}
                    onChange={handleChange}
                    type="checkbox"
                    name="promotion"
                    className="form-check-input"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck2">Promotion</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
