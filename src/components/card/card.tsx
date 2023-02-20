import { SyntheticEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PhotosContext } from '../../app.context/app.context';
import { MarsPhotoStructure } from '../../models/marsPhoto';

import './card.scss';

interface CardData {
  info: MarsPhotoStructure;
}

export function Card({ info }: CardData) {
  const { actualCard } = useContext(PhotosContext);
  const handleClick = (ev: SyntheticEvent) => {
    actualCard({ ...info });
  };
  const handleClickFavorite = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLElement;
    element?.classList.toggle('fa-solid');
    element?.classList.toggle('fa-regular');
    info.isFavorite = !info.isFavorite;
  };
  return (
    <>
      <article className="card">
        <Link to={'/details'}>
          <div onClick={handleClick}>
            <img
              className="card__photo"
              src={info.img_src}
              alt={info.earth_date}
              onClick={handleClick}
            />
            <div className="card__info">
              <p>
                <span> Camera:</span> {info.camera_name}
              </p>
              <p>
                <span>Photo number: </span>
                {info.id}
              </p>
            </div>
          </div>
        </Link>
        <i
          className={
            info.isFavorite
              ? 'fa-solid fa-star card__fav'
              : 'fa-regular fa-star card__fav'
          }
          role="button"
          onClick={handleClickFavorite}
        ></i>
      </article>
    </>
  );
}
