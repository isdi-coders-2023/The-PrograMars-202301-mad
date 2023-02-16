export type MarsPhotoStructure = {
  id: string;
  sol: string;
  camera_id: string;
  camera_name: string;
  camera_rover_id: string;
  camera_full_name: string;
  img_src: string;
  earth_date: string;
  rover_id: string;
  rover_name: string;
  rover_landing_date: string;
  rover_launch_date: string;
  rover_status: string;
  apiOrigin: 'APIPublic' | 'APIPrivate';
  isFavorite: boolean;
  favoriteName: string;
};
