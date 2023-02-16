export function Filter() {
  const cams = ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam'];

  return (
    <fieldset>
      <legend>Select camera</legend>
      {cams.map((item) => {
        return (
          <>
            <input
              type="radio"
              name="cam"
              id={item}
              value={'&camera=' + item}
            ></input>
            <label htmlFor={item}>{item.toUpperCase()}</label>
          </>
        );
      })}
    </fieldset>
  );
}
