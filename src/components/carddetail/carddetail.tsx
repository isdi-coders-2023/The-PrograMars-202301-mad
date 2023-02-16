import './carddetail.scss';
import { SyntheticEvent } from 'react';
import { MarsPhotoStructure } from '../../models/marsPhoto';

interface CardDetailProps {
  info: MarsPhotoStructure;
}

export function CardDetail({ info }: CardDetailProps) {
  const handleClickFavorite = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const element = document.querySelector('.fa-heart') as HTMLElement;
    element?.classList.toggle('fa-solid');
  };
  return (
    <article className="cardDetail">
      <picture className="cardDetail__picture">
        <img
          className="cardDetail__img"
          src={info.img_src}
          alt={info.camera_full_name}
        />
        <p className="cardDetail__id-name"># {info.isFavorite.toString()}</p>
        <p className="cardDetail__id-value">{info.id}</p>
      </picture>

      <div className="cardDetail__field-name-value">
        <div className="cardDetail__field-name">Date</div>
        <div className="cardDetail__field-value">{info.earth_date}</div>

        <div className="cardDetail__field-name">Rover's name</div>
        <div className="cardDetail__field-value">{info.rover_name}</div>

        <div className="cardDetail__field-name">Launch date</div>
        <div className="cardDetail__field-value">{info.rover_launch_date}</div>

        <div className="cardDetail__field-name">Landing date</div>
        <div className="cardDetail__field-value">{info.rover_landing_date}</div>

        <div className="cardDetail__field-name">Camera</div>
        <div className="cardDetail__field-value">{info.camera_full_name}</div>

        <div className="cardDetail__field-name">Status</div>
        <div className="cardDetail__field-value">{info.rover_status}</div>
        <span className="cardDetail__favorite">
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
