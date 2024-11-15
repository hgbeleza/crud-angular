import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  successMessage: string = '';

  courseForm: FormGroup = new FormGroup({
    name: new FormControl('', 
      [
        Validators.maxLength(50),
        Validators.required
      ]),
    category: new FormControl('', 
      Validators.required
    )
  });

  constructor(private courseService: CoursesService) {}

  onSubmit() {
    if(this.courseForm.valid) {
      this.courseService.save(this.courseForm.value as Course).subscribe({
        next: () => this.onSuccess(),
        error: (err) => console.log(err)
      });
    }
  }

  private onSuccess() {
    this.successMessage = "Course saved successfully!";
    console.log("Course saved successfully!");
    this.courseForm.reset();

    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
}
