import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent: any;
  constructor(private fb: FormBuilder,private routes: Router, private service: StudentsService) {
    this.addStudent = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addStudent(this.addStudent.value).subscribe((data: any) => {
      this.routes.navigate(['list-student'])
    });
  }
}
