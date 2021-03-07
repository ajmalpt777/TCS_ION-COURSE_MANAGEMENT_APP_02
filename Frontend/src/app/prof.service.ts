import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  signupProf(user)
  {
    return this.http.post<any>("http://localhost:3000/signup-prof",user)
  }
  loginProf(user)
  {
  return this.http.post<any>("http://localhost:3000/login-prof",user);
  }

  getProfProfile(id){
    return this.http.get("http://localhost:3000/prof-profile/"+id);
  }
  getProfProfileOne(id){
    console.log(id);
    return this.http.get("http://localhost:3000/prof-profileone/"+id);
  }

  editProfProfile(profile){
    
    return this.http.put("http://localhost:3000/edit-prof",profile)
    .subscribe(data=>{
      console.log(data)
    })

  }

  addCourse(course){
    return this.http.post("http://localhost:3000/course-add",course)
    .subscribe(data=> { console.log(data)} )
  }

  getCourses(id){
    return this.http.get("http://localhost:3000/courses-taken/"+id)
  }

  getRequestDetails(item){
    return this.http.post("http://localhost:3000/get-request",item);
  }

  acceptRequest(id){
    return this.http.get("http://localhost:3000/accept-request/"+id);
  }

  declineRequest(id){
    return this.http.delete("http://localhost:3000/decline-request/"+id);
  }

  addNotification(item){
    return this.http.post("http://localhost:3000/add-notification",item)
    .subscribe(data=> { console.log(data)} )
  }

  getNotification(id){
    return this.http.get("http://localhost:3000/get-notification/"+id)
  }

  constructor(private http:HttpClient) { }
}
