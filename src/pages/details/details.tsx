import { MarsPhotoStructure } from '../../models/marsPhoto';

interface detailsProps {
  info: MarsPhotoStructure;
}

export default function Details({ info }: detailsProps) {
  return <h2>Details</h2>;
}
