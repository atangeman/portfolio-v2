import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  private dateNow = new Date();

  constructor() { }

  public getDateDiff(dateStr1: string, dateStr2?: string): string {
    var date1 = new Date(dateStr1);
    var date2 = new Date(dateStr2 ?? new Date());
    var diff = Math.abs(date1.getTime() - date2.getTime());
    var diffYears = Math.round((Math.ceil(diff / (1000 * 3600 * 24)) / 365) * 10) / 10;

    var years = Math.floor(diffYears);
    var months = Math.round(Math.abs(diffYears - (years)) * 12);
    return `${ years } years, ${ months } months`;
  }

  ngOnInit(): void {
  }

}
