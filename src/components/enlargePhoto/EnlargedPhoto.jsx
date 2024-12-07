import { useParams } from 'react-router-dom';
import { photos } from '../photos/photos';

function EnlargedPhoto() {
  const { photoId } = useParams();

  const filteredPhotos = photos.filter(photo => photo.title === photoId);

  return (
    <div className='w-[100vw] bg-transparent'>
      <h1 className='w-full text-center my-3 text-2xl font-mono text-purple-400'>
        <u>{photoId}</u>
      </h1>

      {filteredPhotos.map(photo => (
        <div key={photo.id} className='w-full flex justify-center'>
          <img src={photo.src} alt="photo" className='w-[80%] md:h-[80vh] md:w-auto rounded-lg' />
        </div>
      ))}
    </div>
  );
}

export default EnlargedPhoto;
