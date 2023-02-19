import './card.details.scss';
import { SyntheticEvent } from 'react';
import { MarsPhotoStructure } from '../../models/marsPhoto';

interface CardDetailProps {
  info: MarsPhotoStructure;
}

export function CardDetail({ info }: CardDetailProps) {
  const handleClickFavorite = (ev: SyntheticEvent) => {
    const element = document.querySelector('.fa-heart') as HTMLElement;
    element?.classList.toggle('fa-solid');
    info.isFavorite = !info.isFavorite;
  };

  return (
    <article className="cardDetail">
      <picture className="cardDetail__picture">
        <img
          className="cardDetail__img"
          src={info?.img_src}
          alt={info?.camera_full_name}
        />
        <p className="cardDetail__id-name">Name: {info?.favoriteName}</p>
        <p className="cardDetail__id-value"># {info?.id}</p>
      </picture>

      <div className="cardDetail__field-name-value">
        <div className="cardDetail__field-name">Date</div>
        <div className="cardDetail__field-value">{info?.earth_date}</div>

        <div className="cardDetail__field-name">Rover's name</div>
        <div className="cardDetail__field-value">{info?.rover_name}</div>

        <div className="cardDetail__field-name">Launch date</div>
        <div className="cardDetail__field-value">{info?.rover_launch_date}</div>

        <div className="cardDetail__field-name">Landing date</div>
        <div className="cardDetail__field-value">
          {info?.rover_landing_date}
        </div>

        <div className="cardDetail__field-name">Camera</div>
        <div className="cardDetail__field-value">{info?.camera_full_name}</div>

        <div className="cardDetail__field-name">Status</div>
        <div className="cardDetail__field-value">{info?.rover_status}</div>
        <span className="cardDetail__favorite">
          <i
            className={
              info?.isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
            }
            role="button"
            onClick={handleClickFavorite}
          ></i>
        </span>
      </div>
    </article>
  );
}
