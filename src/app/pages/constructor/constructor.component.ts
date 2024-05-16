import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgStyle } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTreeModule, NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSelectModule } from 'ng-zorro-antd/select';


@Component({
  selector: 'app-constructor',
  host: {
    'class': 'd-contents'
  },
  standalone: true,
  imports: [
    RouterOutlet,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzButtonModule,
    NzDropDownModule,
    NzContentComponent,
    NzInputModule,
    NzTreeModule,
    NzDividerModule,
    NzTagModule,
    NgStyle,
    NzToolTipModule,
    NzSelectModule
  ],
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.less']
})
export class ConstructorComponent implements OnInit {

  ngOnInit() {
    console.log("constructor inited")
  }

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          expanded: true,
          children: [
            { title: 'leaf', key: '10010', isLeaf: true },
            { title: 'leaf', key: '10011', isLeaf: true },
            { title: 'leaf', key: '10012', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        },
        {
          title: 'parent 1-2',
          key: '1003',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-3',
          key: '1004',
          expanded: true,
          children: [
            { title: 'beaf', key: '10030', isLeaf: true },
            { title: 'beaf', key: '10031', isLeaf: true },
            { title: 'beaf', key: '10032', isLeaf: true },
            { title: 'beaf', key: '10033', isLeaf: true },
            { title: 'beaf', key: '10034', isLeaf: true },
            { title: 'beaf', key: '10035', isLeaf: true },
            { title: 'beaf', key: '10036', isLeaf: true },
            { title: 'beaf', key: '10037', isLeaf: true },
            { title: 'beaf', key: '10038', isLeaf: true },
            { title: 'beaf', key: '10039', isLeaf: true }
          ]
        },
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  biExpandEditor: boolean = false;


  selectedSelectSource = null;


  CANVAS_SCALE_MIN = 80;
  CANVAS_SCALE_MAX = 200;
  canvasScale: number = 50;
  canvasTranslateX: number = 0;
  canvasTranslateY: number = 0;
  
  getEditorCanvasBgTransform() {
    return {
      'background-size': `${this.canvasScale}%`,
      'background-position-x': `calc(${this.canvasTranslateX}px + 50%)`,
      'background-position-y': `calc(${this.canvasTranslateY}px + 50%)`
    };
  }

  getCanvasTransform() {
    return {
      transform: `scale(${this.canvasScale}%) translateX(${this.canvasTranslateX}px) translateY(${this.canvasTranslateY}px)`
    };
  }
}
