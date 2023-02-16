import { MarsPhotoStructure } from '../../models/marsPhoto';

interface DetailProps {
  info: MarsPhotoStructure;
}

export default function Details({ info }: DetailProps) {
  return <h2>Details</h2>;
}
