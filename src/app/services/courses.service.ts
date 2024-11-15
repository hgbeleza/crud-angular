import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
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

  save(record: Course): Observable<Course> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Course>(`${this.apiURL}/courses/add`, record, { headers });
  }
}
