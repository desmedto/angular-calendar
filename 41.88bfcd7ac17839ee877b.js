(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"C4O+":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},GeW7:function(n,s){n.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: Array<CalendarEvent<{ id: number }>> = [\n    {\n      title: 'Event 1',\n      color: colors.yellow,\n      start: new Date(),\n      meta: {\n        id: 1\n      }\n    },\n    {\n      title: 'Event 2',\n      color: colors.blue,\n      start: new Date(),\n      meta: {\n        id: 2\n      }\n    }\n  ];\n}\n"},IKna:function(n,s,a){"use strict";a.r(s),a.d(s,"sources",function(){return e});var e=[{filename:"component.ts",contents:{raw:a("GeW7"),highlighted:a("rGVs")}},{filename:"template.html",contents:{raw:a("vZM3"),highlighted:a("lOVw")}},{filename:"module.ts",contents:{raw:a("C4O+"),highlighted:a("YX0/")}}]},"YX0/":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},lOVw:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span> [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span> [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"true"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n'},rGVs:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: <span class="hljs-built_in">Array</span>&lt;CalendarEvent&lt;{ id: <span class="hljs-built_in">number</span> }&gt;&gt; = [\n    {\n      title: <span class="hljs-string">\'Event 1\'</span>,\n      color: colors.yellow,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      meta: {\n        id: <span class="hljs-number">1</span>\n      }\n    },\n    {\n      title: <span class="hljs-string">\'Event 2\'</span>,\n      color: colors.blue,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      meta: {\n        id: <span class="hljs-number">2</span>\n      }\n    }\n  ];\n}\n'},vZM3:function(n,s){n.exports='<mwl-demo-utils-calendar-header [(view)]="view" [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [activeDayIsOpen]="true"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events"\n  >\n  </mwl-calendar-day-view>\n</div>\n'}}]);