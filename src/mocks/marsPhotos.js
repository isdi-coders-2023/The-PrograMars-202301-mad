// import { ProtoMarsPhoto, MarsPhotoStructure } from '../models/marsPhoto';

export const MOCK_MARSPHOTOS = [
  //: MarsPhotoStructure[]
  {
    id: '102693',
    sol: '1000',
    camera_id: '20',
    camera_name: 'FHAZ',
    camera_rover_id: '5',
    camera_full_name: 'Front Hazard Avoidance Camera',
    img_src:
      'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
    earth_date: '2015-05-30',
    rover_id: '5',
    rover_name: 'Curiosity',
    rover_landing_date: '2012-08-06',
    rover_launch_date: '2011-11-26',
    rover_status: 'active',
    apiOrigin: 'Public',
    isFavorite: '',
    favoriteName: '',
  },
];

// console.table(MOCK_MARSPHOTOS);

export class MarsPhoto {
  constructor(
    id,
    sol,
    camera_id,
    camera_name,
    camera_rover_id,
    camera_full_name,
    img_src,
    earth_date,
    rover_id,
    rover_name,
    rover_landing_date,
    rover_launch_date,
    rover_status,
    isFavorite,
    favoriteName
  ) {
    this.id = id;
    this.sol = sol;
    this.camera_id = camera_id;
    this.camera_name = camera_name;
    this.camera_rover_id = camera_rover_id;
    this.camera_full_name = camera_full_name;
    this.img_src = img_src;
    this.earth_date = earth_date;
    this.rover_id = rover_id;
    this.rover_name = rover_name;
    this.rover_landing_date = rover_landing_date;
    this.rover_launch_date = rover_launch_date;
    this.rover_status = rover_status;
    this.isFavorite = isFavorite;
    this.favoriteName = favoriteName;
  }
}

const marsPhotos = [];
export const fetchMarsPhotos = async (page, photo) => {
  try {
    const res = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=uYDNVDv8w1E5Dn2Nh4vrdtEnGaLEaSkU7DhkNd7I`
    );
    const data = await res.json();
    // console.log(data.photos[photo]);
    marsPhotos.push(
      new MarsPhoto(
        'PUB' + data.photos[photo].id,
        data.photos[photo].sol,
        data.photos[photo].camera.id,
        data.photos[photo].camera.name,
        data.photos[photo].camera.rover_id,
        // data.photos[0].camera.rover_name,
        data.photos[photo].camera.full_name,
        data.photos[photo].img_src,
        data.photos[photo].earth_date,
        data.photos[photo].rover.id,
        data.photos[photo].rover.name,
        data.photos[photo].rover.landing_date,
        data.photos[photo].rover.launch_date,
        data.photos[photo].rover.status,
        false,
        ''
      )
    );
    // console.log(marsPhotos);
  } catch (error) {
    console.log(error);
  }
};

for (let i = 0; i < 24; i++) {
  fetchMarsPhotos(1, i);
}

const sincro = async () => {
  try {
    console.log(marsPhotos);
  } catch (error) {
    console.log(error);
  }
};

sincro();
