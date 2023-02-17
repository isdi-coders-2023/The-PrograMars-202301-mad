import { SyntheticEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../../models/api';

interface CardData {
  info: Photo;
}

export function Card({ info }: CardData) {
  const { actualCard } = useContext(photosContext);
  const handleClick = (ev: SyntheticEvent) => {
    actualCard(info);
    <Link to={'/details'}>{'details'}</Link>;
  };

  return (
    <div onClick={handleClick}>
      <img className="mars-photo" src={info.img_src} alt={info.earth_date} />
      <p>Camera: {info.camera.name}</p>
      <p>#{info.id}</p>
    </div>
  );
}
