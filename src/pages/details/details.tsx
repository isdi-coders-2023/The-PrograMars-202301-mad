import { Details } from '../../components/details/details';
import { MarsPhotoStructure } from '../../models/marsPhoto';

interface DetailProps {
  info: MarsPhotoStructure;
}

export default function DetailsPage() {
  return <Details />;
}
