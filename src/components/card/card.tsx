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

  return (
    <Link to={'/details'}>
      <div onClick={handleClick} className="card">
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
  );
}
