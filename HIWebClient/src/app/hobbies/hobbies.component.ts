import { Component, OnInit } from '@angular/core';
import { HobbyService } from '../services/hobby.service';
import { IHobby } from '../shared/hobby';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  title = 'Hobbies';
  hobbies: IHobby[];
  userIdFilter: string;

  constructor(private service: HobbyService) { }

  get UserIdFilter(): string {
    return this.userIdFilter;
  }

  set UserIdFilter(value: string) {
    this.userIdFilter = value;
    this.fetchData();
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.service.getHobbies(this.userIdFilter).subscribe({
      next: data => {
        this.hobbies = data;
      },
      error: err => console.log(err)
    });
  }
}

