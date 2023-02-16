export function FilterMobile() {
  const cams = ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam'];

  return (
    <>
      <label htmlFor={'camera-select'} id={'camera-select'}>
        Choose a pet:
      </label>
      <select name="pets" id={'pet-select'}>
        {cams.map((item) => (
          <option value={item}>{item.toUpperCase()} </option>
        ))}
      </select>
    </>
  );
}
