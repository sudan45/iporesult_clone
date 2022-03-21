import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CompanydataService {
url="https://iporesult.cdsc.com.np/result/companyShares/fileUploaded"
check_url="https://iporesult.cdsc.com.np/result/result/check"
  constructor(private http:HttpClient) { }
  company(){
    return this.http.get(this.url)
  }
  check_result(data:any){
    const headers = { 'content-type': 'application/json' ,'Accept':"application/json"}  
    return this.http.post(this.check_url,data,{'headers':headers})
  }
}
