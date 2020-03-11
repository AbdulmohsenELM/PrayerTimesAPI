import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(`http://api.aladhan.com/v1/calendarByCity?city=Riyadh&country=Saudi%20Arabia&method=4&month=03&year=2020`);
  }
}

//localhost:8080/Users/GetAllUsers