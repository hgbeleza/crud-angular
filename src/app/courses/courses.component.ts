import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CoursesService } from '../services/courses.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.courseService.getAllCourses().subscribe(data => {
      this.courses = data;
    });
  }
}
