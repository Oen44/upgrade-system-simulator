import { Component, OnInit, Input, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'us-crystal',
  templateUrl: './crystal.component.html',
  styleUrls: ['./crystal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrystalComponent implements OnInit {
  @Input() name: string;
  @Input() itemId: string;
  @Input() description: string;
  @Input() uses = 0;
  @Input() usable = true;

  constructor() {}

  ngOnInit() {}

  @HostListener('click') onclick() {
    if (this.usable) {
      this.uses++;
    }
  }
}
