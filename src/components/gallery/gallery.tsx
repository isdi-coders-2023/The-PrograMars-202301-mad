import { useContext } from 'react';
import { PhotosContext } from '../../app.context/app.context';
import { Card } from '../../components/card/card';
import { Filter } from '../../components/filter.desktop/filter.desktop';
import { MarsPhotoStructure } from '../../models/marsPhoto';
import { FilterMobile } from '../filter.mobile/filter.mobile';
import './gallery.scss';

export function Gallery() {
  const { state } = useContext(PhotosContext);

  return (
    <div className="gallery">
      <Filter></Filter>
      <FilterMobile></FilterMobile>
      <main className="gallery__list">
        {state?.photos.map((item: MarsPhotoStructure) => (
          <Card info={item} key={item.id}></Card>
        ))}
      </main>
    </div>
  );
}
