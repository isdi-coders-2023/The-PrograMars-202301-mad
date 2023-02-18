import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { PhotosContext } from './app.context';
import { PhotosContextProvider } from './app.context.provider';

function TestComponent() {
  const { state } = useContext(PhotosContext);
  const initialState = {
    photos: [],
    actualPhoto: [],
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
