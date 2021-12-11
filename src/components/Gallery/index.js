import React from 'react';
import { nanoid } from 'nanoid';
import GalleryItem from './GalleryItem';

const images = [
  {
    src: 'https://cdn.pixabay.com/photo/2021/12/07/23/09/cup-6854258__340.jpg',
    alt: 'Coffee',
    link: '#1',
    disabled: false
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/12/05/08/52/dried-hydrangeas-6846990__340.jpg',
    alt: 'Qish',
    link: '#2',
    disabled: true
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/07/22/07/04/design-5428296__340.png',
    alt: 'Archalar',
    link: '#3',
    disabled: false
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/12/05/10/50/beach-6847276__340.jpg',
    alt: 'Muz',
    link: '#4',
    disabled: true
  },
];

const colors = ['red', 'blue', 'blue', 'red', 'green'];

const Gallery = () => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <section className="py-3">
        <div className="container">
          <h2>Gallery</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              images.filter(item => item.disabled).map((item, index) => {
                const { src, alt, link, disabled } = item;
                let title = `My ${index + 1} Image`;

                if (index === 0) {
                  title = "My 1st Image"
                } else if (index === (images.length - 1)) {
                  title = "My Last Image"
                }

                return (
                  <GalleryItem
                    src={src}
                    alt={alt}
                    link={link}
                    title={title}
                    disabled={disabled}
                    key={nanoid(10)}
                  />
                )
              })
            }
          </div>
          <div>
            {
              colors.map((item, index) => <span key={nanoid(10)}>{item}</span>)
            }
          </div>
        </div>
      </section>
    )
  }

  return <h1>Please, login in now</h1>
};

// export { Gallery }
export default Gallery;