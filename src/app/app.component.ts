import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  
  datas;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((data)=>{
      console.log(data);
      this.datas = data['data'];
    });
  }

}
