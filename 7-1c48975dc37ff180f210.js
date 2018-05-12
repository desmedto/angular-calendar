(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{636:function(s,n,e){"use strict";e.r(n),e.d(n,"sources",function(){return a});var a=[{filename:"component.ts",contents:{raw:e(708),highlighted:e(707)}},{filename:"template.html",contents:{raw:e(706),highlighted:e(705)}},{filename:"module.ts",contents:{raw:e(704),highlighted:e(703)}}]},703:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},704:function(s,n){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},705:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span>\n  [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span>\n  [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"true"</span>\n    [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n    (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventTimesChanged($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n    (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventTimesChanged($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n    (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventTimesChanged($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>'},706:function(s,n){s.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [activeDayIsOpen]="true"\n    [refresh]="refresh"\n    (eventTimesChanged)="eventTimesChanged($event)">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [refresh]="refresh"\n    (eventTimesChanged)="eventTimesChanged($event)">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [refresh]="refresh"\n    (eventTimesChanged)="eventTimesChanged($event)">\n  </mwl-calendar-day-view>\n</div>'},707:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Subject } from <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { addDays } from <span class="hljs-string">\'date-fns\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'week\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class="hljs-string">\'Resizable event\'</span>,\n      color: colors.yellow,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      end: addDays(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(), <span class="hljs-number">1</span>), <span class="hljs-comment">// an end date is always required for resizable events to work</span>\n      resizable: {\n        beforeStart: <span class="hljs-literal">true</span>, <span class="hljs-comment">// this allows you to configure the sides the event is resizable from</span>\n        afterEnd: <span class="hljs-literal">true</span>\n      }\n    },\n    {\n      title: <span class="hljs-string">\'A non resizable event\'</span>,\n      color: colors.blue,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      end: addDays(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(), <span class="hljs-number">1</span>)\n    }\n  ];\n\n  refresh: Subject&lt;<span class="hljs-built_in">any</span>&gt; = <span class="hljs-keyword">new</span> Subject();\n\n  eventTimesChanged({\n    event,\n    newStart,\n    newEnd\n  }: CalendarEventTimesChangedEvent): <span class="hljs-built_in">void</span> {\n    event.start = newStart;\n    event.end = newEnd;\n    <span class="hljs-keyword">this</span>.refresh.next();\n  }\n}\n'},708:function(s,n){s.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { Subject } from 'rxjs';\nimport { addDays } from 'date-fns';\nimport {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent\n} from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'week';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'Resizable event',\n      color: colors.yellow,\n      start: new Date(),\n      end: addDays(new Date(), 1), // an end date is always required for resizable events to work\n      resizable: {\n        beforeStart: true, // this allows you to configure the sides the event is resizable from\n        afterEnd: true\n      }\n    },\n    {\n      title: 'A non resizable event',\n      color: colors.blue,\n      start: new Date(),\n      end: addDays(new Date(), 1)\n    }\n  ];\n\n  refresh: Subject<any> = new Subject();\n\n  eventTimesChanged({\n    event,\n    newStart,\n    newEnd\n  }: CalendarEventTimesChangedEvent): void {\n    event.start = newStart;\n    event.end = newEnd;\n    this.refresh.next();\n  }\n}\n"}}]);