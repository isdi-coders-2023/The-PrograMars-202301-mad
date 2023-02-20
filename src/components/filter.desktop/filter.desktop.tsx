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
      ></input>
      <label htmlFor="lasts photos">LASTS PHOTOS</label>
      {cams.map((item) => {
        return (
          <div key={item}>
            <input
              type="radio"
              name="cam"
              id={item}
              value={'&camera=' + item}
            ></input>
            <label htmlFor={item}>{item.toUpperCase()}</label>
          </div>
        );
      })}
    </fieldset>
  );
}
