import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IVillage} from '../models/IVillage';
import {map} from 'rxjs/operators';

@Injectable()
export class VillageDataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getVillage(): Observable<IVillage[]> {
    return this.httpClient.get<IVillage[]>(`/village`);
  }
}
