import { useContext, useEffect } from 'react';
import { PhotosContext } from '../../app.context/app.context';
import './page.button.scss';

export function PageButtons() {
  const { state, loadPhotos } = useContext(PhotosContext);

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  const handlerClick = () => {
    loadPhotos();
  };

  return (
    <>
      <div className="Gallery-next-prev-buttons">
        <button className="previous-button" onClick={handlerClick}>
          <img src="/assets/img/previous-button.png" alt="Previous button" />
        </button>
        <p>{state.actualPage}</p>
        <button className="next-button" onClick={handlerClick}>
          <img src="/assets/img/next-button.png" alt="Next button" />
        </button>
      </div>
    </>
  );
}
