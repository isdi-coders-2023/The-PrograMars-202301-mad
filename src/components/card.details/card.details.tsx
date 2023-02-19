import { MarsPhotoStructure } from '../../models/marsPhoto';

type CardDetailsProps = {
  info: MarsPhotoStructure;
};

export function CardDetails({ info }: CardDetailsProps) {
  return (
    <div>
      <div>
        <img src={info?.img_src} alt="" />
      </div>
      <ul>
        <li className="photo-property">Name</li>
        <li className="photo-value">{info?.favoriteName}</li>
        <li className="photo-property">Date</li>
        <li className="photo-value">{info?.earth_date}</li>
        <li className="photo-property">Rover's name</li>
        <li className="photo-value">{info?.rover_name}</li>
        <li className="photo-property">Launch date</li>
        <li className="photo-value">{info?.rover_launch_date}</li>
        <li className="photo-property">Land date</li>
        <li className="photo-value">{info?.rover_landing_date}</li>
        <li className="photo-property">Camera</li>
        <li className="photo-value">{info?.camera_full_name}</li>
      </ul>
    </div>
  );
}
