import './card.scss';
import { MOCK_MARSPHOTOS } from '../mocks/marsPhotos';
import { SyntheticEvent } from 'react';

export function Card() {
  const dataOrigin = MOCK_MARSPHOTOS;

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
          src={dataOrigin[0].img_src}
          alt={dataOrigin[0].camera_full_name}
        />
        <div className="card__id-name">#</div>
        <div className="card__id-value">{dataOrigin[0].id}</div>
      </picture>

      <div className="card__field-name-value">
        <div className="card__field-name">Date</div>
        <div className="card__field-value">{dataOrigin[0].earth_date}</div>

        <div className="card__field-name">Rover's name</div>
        <div className="card__field-value">{dataOrigin[0].rover_name}</div>

        <div className="card__field-name">Launch date</div>
        <div className="card__field-value">
          {dataOrigin[0].rover_launch_date}
        </div>

        <div className="card__field-name">Landing date</div>
        <div className="card__field-value">
          {dataOrigin[0].rover_landing_date}
        </div>

        <div className="card__field-name">Camera</div>
        <div className="card__field-value">
          {dataOrigin[0].camera_full_name}
        </div>

        <div className="card__field-name">Status</div>
        <div className="card__field-value">{dataOrigin[0].rover_status}</div>
        <div className="card__favorite">
          {dataOrigin[0].isFavorite! ? (
            <i className="fa-solid fa-heart" onClick={handleClickFavorite}></i>
          ) : (
            <i className="fa-thin fa-heart" onClick={handleClickFavorite}></i>
          )}
        </div>
      </div>
    </article>
  );
}
