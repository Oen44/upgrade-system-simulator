import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'us-crystal',
  templateUrl: './crystal.component.html',
  styleUrls: ['./crystal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrystalComponent implements OnInit {
  @Input() name: string;
  @Input() sprite: string;
  @Input() description: string;
  constructor() {}

  ngOnInit() {}
}
