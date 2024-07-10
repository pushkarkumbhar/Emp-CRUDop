import { Component, OnInit } from '@angular/core';

import { CrudModule } from '../crud.module';
import { HtttpClientService } from '../../services/htttp-client.service';
import { ROUTES, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditComponent } from '../../compo/edit/edit.component';
import { SearchPipe } from '../../search.pipe';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,FormsModule,RouterModule,EditComponent,SearchPipe,NgForOf,NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  empdata:any
  text:any
  constructor(private dbservice:HtttpClientService){

  }
    ngOnInit(): void {
        
        this.fetchdata()
    }

    fetchdata(){
      this.dbservice.getrecord().subscribe((res)=>{
        console.log(res)
        this.empdata=res
      })
      
    }
    ondelete(id:string){
      const reply=confirm("are you sure" +id+"?")
      this.dbservice.deleterecord(id).subscribe(()=>{
        
        if(reply==true){
        alert("data deleted" +id)
        this.fetchdata()
        }
      })
      
    }
    
}

