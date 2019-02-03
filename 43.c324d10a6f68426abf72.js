(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"6EyE":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy, OnInit } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { HttpClient, HttpParams } from <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { map } from <span class="hljs-string">\'rxjs/operators\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> {\n  isSameMonth,\n  isSameDay,\n  startOfMonth,\n  endOfMonth,\n  startOfWeek,\n  endOfWeek,\n  startOfDay,\n  endOfDay,\n  format\n} from <span class="hljs-string">\'date-fns\'</span>;\n<span class="hljs-keyword">import</span> { Observable } from <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n<span class="hljs-interface"><span class="hljs-keyword">interface</span> Film </span>{\n  id: <span class="hljs-built_in">number</span>;\n  title: <span class="hljs-built_in">string</span>;\n  release_date: <span class="hljs-built_in">string</span>;\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTimezoneOffsetString</span>(<span class="hljs-params">date: <span class="hljs-built_in">Date</span></span>): <span class="hljs-title">string</span> </span>{\n  <span class="hljs-keyword">const</span> timezoneOffset = date.getTimezoneOffset();\n  <span class="hljs-keyword">const</span> hoursOffset = <span class="hljs-built_in">String</span>(\n    <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.abs(timezoneOffset / <span class="hljs-number">60</span>))\n  ).padStart(<span class="hljs-number">2</span>, <span class="hljs-string">\'0\'</span>);\n  <span class="hljs-keyword">const</span> minutesOffset = <span class="hljs-built_in">String</span>(<span class="hljs-built_in">Math</span>.abs(timezoneOffset % <span class="hljs-number">60</span>)).padEnd(<span class="hljs-number">2</span>, <span class="hljs-string">\'0\'</span>);\n  <span class="hljs-keyword">const</span> direction = timezoneOffset &gt; <span class="hljs-number">0</span> ? <span class="hljs-string">\'-\'</span> : <span class="hljs-string">\'+\'</span>;\n  <span class="hljs-keyword">return</span> `T00:<span class="hljs-number">00</span>:<span class="hljs-number">00</span>${direction}${hoursOffset}${minutesOffset}`;\n}\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent <span class="hljs-keyword">implements</span> OnInit {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events$: Observable&lt;<span class="hljs-built_in">Array</span>&lt;CalendarEvent&lt;{ film: Film }&gt;&gt;&gt;;\n\n  activeDayIsOpen: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  <span class="hljs-constructor"><span class="hljs-keyword">constructor</span>(private http: HttpClient) </span>{}\n\n  ngOnInit(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.fetchEvents();\n  }\n\n  fetchEvents(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">const</span> getStart: <span class="hljs-built_in">any</span> = {\n      month: startOfMonth,\n      week: startOfWeek,\n      day: startOfDay\n    }[<span class="hljs-keyword">this</span>.view];\n\n    <span class="hljs-keyword">const</span> getEnd: <span class="hljs-built_in">any</span> = {\n      month: endOfMonth,\n      week: endOfWeek,\n      day: endOfDay\n    }[<span class="hljs-keyword">this</span>.view];\n\n    <span class="hljs-keyword">const</span> params = <span class="hljs-keyword">new</span> HttpParams()\n      .set(\n        <span class="hljs-string">\'primary_release_date.gte\'</span>,\n        format(getStart(<span class="hljs-keyword">this</span>.viewDate), <span class="hljs-string">\'YYYY-MM-DD\'</span>)\n      )\n      .set(\n        <span class="hljs-string">\'primary_release_date.lte\'</span>,\n        format(getEnd(<span class="hljs-keyword">this</span>.viewDate), <span class="hljs-string">\'YYYY-MM-DD\'</span>)\n      )\n      .set(<span class="hljs-string">\'api_key\'</span>, <span class="hljs-string">\'0ec33936a68018857d727958dca1424f\'</span>);\n\n    <span class="hljs-keyword">this</span>.events$ = <span class="hljs-keyword">this</span>.http\n      .get(<span class="hljs-string">\'https://api.themoviedb.org/3/discover/movie\'</span>, { params })\n      .pipe(\n        map(({ results }: { results: Film[] }) =&gt; {\n          <span class="hljs-keyword">return</span> results.map((film: Film) =&gt; {\n            <span class="hljs-keyword">return</span> {\n              title: film.title,\n              start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(\n                film.release_date + getTimezoneOffsetString(<span class="hljs-keyword">this</span>.viewDate)\n              ),\n              color: colors.yellow,\n              allDay: <span class="hljs-literal">true</span>,\n              meta: {\n                film\n              }\n            };\n          });\n        })\n      );\n  }\n\n  dayClicked({\n    date,\n    events\n  }: {\n    date: <span class="hljs-built_in">Date</span>;\n    events: <span class="hljs-built_in">Array</span>&lt;CalendarEvent&lt;{ film: Film }&gt;&gt;;\n  }): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">if</span> (isSameMonth(date, <span class="hljs-keyword">this</span>.viewDate)) {\n      <span class="hljs-keyword">if</span> (\n        (isSameDay(<span class="hljs-keyword">this</span>.viewDate, date) &amp;&amp; <span class="hljs-keyword">this</span>.activeDayIsOpen === <span class="hljs-literal">true</span>) ||\n        events.length === <span class="hljs-number">0</span>\n      ) {\n        <span class="hljs-keyword">this</span>.activeDayIsOpen = <span class="hljs-literal">false</span>;\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-keyword">this</span>.activeDayIsOpen = <span class="hljs-literal">true</span>;\n        <span class="hljs-keyword">this</span>.viewDate = date;\n      }\n    }\n  }\n\n  eventClicked(event: CalendarEvent&lt;{ film: Film }&gt;): <span class="hljs-built_in">void</span> {\n    <span class="hljs-built_in">window</span>.open(\n      `https:<span class="hljs-comment">//www.themoviedb.org/movie/${event.meta.film.id}`,</span>\n      <span class="hljs-string">\'_blank\'</span>\n    );\n  }\n}\n'},F8gx:function(s,n){s.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate"\n  (viewDateChange)="fetchEvents()"\n  (viewChange)="fetchEvents()"\n>\n</mwl-demo-utils-calendar-header>\n\n<ng-template #loading>\n  <div class="text-center">\n    <i class="fa fa-spin fa-spinner fa-5x"></i> <br />\n    Loading events...\n  </div>\n</ng-template>\n\n<div *ngIf="events$ | async; else loading; let events">\n  <div [ngSwitch]="view">\n    <mwl-calendar-month-view\n      *ngSwitchCase="\'month\'"\n      [viewDate]="viewDate"\n      [events]="events"\n      [activeDayIsOpen]="activeDayIsOpen"\n      (dayClicked)="dayClicked($event.day)"\n      (eventClicked)="eventClicked($event.event)"\n    >\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view\n      *ngSwitchCase="\'week\'"\n      [viewDate]="viewDate"\n      [events]="events"\n      (eventClicked)="eventClicked($event.event)"\n    >\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view\n      *ngSwitchCase="\'day\'"\n      [viewDate]="viewDate"\n      [events]="events"\n      (eventClicked)="eventClicked($event.event)"\n    >\n    </mwl-calendar-day-view>\n  </div>\n</div>\n'},JB28:function(s,n,a){"use strict";a.r(n),a.d(n,"sources",function(){return e});var e=[{filename:"component.ts",contents:{raw:a("wKgs"),highlighted:a("6EyE")}},{filename:"template.html",contents:{raw:a("F8gx"),highlighted:a("xr3W")}},{filename:"module.ts",contents:{raw:a("dpsJ"),highlighted:a("LCuI")}}]},LCuI:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { HttpClientModule } from <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    HttpClientModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},dpsJ:function(s,n){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { HttpClientModule } from '@angular/common/http';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    HttpClientModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},wKgs:function(s,n){s.exports="import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';\nimport { HttpClient, HttpParams } from '@angular/common/http';\nimport { map } from 'rxjs/operators';\nimport { CalendarEvent } from 'angular-calendar';\nimport {\n  isSameMonth,\n  isSameDay,\n  startOfMonth,\n  endOfMonth,\n  startOfWeek,\n  endOfWeek,\n  startOfDay,\n  endOfDay,\n  format\n} from 'date-fns';\nimport { Observable } from 'rxjs';\nimport { colors } from '../demo-utils/colors';\n\ninterface Film {\n  id: number;\n  title: string;\n  release_date: string;\n}\n\nfunction getTimezoneOffsetString(date: Date): string {\n  const timezoneOffset = date.getTimezoneOffset();\n  const hoursOffset = String(\n    Math.floor(Math.abs(timezoneOffset / 60))\n  ).padStart(2, '0');\n  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');\n  const direction = timezoneOffset > 0 ? '-' : '+';\n  return `T00:00:00${direction}${hoursOffset}${minutesOffset}`;\n}\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent implements OnInit {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events$: Observable<Array<CalendarEvent<{ film: Film }>>>;\n\n  activeDayIsOpen: boolean = false;\n\n  constructor(private http: HttpClient) {}\n\n  ngOnInit(): void {\n    this.fetchEvents();\n  }\n\n  fetchEvents(): void {\n    const getStart: any = {\n      month: startOfMonth,\n      week: startOfWeek,\n      day: startOfDay\n    }[this.view];\n\n    const getEnd: any = {\n      month: endOfMonth,\n      week: endOfWeek,\n      day: endOfDay\n    }[this.view];\n\n    const params = new HttpParams()\n      .set(\n        'primary_release_date.gte',\n        format(getStart(this.viewDate), 'YYYY-MM-DD')\n      )\n      .set(\n        'primary_release_date.lte',\n        format(getEnd(this.viewDate), 'YYYY-MM-DD')\n      )\n      .set('api_key', '0ec33936a68018857d727958dca1424f');\n\n    this.events$ = this.http\n      .get('https://api.themoviedb.org/3/discover/movie', { params })\n      .pipe(\n        map(({ results }: { results: Film[] }) => {\n          return results.map((film: Film) => {\n            return {\n              title: film.title,\n              start: new Date(\n                film.release_date + getTimezoneOffsetString(this.viewDate)\n              ),\n              color: colors.yellow,\n              allDay: true,\n              meta: {\n                film\n              }\n            };\n          });\n        })\n      );\n  }\n\n  dayClicked({\n    date,\n    events\n  }: {\n    date: Date;\n    events: Array<CalendarEvent<{ film: Film }>>;\n  }): void {\n    if (isSameMonth(date, this.viewDate)) {\n      if (\n        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||\n        events.length === 0\n      ) {\n        this.activeDayIsOpen = false;\n      } else {\n        this.activeDayIsOpen = true;\n        this.viewDate = date;\n      }\n    }\n  }\n\n  eventClicked(event: CalendarEvent<{ film: Film }>): void {\n    window.open(\n      `https://www.themoviedb.org/movie/${event.meta.film.id}`,\n      '_blank'\n    );\n  }\n}\n"},xr3W:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span>\n  [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span>\n  [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>\n  (<span class="hljs-attribute">viewDateChange</span>)=<span class="hljs-value">"fetchEvents()"</span>\n  (<span class="hljs-attribute">viewChange</span>)=<span class="hljs-value">"fetchEvents()"</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">ng-template</span> #<span class="hljs-attribute">loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"text-center"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">i</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"fa fa-spin fa-spinner fa-5x"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-title">br</span> /&gt;</span>\n    Loading events...\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">ng-template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> *<span class="hljs-attribute">ngIf</span>=<span class="hljs-value">"events$ | async; else loading; let events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n      *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n      [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n      [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n      [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"activeDayIsOpen"</span>\n      (<span class="hljs-attribute">dayClicked</span>)=<span class="hljs-value">"dayClicked($event.day)"</span>\n      (<span class="hljs-attribute">eventClicked</span>)=<span class="hljs-value">"eventClicked($event.event)"</span>\n    &gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n      *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n      [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n      [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n      (<span class="hljs-attribute">eventClicked</span>)=<span class="hljs-value">"eventClicked($event.event)"</span>\n    &gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n      *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n      [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n      [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n      (<span class="hljs-attribute">eventClicked</span>)=<span class="hljs-value">"eventClicked($event.event)"</span>\n    &gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n'}}]);