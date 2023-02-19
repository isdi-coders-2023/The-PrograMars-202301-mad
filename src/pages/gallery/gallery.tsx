import { Gallery } from '../../components/gallery/gallery';
import { GalleryButtons } from '../../components/page.button/page.button';

export default function GalleryPage() {
  return (
    <Gallery>
      <div>
        <GalleryButtons></GalleryButtons>
      </div>
    </Gallery>
  );
}
