import { Component, OnInit } from '@angular/core';
import { GlobalService } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-api';
  data:any
  constructor(private service:GlobalService) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    console.log('hi');
    
    this.service.getTestApiDate().subscribe((data)=>{
      this.data = data
    })
  }
}
