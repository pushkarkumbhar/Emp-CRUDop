import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent, RouterLink, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { HtttpClientService } from '../../services/htttp-client.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardComponent } from '../../crud/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
    id:string |null="";
    empdata:any
    constructor(private acroute:ActivatedRoute,private dbserve:HtttpClientService,private router:Router){

    }

    ngOnInit(): void {
        this.acroute.paramMap.subscribe((params)=>{
          
          this.id=params.get('id')
          if( this.id != null){
          this.dbserve.getrec(this.id).subscribe((res)=>{
            this.empdata=res
          
          })
            
          }
        })
    }
    editemp(val:any){
    const emp={
      id:this.id,
      employee_name:val.ename,
      employee_salary:val.epost,
      employee_age:val.eexp
    }
    
    this.dbserve.updadterecord(emp).subscribe(()=>{
      alert("data updated successfully")
      this.router.navigate(['/'])
    
    })
    }
  
    
}
