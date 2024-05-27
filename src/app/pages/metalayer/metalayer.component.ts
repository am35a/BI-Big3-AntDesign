import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';



@Component({
  selector: 'app-metalayer',
  host: {
    'class': 'd-contents'
  },
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    NgStyle,
    NzIconModule,
    NzPageHeaderModule,
    NzContentComponent,
    NzSpaceModule,
    NzButtonModule,
    NzDropDownModule
  ],
  templateUrl: './metalayer.component.html',
  styleUrls: ['./metalayer.component.less']
})
export class MetalayerComponent implements OnInit {

  ngOnInit() {
    console.log("metalayer inited")
  }

}
