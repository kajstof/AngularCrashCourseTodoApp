import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() { }

  title: string = "List of courses";
  courses: Array<string>;
}
