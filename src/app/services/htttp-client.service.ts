import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import e from 'express';

@Injectable({
  providedIn: 'root'
})
export class HtttpClientService {
baseurl:string="http://localhost:3000/data";
  constructor(private http:HttpClient) { 
   
   }
    getrecord(){
     return this.http.get(this.baseurl)
    }
    getrec(id:string){
      return this.http.get(`${this.baseurl}/${id}`)
    }

    deleterecord(id:string){
      return this.http.delete(this.baseurl +"/" +id)
    }
    addrecord(emprecord:any){
      return this.http.post(this.baseurl,emprecord)
    }
   updadterecord(empdata:any){
    return this.http.put(`${this.baseurl}/${empdata.id}`,empdata)
    }

   }
  

