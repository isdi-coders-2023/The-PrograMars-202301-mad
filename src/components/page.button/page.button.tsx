import { useContext } from 'react';
import { loadPhotosCreator } from '../../reducer/photos.actions.creator';

export function PrevNextButtons() {
  const { marsPhotos, loadPhotosCreator } = useContext();
  const handlerButton = (changePage: number) => {
      loadPhotosCreator();
    },
    [loadPhotosCreator];
}

return (
  <>
    <div
      className="next-button"
      onClick={() => {
        handlerButton(+1);
      }}
    ></div>
  </>
);
