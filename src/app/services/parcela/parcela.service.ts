import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService {

  constructor(private http: HttpClient) { }

  getAllByDevedorId(devedorId: number) {
    return this.http.get(`${environment.apiUrl}/api/v1/parcela/${devedorId}`);
  }

  setParcela(parcela: any){
    return this.http.post(`${environment.apiUrl}/api/v1/parcela`, parcela);
  }
}
