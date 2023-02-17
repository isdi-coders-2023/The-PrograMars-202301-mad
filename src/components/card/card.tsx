import { SyntheticEvent } from 'react';
import { Photo } from '../../models/api';

interface CardData {
  info: Photo;
}

export function Card({ info }: CardData) {
  const handleClick = (ev: SyntheticEvent) => {
    console.log('clicked');
  };

  return (
    <div onClick={handleClick}>
      <img className="mars-photo" src={info.img_src} alt={info.earth_date} />
      <p>Camera: {info.camera.name}</p>
      <p>#{info.id}</p>
    </div>
  );
}
