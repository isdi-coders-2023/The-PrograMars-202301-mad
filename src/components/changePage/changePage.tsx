import { SyntheticEvent, useContext } from 'react';
import { PhotosContext } from '../../app.context/app.context';
import './changePage.scss';

export function ChangePage() {
  const { loadPhotos } = useContext(PhotosContext);

  const handlePage = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    const newPage = element.datavalue === 'next' ? 1 : -1;
    let actualPage = 1 + newPage;
    if (actualPage === 0) actualPage = 1;
    loadPhotos('&page=' + actualPage);
  };
  return (
    <div className="pagination">
      <i
        role="img"
        data-value="previous"
        onClick={handlePage}
        className="fa-regular fa-arrow-left"
      ></i>
      <i
        role="img"
        data-value="next"
        onClick={handlePage}
        className="fa-regular fa-arrow-right"
      ></i>
    </div>
  );
}
