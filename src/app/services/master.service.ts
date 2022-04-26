import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publisher } from '../model/publisher';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private http: HttpClient) { }
  
  listPublisher(): Observable<any>{
  return this.http.get(environment.baseUrl+'/publisher')
  .pipe(map(data=>data));
  }
  savePublisher(publish: Publisher): Observable<any>{
    return this.http.post(environment.baseUrl+'/simpanpublisher', Publisher)
    .pipe(map(data=>data));
  }

  getPublisher(id: number): Observable<any>{
    return this.http.get(environment.baseUrl+'/editpublisher/'+id)
    .pipe(map(data=>data));
}


  listAuthor(): Observable<any>{
  return this.http.get(environment.baseUrl+'/author')
  .pipe(map(data=>data));
  }
  saveAuthor(author: Author): Observable<any>{
    return this.http.post(environment.baseUrl+'/simpanauthor', Author)
    .pipe(map(data=>data));
  }

  getAuthor(id: number): Observable<any>{
    return this.http.get(environment.baseUrl+'/editauthor/'+id)
    .pipe(map(data=>data));
}
}
