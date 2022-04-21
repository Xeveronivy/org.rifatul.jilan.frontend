import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  listAuthor(): Observable<any>{
  return this.http.get(environment.baseUrl+'/author')
  .pipe(map(data=>data));
  }
  saveAuthor(author: Author): Observable<any>{
    return this.http.post(environment.baseUrl+'/simpanAuthor', author)
    .pipe(map(data=>data));
  }

  getAuthor(id: number): Observable<any>{
    return this.http.get(environment.baseUrl+'/editelem2/'+id)
    .pipe(map(data=>data));
}
}
