import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { AppContext } from './app.context';
import { AppContextProvider } from './app.context.provider';

function TestComponent() {
  const { photos } = useContext(AppContext);
  const initialState = {
    photos: [],
    actualPhoto: [],
  };

  if (JSON.stringify(photos) === JSON.stringify(initialState)) {
    return <p>Test Ok</p>;
  }
  return <p>Test failed</p>;
}

describe('Given the app context provider', () => {
  test('Then it should context', () => {
    render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>
    );

    const element = screen.getByText(/Test ok/i);
    expect(element).toBeInTheDocument();
  });
});
