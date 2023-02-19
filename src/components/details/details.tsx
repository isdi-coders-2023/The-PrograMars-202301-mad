import { useContext } from 'react';
import { PhotosContext } from '../../app.context/app.context';
import { CardDetail } from '../card.details/card.details';

export function Details() {
  const { state } = useContext(PhotosContext);

  return <CardDetail info={state?.actualPhoto}></CardDetail>;
}
