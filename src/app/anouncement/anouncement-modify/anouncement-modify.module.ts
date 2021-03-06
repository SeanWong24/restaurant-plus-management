import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnouncementModifyPageRoutingModule } from './anouncement-modify-routing.module';

import { AnouncementModifyPage } from './anouncement-modify.page';
import { TimeLocalISOStringPipe } from '../anouncement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnouncementModifyPageRoutingModule
  ],
  declarations: [
    AnouncementModifyPage,
    TimeLocalISOStringPipe
  ]
})
export class AnouncementModifyPageModule { }
