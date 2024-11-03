import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:8081"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  postCycle(cycleDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api/admin/cycle", cycleDto, {
      headers: this.createAuthorizationHeader()
    });
  }
  getAllCycles(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/admin/cycles", {
      headers: this.createAuthorizationHeader()
    });
  }

  deleteCycle(id: number): Observable<any> {
    return this.http.delete(BASIC_URL + "/api/admin/cycle/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  getCarById(id: number): Observable<any> {
    return this.http.get(BASIC_URL + "/api/admin/car/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}