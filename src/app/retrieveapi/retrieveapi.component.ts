import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-retrieveapi',
  templateUrl: './retrieveapi.component.html',
  styleUrls: ['./retrieveapi.component.css']
})
export class RetrieveapiComponent implements OnInit {
  
  data;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((data)=>{
      console.log(data);
      this.data = data['data'];
    });
  }

}
