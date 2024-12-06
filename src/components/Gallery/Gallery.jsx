import React, { useState, useEffect } from 'react';

function Gallery() {
  const photos = [
    {
      id: 1,
      src: 'https://wallpaperaccess.com/full/1675036.png',
      alt: 'Certification 1',
      likes: 0,
      title: 'Certification 1',
      details: 'This certification was awarded for completing the React course.'
    },
    {
      id: 2,
      src: 'https://i.ytimg.com/vi/N2ZU06Yd9AU/maxresdefault.jpg',
      alt: 'Certification 2',
      likes: 0,
      title: 'Certification 2',
      details: 'This certification was awarded for excellence in JavaScript.'
    },
    // Add more photos here
  ];

  const [gallery, setGallery] = useState(photos);

  useEffect(() => {
    const savedLikes = localStorage.getItem('galleryLikes');
    if (savedLikes) {
      setGallery(JSON.parse(savedLikes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('galleryLikes', JSON.stringify(gallery));
  }, [gallery]);

  const handleLikeToggle = (id) => {
    const newGallery = gallery.map(photo => {
      if (photo.id === id) {
        const likedPhotos = JSON.parse(localStorage.getItem('likedPhotos')) || {};
        if (likedPhotos[id]) {
          // Unlike the photo
          likedPhotos[id] = false;
          photo.likes = Math.max(0, photo.likes - 1);
        } else {
          // Like the photo
          likedPhotos[id] = true;
          photo.likes += 1;
        }
        localStorage.setItem('likedPhotos', JSON.stringify(likedPhotos));
      }
      return photo;
    });
    setGallery(newGallery);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {gallery.map(photo => (
        <div key={photo.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{photo.title}</h3>
            <p className="text-gray-600">{photo.details}</p>
            <button
              onClick={() => handleLikeToggle(photo.id)}
              className="text-purple-600 mt-2"
            >
              👍 {photo.likes}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
