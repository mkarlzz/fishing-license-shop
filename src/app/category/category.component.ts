import { Component, OnInit, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
