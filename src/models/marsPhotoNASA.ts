export type MarsPhotoNASAStructure = {
  id: string;
  sol: string;
  camera: {
    id: string;
    name: string;
    rover_id: string;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: string;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
};
