import { Component, OnInit } from '@angular/core';
import { IInterest } from '../shared/interest';
import { InterestService } from '../services/interest.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  title = 'Interests';
  interests: IInterest[];
  userIdFilter: string;

  constructor(private service: InterestService) { }

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
        this.interests = data;
      },
      error: err => console.log(err)
    });
  }
}
