import './details.scss';
import { SyntheticEvent } from 'react';
import { MarsPhotoStructure } from '../../models/marsPhoto';

interface detailsProps {
  info: MarsPhotoStructure;
}

export default function Details({ info }: detailsProps) {
  const handleClickFavorite = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const element = document.querySelector('.fa-heart') as HTMLElement;
    element?.classList.toggle('fa-solid');
  };
  return (
    <article className="card">
      <picture className="card__picture">
        <img
          className="card__img"
          src={info.img_src}
          alt={info.camera_full_name}
        />
        <p className="card__id-name"># {info.isFavorite.toString()}</p>
        <p className="card__id-value">{info.id}</p>
      </picture>

      <div className="card__field-name-value">
        <div className="card__field-name">Date</div>
        <div className="card__field-value">{info.earth_date}</div>

        <div className="card__field-name">Rover's name</div>
        <div className="card__field-value">{info.rover_name}</div>

        <div className="card__field-name">Launch date</div>
        <div className="card__field-value">{info.rover_launch_date}</div>

        <div className="card__field-name">Landing date</div>
        <div className="card__field-value">{info.rover_landing_date}</div>

        <div className="card__field-name">Camera</div>
        <div className="card__field-value">{info.camera_full_name}</div>

        <div className="card__field-name">Status</div>
        <div className="card__field-value">{info.rover_status}</div>
        <span className="card__favorite">
          {info.isFavorite! ? (
            <i
              className="heart fa-solid fa-heart"
              onClick={handleClickFavorite}
            ></i>
          ) : (
            <i className="heart fal fa-heart" onClick={handleClickFavorite}></i>
          )}
        </span>
      </div>
    </article>
  );
}
