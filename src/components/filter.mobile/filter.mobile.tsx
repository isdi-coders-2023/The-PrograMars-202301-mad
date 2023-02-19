import './filter.mobile.scss';

export function FilterMobile() {
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
      <select name="camera" id={'camera-select'} className="filter__options">
        {cams.map((item) => (
          <option value={item} className="filter__option" key={item + 'select'}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
