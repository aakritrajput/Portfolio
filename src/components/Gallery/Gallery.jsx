import  { useState, useEffect } from 'react';
import { photos } from '../photos/photos';
import { Link } from 'react-router-dom';

function Gallery() {
  

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


  return (
    <>
    <h1 className='text-[30px] text-black w-full mt-5 text-center font-mono bg-purple-300'>Gallery</h1>
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {gallery.map(photo => (
        <div key={photo.id} className="bg-gray-800 backdrop-blur-2xl shadow-xl shadow-[#b08ee2] rounded-lg overflow-">
          <Link to={`/gallery/${photo.title}`}>
            <img src={photo.src} alt={photo.alt} className="w-full h-48 object-contain mt-3 border-[2px]  border-purple-700 rounded-xl" />
          </Link>
          
          <div className="p-4">
            <h3 className="text-xl text-[#b08ee2] font-bold">{photo.title}</h3>
            <p className="text-gray-200">{photo.details}</p>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

export default Gallery;
