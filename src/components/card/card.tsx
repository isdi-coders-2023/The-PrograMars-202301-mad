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
      <div onClick={handleClick}>
        <img
          className="mars-photo"
          src={info.img_src}
          alt={info.earth_date}
          onClick={handleClick}
        />
        <p>Camera: {info.camera_name}</p>
        <p>#{info.id}</p>
      </div>
    </Link>
  );
}
