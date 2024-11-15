import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CoursesService } from '../services/courses.service';
import { Observable, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { id: 1, name: 'angular + spring', category: 'fullstack' }
  ];

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
