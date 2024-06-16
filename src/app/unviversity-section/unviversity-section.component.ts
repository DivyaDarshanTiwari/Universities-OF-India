import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-unviversity-section',
  standalone: true,
  imports: [HttpClientModule,NgFor,MatGridListModule],
  providers: [UserDataService],
  templateUrl: './unviversity-section.component.html',
  styleUrl: './unviversity-section.component.css'
})
export class UnviversitySectionComponent {

  userdata: any;
  
  constructor(private data:UserDataService)
  {

  }

  getData(){
    this.data.users().subscribe((data)=>{
      this.userdata = data;
      console.log(data);
    })
  }

  ngOnInit()
  {
    this.getData();
  }
}
