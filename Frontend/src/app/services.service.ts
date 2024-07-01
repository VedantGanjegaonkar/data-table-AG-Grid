import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http:HttpClient) {}
  getData():Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/users/getUsers');
  }
  postData(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:8000/api/users/createUser', data)
  }
}
