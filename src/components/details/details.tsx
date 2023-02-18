import { useContext } from 'react';
import { PhotosContext } from '../../app.context/app.context';
import { CardDetails } from '../card.details/card.details';

export function Details() {
  const { state } = useContext(PhotosContext);

  return <CardDetails info={state.actualPhoto}></CardDetails>;
}
