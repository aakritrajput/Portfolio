import { photos } from "../photos/photos";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import blur effect CSS

function Gallery() {
  return (
    <>
      <h1 className="text-[30px] text-black w-full mt-5 text-center font-mono bg-purple-300">
        Gallery
      </h1>
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-gray-800 shadow-xl shadow-[#b08ee2] rounded-lg overflow-hidden flex flex-col items-center"
          >
            <Link to={`/gallery/${photo.title}`} className="w-full flex justify-center items-center">
              <LazyLoadImage
                src={photo.src}
                alt={photo.alt}
                effect="blur" // Blur effect only while loading
                className="w-full h-48 object-contain border-[2px] border-purple-700 rounded-xl"
              />
            </Link>
            <div className="p-4 text-center">
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
