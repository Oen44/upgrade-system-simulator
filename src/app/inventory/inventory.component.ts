import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Crystal {
  name: string;
  description: string;
  itemId: string;
  usable: boolean;
}

@Component({
  selector: 'us-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  crystals: Crystal[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8000/crystals').subscribe((data: Array<Crystal>) => {
      data.forEach(element => {
        this.crystals.push(element);
      });
    });
  }
}
