import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Devedor } from 'src/app/models/devedor.model';

@Injectable({
  providedIn: 'root'
})
export class DevedorService {

  constructor(private http: HttpClient) { }

  getAllDevedor() {
    return this.http.get<Devedor[]>(`${environment.apiUrl}/api/v1/devedor`)
  }

  addDevedor(devedor: any){
    return this.http.post<Devedor>(`${environment.apiUrl}/api/v1/devedor/Post`, devedor);
  }
}
