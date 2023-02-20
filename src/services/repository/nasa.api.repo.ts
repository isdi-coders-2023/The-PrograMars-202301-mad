/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { RootObject } from '../../models/api';
import { MarsPhotoStructure } from '../../models/marsPhoto';

export interface NasaApiRepoStructure {
  loadPhotos(): Promise<RootObject>;
}

const apiKey = '&api_key=B2ll490zBp9I0mmMbiA98Ji4wZyA9qNv52KS2qjP';

export class NasaApiRepo {
  url: string;
  constructor() {
    this.url =
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3728&page=1';
  }

  async loadPhotos(camera?: string): Promise<MarsPhotoStructure[]> {
    const resp = await fetch(this.url + camera + apiKey);
    const data = (await resp.json()) as RootObject;
    const marsPhoto = data.photos.map((item) => ({
      id: item.id,
      sol: item.sol,
      camera_id: item.camera.id,
      camera_name: item.camera.name,
      camera_rover_id: item.camera.rover_id,
      camera_full_name: item.camera.full_name,
      img_src: item.img_src,
      earth_date: item.earth_date,
      rover_id: item.rover.id,
      rover_name: item.rover.name,
      rover_landing_date: item.rover.landing_date,
      rover_launch_date: item.rover.launch_date,
      rover_status: item.rover.status,
      apiOrigin: 'APIPublic',
      isFavorite: false,
      favoriteName: '',
    }));
    return marsPhoto;
  }
}
