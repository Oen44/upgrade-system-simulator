import { Component, OnInit } from '@angular/core';

interface Crystal {
  name: string;
  description: string;
  sprite: string;
}

@Component({
  selector: 'us-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  crystals: Crystal[] = [];

  constructor() {}

  ngOnInit() {
    this.crystals.push({
      name: 'Enchanting Token',
      description:
        'Can be used on a piece of equipment to add random attribute.',
      sprite: 'enchanting_token.png'
    });
    this.crystals.push({
      name: 'Soul Token',
      description:
        'Can be used on a piece of equipment to increase item level.',
      sprite: 'soul_token.png'
    });
    this.crystals.push({
      name: 'Chancing Token',
      description: 'Can be used on a piece of equipment to reroll rarity.',
      sprite: 'chancing_token.png'
    });
    this.crystals.push({
      name: 'Fortune Token',
      description:
        'Can be used on a piece of equipment to change value of last attribute.',
      sprite: 'fortune_token.png'
    });
    this.crystals.push({
      name: 'Faith Token',
      description:
        'Can be used on a piece of equipment to change values of all attributes.',
      sprite: 'faith_token.png'
    });
    this.crystals.push({
      name: 'Alteration Token',
      description:
        'Can be used on a piece of equipment to remove last attribute.',
      sprite: 'alteration_token.png'
    });
    this.crystals.push({
      name: 'Magnet Token',
      description:
        'Can be used on a piece of equipment to remove all attributes.',
      sprite: 'magnet_token.png'
    });
    this.crystals.push({
      name: 'Upgrade Token',
      description:
        'Can be used on a piece of equipment for a chance to upgrade it.',
      sprite: 'upgrade_token.png'
    });
    this.crystals.push({
      name: 'T1 Upgrade Catalyst',
      description:
        'Protects item from being destroyed if upgrade fails (from +7 to +9).',
      sprite: 't1_catalyst.png'
    });
    this.crystals.push({
      name: 'T2 Upgrade Catalyst',
      description:
        'Protects item from being destroyed if upgrade fails (from +10 to +12).',
      sprite: 't2_catalyst.png'
    });
    this.crystals.push({
      name: 'T3 Upgrade Catalyst',
      description:
        'Protects item from being destroyed if upgrade fails (from +13 to +15).',
      sprite: 't3_catalyst.png'
    });
    this.crystals.push({
      name: 'Void Crystal',
      description:
        'Can be used on a piece of equipment to transform into random Unique type.',
      sprite: 'void_crystal.png'
    });
    this.crystals.push({
      name: 'Scroll of Identification',
      description:
        'Can be used on unidentified item to reveal hidden attributes.',
      sprite: 'scroll_of_identification.png'
    });
  }
}
