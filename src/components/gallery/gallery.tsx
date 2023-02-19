import { useContext } from 'react';
import { PhotosContext } from '../../app.context/app.context';
import { Card } from '../../components/card/card';
import { Filter } from '../../components/filter.desktop/filter.desktop';
import { MarsPhotoStructure } from '../../models/marsPhoto';
import { FilterMobile } from '../filter.mobile/filter.mobile';

export function Gallery() {
  const { state } = useContext(PhotosContext);

  return (
    <>
      <Filter></Filter>
      <FilterMobile></FilterMobile>
      {state?.photos.map((item: MarsPhotoStructure) => (
        <Card info={item} key={item.id}></Card>
      ))}
    </>
  );
}
