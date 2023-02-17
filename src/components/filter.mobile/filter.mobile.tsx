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
    <>
      <label htmlFor={'camera-select'} id={'camera-select'}>
        Choose a camera:
      </label>
      <select name="camera" id={'camera-select'}>
        {cams.map((item) => (
          <option value={item} className="filter__option" key={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
}
