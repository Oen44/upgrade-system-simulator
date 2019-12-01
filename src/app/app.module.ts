import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faTrash as fasTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faClone as fasClone } from '@fortawesome/free-solid-svg-icons/faClone';
import { faEraser as fasErease } from '@fortawesome/free-solid-svg-icons/faEraser';

import { faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CrystalComponent } from './crystal/crystal.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { BonusStatsComponent } from './bonus-stats/bonus-stats.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { InfoboxComponent } from './infobox/infobox.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CrystalComponent,
    ChatboxComponent,
    EquipmentComponent,
    BonusStatsComponent,
    MainMenuComponent,
    InfoboxComponent
  ],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(fasTrash, fasClone, fasErease, fabGithub);
  }
}
