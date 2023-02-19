import { MarsPhotoStructure } from '../../models/marsPhoto';

export class PrivateApiRepo {
  url: string;
  constructor() {
    this.url = 'http://localhost:5080/privateMarsPhotos';
  }

  async loadPrivatePhotos(): Promise<MarsPhotoStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as MarsPhotoStructure[];
    return data;
  }

  async createPrivatePhoto(
    photo: MarsPhotoStructure
  ): Promise<MarsPhotoStructure> {
    const resp = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(photo),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as MarsPhotoStructure;
    return data;
  }
}

//A través de cualquier terminal, acceder a la carpeta en la que tengamos instalado el live server
//npm install -g live-server y luego acceder a http://localhost:5080/privateMarsPhotos
