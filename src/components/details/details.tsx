import { useContext } from 'react';
import { CardDetails } from '../card.details/card.details';

export function Details() {
  const { photos } = useContext(photosContext);

  return <CardDetails info={photos.actualPhoto}></CardDetails>;
}
