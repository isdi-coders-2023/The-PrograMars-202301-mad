import './filter.desktop.scss';
export function Filter() {
  const cams = ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam'];

  return (
    <fieldset className="mobile-hidden" key="fieldset">
      <legend key="legend">Select camera</legend>
      <input
        type="radio"
        name="cam"
        id="lasts photos"
        value="&camera=lasts photos"
        key="last-photos"
      ></input>
      <label htmlFor="lasts photos" key="last-photos-label">
        LASTS PHOTOS
      </label>
      {cams.map((item) => {
        return (
          <>
            <input
              type="radio"
              name="cam"
              id={item}
              value={'&camera=' + item}
              key={item + 'input'}
            ></input>
            <label htmlFor={item} key={item + 'label'}>
              {item.toUpperCase()}
            </label>
          </>
        );
      })}
    </fieldset>
  );
}
