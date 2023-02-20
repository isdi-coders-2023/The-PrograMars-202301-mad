import { SyntheticEvent, useContext } from 'react';
import { PhotosContext } from '../../context/photos.context';
import './filter.mobile.scss';

export function FilterMobile() {
  const { loadPhotos } = useContext(PhotosContext);

  const handleClick = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    loadPhotos('&camera=' + element.value);
  };

  const cams = [
    'lasts photos',
    'fhaz',
    'rhaz',
    'mast',
    'chemcam',
    'mahli',
    'mardi',
    'navcam',
  ];

  return (
    <div className="desktop-hidden filter">
      <label
        htmlFor={'camera-select'}
        id={'camera-select'}
        className="filter__title"
        key="filter"
      >
        Camera:
      </label>
      <select
        name="camera"
        id={'camera-select'}
        className="filter__options"
        data-testId="select"
        onChange={handleClick}
      >
        {cams.map((item) => (
          <option value={item} className="filter__option" key={item + 'select'}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
