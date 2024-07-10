import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HtttpClientService } from '../../services/htttp-client.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule,RouterModule,RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private addservice:HtttpClientService, private router:Router ){

  }
  addemp(val:any){
    
const temp={
  
  employee_name:val.ename,
  employee_salary:val.epost,
  employee_age:val.eexp
}
    this.addservice.addrecord(temp).subscribe(()=>{
      alert("record added successfully")
      this.router.navigate(["/"])
    })
  }
}
