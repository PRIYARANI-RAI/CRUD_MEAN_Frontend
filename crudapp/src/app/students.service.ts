import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  addStudent(student: any) {
    return this.http.post('http://localhost:8201/crud/student/addstudent', student)
  }
  listStudent() {
    return this.http.get('http://localhost:8201/crud/student/studentlist')
  }
  deleteStudent(id: any) {
    return this.http.delete(`http://localhost:8201/crud/student/deletestudent/${id}`)
  }

  singleStudent(id: any) {
    return this.http.get(`http://localhost:8201/crud/student/studentdetail/${id}`)
  }
  updateStudent(id: any, student: any) {
    console.log("data with services", student)
    return this.http.put(`http://localhost:8201/crud/student/editstudent/${id}`, student)
  }
}
