import { Component } from '@angular/core';
import { Course } from '../model/Course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[] = [
    { id: 1, name: 'Angular + Spring', category: 'fullstack' },
    { id: 2, name: 'Java Spring Boot', category: 'Backend' },
    { id: 3, name: 'Angular 17', category: 'Frontend' },
    { id: 4, name: 'angular + spring', category: 'fullstack' },
    { id: 5, name: 'angular + spring', category: 'fullstack' },
    { id: 6, name: 'angular + spring', category: 'fullstack' },
    { id: 7, name: 'angular + spring', category: 'fullstack' },
    { id: 8, name: 'angular + spring', category: 'fullstack' }
  ];
}
