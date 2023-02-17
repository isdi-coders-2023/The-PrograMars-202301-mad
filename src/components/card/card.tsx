import { SyntheticEvent } from 'react';
import { Photo } from '../../models/api';
import './card.scss';

interface CardData {
  info: Photo;
}

export function Card({ info }: CardData) {
  const handleClick = (ev: SyntheticEvent) => {
    console.log('clicked');
  };

  return (
    <div className="mars-photo" onClick={handleClick}>
      <img
        className="mars-photo__item"
        src={info.img_src}
        alt={info.earth_date}
      />
      <div className="mars-photo__data">
        <p>Camera: {info.camera.name}</p>
        <p>#{info.id}</p>
      </div>
    </div>
  );
}
