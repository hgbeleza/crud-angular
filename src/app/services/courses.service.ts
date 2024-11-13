import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiURL: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiURL}/courses`);
  }
}
