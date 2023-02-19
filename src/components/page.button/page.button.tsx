import { useContext, useEffect } from 'react';
import { AppContext } from '../../app.context/app.context';
import './page.button.scss';

export function handleClick() {
  const { state, loadPhotos } = useContext(AppContext);

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  const handlerButton = (page: number) => {
    loadPhotos(page);
  };
  return (
    <>
      <div className="Gallery-next-prev-buttons">
        <button
          className="next-button"
          onClick={() => {
            handlerButton(+1);
          }}
        >
          <img src="./public/assets/img/next-button.png" alt="Next button" />
        </button>

        <button
          className="previous-button"
          onClick={() => {
            handlerButton(-1);
          }}
        >
          <img
            src="./public/assets/img/previous-button.png"
            alt="Previous button"
          />
        </button>
      </div>
    </>
  );
}
