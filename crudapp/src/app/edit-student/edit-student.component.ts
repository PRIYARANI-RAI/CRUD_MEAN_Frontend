import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editStudent: any;
  id: any;
  addStudent: any;
  constructor(private fb: FormBuilder, private routes: Router, private service: StudentsService,
    private url: ActivatedRoute) {

    this.editStudent = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required] 
    })
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    console.log(this.id)
    this.service.singleStudent(this.id).subscribe((data: any) => {
      console.log(data.result)
      this.editStudent = this.fb.group({ 
        firstname: [data.result.firstname, Validators.required],
        lastname: [data.result.lastname, Validators.required],
        email: [data.result.email, Validators.required],
        password: [data.result.password, Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.editStudent.value);
    this.id = this.url.snapshot.params['id'];

    
    this.service
      .updateStudent(this.id, this.editStudent.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['']);
      });

  }

}
