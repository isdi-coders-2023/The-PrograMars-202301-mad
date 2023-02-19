/* eslint-disable testing-library/no-render-in-setup */
import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import { usePhotos } from './use.photo.mars';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import { PrivateApiRepo } from '../services/repository/private.api.repo';
import { mockPhoto } from '../mocks/tests.mocks';

describe('Given a mocked repo show in a mocked html', () => {
  let element: HTMLElement[];
  let mockRepo: NasaApiRepo;
  let mockRepoError: NasaApiRepo;
  let mockRepo2: PrivateApiRepo;
  let mockRepo2Error: PrivateApiRepo;

  const spyOn = jest.spyOn(console, 'log');

  beforeEach(() => {
    const TestRepo = function () {
      const { state, loadPhotos, actualCard, loadPrivatePhotos, createPhoto } =
        usePhotos({
          publicRepo: mockRepo,
          privateRepo: mockRepo2,
        });

      return (
        <>
          <button onClick={() => loadPhotos()}>Load</button>
          <button onClick={() => actualCard(mockPhoto)}>
            {JSON.stringify(state.actualPhoto)}
          </button>
          <button onClick={() => loadPrivatePhotos()}>Private photos</button>
          <button onClick={() => createPhoto(mockPhoto)}>Create Photo</button>
        </>
      );
    };

    mockRepo = { loadPhotos: jest.fn() } as unknown as NasaApiRepo;

    mockRepo2 = {
      loadPrivatePhotos: jest.fn(),
      createPrivatePhoto: jest.fn(),
    } as unknown as PrivateApiRepo;

    const TestRepoError = function () {
      const { state, loadPhotos, actualCard, loadPrivatePhotos, createPhoto } =
        usePhotos({
          publicRepo: mockRepoError,
          privateRepo: mockRepo2Error,
        });

      return (
        <>
          <button onClick={() => loadPhotos()}>Load</button>
          <button onClick={() => actualCard(mockPhoto)}>
            {JSON.stringify(state.actualPhoto)}
          </button>
          <button onClick={() => loadPrivatePhotos()}>Private photos</button>
          <button onClick={() => createPhoto(mockPhoto)}>Create Photo</button>
        </>
      );
    };

    mockRepoError = {
      loadPhotos: jest.fn().mockRejectedValue(new Error('TestError')),
    } as unknown as NasaApiRepo;
    mockRepo2Error = {
      loadPrivatePhotos: jest.fn().mockRejectedValue(new Error('TestError')),
      createPrivatePhoto: jest.fn().mockRejectedValue(new Error('TestError')),
    } as unknown as PrivateApiRepo;

    render(
      <>
        <TestRepo />
        <TestRepoError></TestRepoError>
      </>
    );
  });

  describe('When user click the first button', () => {
    test('Then the load method is called', () => {
      element = screen.getAllByRole('button');
      userEvent.click(element[0]);
      expect(mockRepo.loadPhotos).toHaveBeenCalled();
    });
  });

  describe('When user click the second button', () => {
    test('Then the actualCard method is called', () => {
      element = screen.getAllByRole('button');
      const element2 = screen.getAllByText(/no actual card/i);
      expect(element2[0]).toBeInTheDocument();
      userEvent.click(element[1]);
      const element3 = screen.getAllByText(/test ok/i);
      expect(element3[0]).toBeInTheDocument();
    });
  });

  describe('When user click the third button', () => {
    test('Then the loadPrivatePhotos method is called', () => {
      element = screen.getAllByRole('button');
      userEvent.click(element[2]);
      expect(mockRepo2.loadPrivatePhotos).toHaveBeenCalled();
    });
  });

  describe('When the user click the fourth button', () => {
    test('Then the createPhoto method is called', () => {
      element = screen.getAllByRole('button');
      userEvent.click(element[3]);
      expect(mockRepo2.createPrivatePhoto).toHaveBeenCalled();
    });
  });

  describe('When user click the fifth button', () => {
    test('Then the load method error is called', () => {
      element = screen.getAllByRole('button');
      userEvent.click(element[4]);
      expect(spyOn).toHaveBeenCalled();
    });
  });

  describe('When user click the sixth button', () => {
    test('Then the load method error is called', () => {
      element = screen.getAllByRole('button');
      userEvent.click(element[5]);
      expect(spyOn).toHaveBeenCalled();
    });
  });

  describe('When user click the seventth button', () => {
    test('Then the load method error is called', () => {
      element = screen.getAllByRole('button');
      userEvent.click(element[6]);
      expect(spyOn).toHaveBeenCalled();
    });
  });

  describe('When user click the eighth button', () => {
    test('Then the load method error is called', () => {
      element = screen.getAllByRole('button');
      userEvent.click(element[7]);
      expect(spyOn).toHaveBeenCalled();
    });
  });
});
