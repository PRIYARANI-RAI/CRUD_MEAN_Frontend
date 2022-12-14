import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any;

  constructor(private service:StudentsService,private routes:Router) { }

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent(){
    this.service.listStudent().subscribe((data:any)=>{
      this.students = data.result; 
    });
  }
  delStudent(datas:any){
    this.service.deleteStudent(datas._id).subscribe(data=>{
      this.students = this.students.filter((u:any)=> u!== datas)
    })
  }
}
