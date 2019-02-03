(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"8rzL":function(s,a){s.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate"\n  [locale]="locale"\n>\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [locale]="locale"\n    [weekStartsOn]="weekStartsOn"\n    [weekendDays]="weekendDays"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [locale]="locale"\n    [weekStartsOn]="weekStartsOn"\n    [weekendDays]="weekendDays"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [locale]="locale"\n  >\n  </mwl-calendar-day-view>\n</div>\n'},Aikk:function(s,a){s.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, DAYS_OF_WEEK } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n\n  locale: string = 'fr';\n\n  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;\n\n  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];\n}\n"},HGVF:function(s,a,n){"use strict";n.r(a),n.d(a,"sources",function(){return e});var e=[{filename:"component.ts",contents:{raw:n("Aikk"),highlighted:n("u+Vi")}},{filename:"template.html",contents:{raw:n("8rzL"),highlighted:n("M1zv")}},{filename:"module.ts",contents:{raw:n("bqot"),highlighted:n("ntXd")}}]},M1zv:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span>\n  [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span>\n  [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>\n  [<span class="hljs-attribute">locale</span>]=<span class="hljs-value">"locale"</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">locale</span>]=<span class="hljs-value">"locale"</span>\n    [<span class="hljs-attribute">weekStartsOn</span>]=<span class="hljs-value">"weekStartsOn"</span>\n    [<span class="hljs-attribute">weekendDays</span>]=<span class="hljs-value">"weekendDays"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">locale</span>]=<span class="hljs-value">"locale"</span>\n    [<span class="hljs-attribute">weekStartsOn</span>]=<span class="hljs-value">"weekStartsOn"</span>\n    [<span class="hljs-attribute">weekendDays</span>]=<span class="hljs-value">"weekendDays"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">locale</span>]=<span class="hljs-value">"locale"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n'},bqot:function(s,a){s.exports="import { registerLocaleData } from '@angular/common';\nimport localeFr from '@angular/common/locales/fr';\nimport { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\nregisterLocaleData(localeFr);\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},ntXd:function(s,a){s.exports='<span class="hljs-keyword">import</span> { registerLocaleData } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> localeFr from <span class="hljs-string">\'@angular/common/locales/fr\'</span>;\n<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\nregisterLocaleData(localeFr);\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},"u+Vi":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, DAYS_OF_WEEK } from <span class="hljs-string">\'angular-calendar\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [];\n\n  locale: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'fr\'</span>;\n\n  weekStartsOn: <span class="hljs-built_in">number</span> = DAYS_OF_WEEK.MONDAY;\n\n  weekendDays: <span class="hljs-built_in">number</span>[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];\n}\n'}}]);