export type MarsPhotoStructure = {
  id: number;
  sol: number;
  camera_id: number;
  camera_name: string;
  camera_rover_id: number;
  camera_full_name: string;
  img_src: string;
  earth_date: string;
  rover_id: number;
  rover_name: string;
  rover_landing_date: number;
  rover_launch_date: number;
  rover_status: string;
  apiOrigin: 'APIPublic' | 'APIPrivate';
  isFavorite: false;
  favoriteName: string;
};
