import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
export interface JsonDataType {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  constructor(private http: HttpClient) { }
  private limit = 5
  private portion = 5
  private localeData: JsonDataType[] = []
  
  private composeData(data: JsonDataType[]) {
    data.forEach(user => {
      if (this.localeData.length < 10) {
        this.localeData.push(user)
      }
      else {
        this.localeData.push({
          ...user,
          id: this.localeData[this.localeData.length - 1].id
            + 1
        })
      }
    })
  }
  fetchData() {
    this.portion = this.portion === 5 ? 0 : 5

    // let params = new HttpParams()
    // params.append('_start', this.portion)
    // params.append('_limit', this.limit)
    
    return this.http.get<JsonDataType[]>(`https://jsonplaceholder.typicode.com/users?_start=${this.portion}&_limit=${this.limit}`)
      .pipe(map(
        (data: JsonDataType[]) => { this.composeData(data) }),
        catchError((error) => throwError(error)
        ));
  }
  getById(id: number) {
    return this.localeData.find(item => item.id === id)
  }
  getUsers(){
    return this.localeData;
  }
}
