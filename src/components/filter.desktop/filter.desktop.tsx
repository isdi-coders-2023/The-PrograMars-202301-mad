import './filter.desktop.scss';
export function Filter() {
  const cams = ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam'];

  return (
    <fieldset className="mobile-hidden">
      <legend>Select camera</legend>
      <input
        type="radio"
        name="cam"
        id="lasts photos"
        value="&camera=lasts photos"
        checked
      ></input>
      <label htmlFor="lasts photos">LASTS PHOTOS</label>
      {cams.map((item) => {
        return (
          <>
            <input
              type="radio"
              name="cam"
              id={item}
              value={'&camera=' + item}
              key={item}
            ></input>
            <label htmlFor={item} key={item}>
              {item.toUpperCase()}
            </label>
          </>
        );
      })}
    </fieldset>
  );
}
