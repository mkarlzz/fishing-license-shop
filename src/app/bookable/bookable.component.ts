import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-bookable',
  templateUrl: './bookable.component.html',
  styleUrls: ['./bookable.component.scss']
})
export class BookableComponent implements OnInit {

  @Input() color: string;
  @Input() selected: boolean = false;
  @Input() label: string = "";

  click() {
    this.selected = !this.selected;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
