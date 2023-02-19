import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { PhotosContext } from './app.context';
import { PhotosContextProvider } from './app.context.provider';

function TestComponent() {
  const { state } = useContext(PhotosContext);
  const initialState = {
    photos: [],
    actualPhoto: {
      id: 1,
      sol: 1,
      camera_id: 1,
      camera_name: '',
      camera_rover_id: 1,
      camera_full_name: '',
      img_src: '',
      earth_date: '',
      rover_id: 1,
      rover_name: '',
      rover_landing_date: '',
      rover_launch_date: '',
      rover_status: '',
      apiOrigin: '',
      isFavorite: false,
      favoriteName: '',
    },
  };

  if (JSON.stringify(state) === JSON.stringify(initialState)) {
    return <p>Test Ok</p>;
  }
  return <p>Test failed</p>;
}

describe('Given the app context provider', () => {
  test('Then it should context', () => {
    render(
      <PhotosContextProvider>
        <TestComponent />
      </PhotosContextProvider>
    );

    const element = screen.getByText(/Test ok/i);
    expect(element).toBeInTheDocument();
  });
});
