import './card.scss';
import { MOCK_MARSPHOTOS } from '../mocks/marsPhotos';

interface cardProps {
  i: number;
}
export default function Card({ i }: cardProps) {
  //props: cardProps
  //item: MarsPhotoStructure
  const dataOrigin = MOCK_MARSPHOTOS;
  return (
    <div className="card">
      <div className="card__id">{dataOrigin[i].id}</div>
      <div className="card__camera">{dataOrigin[i].camera_full_name}</div>
      <div>
        <img
          className="card__img"
          src={dataOrigin[i].img_src}
          alt={dataOrigin[i].camera_full_name}
        />
      </div>
      <div className="card__footer">
        <div className="footer__isFavorite">{dataOrigin[i].isFavorite}</div>
        <div className="footer__favoriteName favoriteFalse">
          {dataOrigin[i].favoriteName}
        </div>
      </div>
    </div>
  );
}
