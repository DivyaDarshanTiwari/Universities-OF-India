import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-unviversity-section',
  standalone: true,
  imports: [HttpClientModule,NgFor,MatGridListModule,MatCardModule],
  providers: [UserDataService],
  templateUrl: './unviversity-section.component.html',
  styleUrl: './unviversity-section.component.css'
})
export class UnviversitySectionComponent implements OnInit{

  userdata: any;

  state: string;
  
  constructor(private data:UserDataService)
  {
    this.state='';
  }

  getData(){
    this.data.users().subscribe((data)=>{
      this.userdata = data;
      console.log(data);
      console.log(data)
    })
  }


  ngOnInit()
  {
    this.getData();
  }
}
