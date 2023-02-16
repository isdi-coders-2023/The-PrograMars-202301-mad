import { MarsPhotoStructure } from '../models/marsPhoto';

export const MOCK_MARSPHOTOS: MarsPhotoStructure[] = [
  {
    id: '102693',
    sol: '1000',
    camera_id: '20',
    camera_name: 'FHAZ',
    camera_rover_id: '5',
    camera_full_name: 'Front Hazard Avoidance Camera',
    img_src:
      'https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
    earth_date: '2015-05-30',
    rover_id: '5',
    rover_name: 'Curiosity',
    rover_landing_date: '2012-08-06',
    rover_launch_date: '2011-11-26',
    rover_status: 'active',
    apiOrigin: 'APIPublic',
    isFavorite: true,
    favoriteName: '',
  },
];
