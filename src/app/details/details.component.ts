import { Component, OnInit } from '@angular/core';

import {NgbDateStruct, NgbCalendar, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

	hoveredDate: NgbDateStruct;

     fromDate: NgbDateStruct;
     toDate: NgbDateStruct;
     markDisabled: (date: NgbDateStruct, current: {year: number, month: number}) => boolean;
     constructor(calendar: NgbCalendar) {
       this.fromDate = calendar.getToday();
       this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
     }

     onDateSelection(date: NgbDateStruct) {
       if (!this.fromDate && !this.toDate) {
         this.fromDate = date;
       } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
         this.toDate = date;
       } else {
         this.toDate = null;
         this.fromDate = date;
       }
     }

     isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
     isInside = date => after(date, this.fromDate) && before(date, this.toDate);
     isFrom = date => equals(date, this.fromDate);
     isTo = date => equals(date, this.toDate);
     isBehind = date => before(date, this.toDate);
}
