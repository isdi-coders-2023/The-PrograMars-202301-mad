import { SyntheticEvent } from 'react';

export function Add() {
  const handleClick = (ev: SyntheticEvent) => {
    console.log('clicked');
  };

  return (
    <div className="container">
      <form className="form">
        <h2>CREATE YOUR OWN MARS PHOTO</h2>
        <label>
          <input type="text" id="id" placeholder="Photo id" required />
        </label>
        <label>
          <input
            type="text"
            id="favoriteName"
            placeholder="Photo name"
            required
          />
        </label>
        <label>
          <input
            type="text"
            id="rover_launch_date"
            placeholder="Launch date"
            required
          />
          <input
            type="text"
            id="rover_landing_date"
            placeholder="Landing date"
            required
          />
          <input
            type="text"
            id="camera_name"
            placeholder="Camera Name"
            required
          />
          <input
            type="text"
            id="rover_status"
            placeholder="Rover Status"
            required
          />
        </label>

        <button onClick={handleClick}>SEND</button>
      </form>
    </div>
  );
}
