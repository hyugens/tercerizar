import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  settings;
  constructor(private http: HttpClient) {}
  load() {
      const jsonFile = `assets/config/config.json`;
      return new Promise<void>((resolve, reject) => {

        // resolve();
        this.http.get(jsonFile).toPromise().then((response) => {
             this.settings = response;
            //  console.log(ConfigService.settings);
             resolve();
          }).catch((response: any) => {
             reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
          });
      });
  }
}
