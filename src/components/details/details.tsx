import { useContext } from 'react';
import { PhotosContext } from '../../app.context/app.context';
import { CardDetail } from '../carddetail/carddetail';

export function Details() {
  const { state } = useContext(PhotosContext);

  return <CardDetail info={state?.actualPhoto}></CardDetail>;
}
