import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { AppContext } from './app.context';
import { AppContextProvider } from './app.context.provider';

function TestComponent() {
  const { photos } = useContext(AppContext);

  if (photos[0] === undefined) {
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
