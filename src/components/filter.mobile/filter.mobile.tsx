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
    <div className="filter">
      <label
        htmlFor={'camera-select'}
        id={'camera-select'}
        className="filter__title"
      >
        Camera:
      </label>
      <select name="camera" id={'camera-select'} className="filter__options">
        {cams.map((item) => (
          <option value={item} className="filter__option">
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
