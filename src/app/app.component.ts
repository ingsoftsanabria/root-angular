import { Component, OnInit } from '@angular/core';
import { LifeCycles, registerApplication, start } from "single-spa";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root-config',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'root-angular';

  ngOnInit(): void {
    registerApplication({
      name: "micro-angular",
      app: (): Promise<LifeCycles> => (window as any).System.import(environment.production ? "http://localhost:5000/micro-angular/main.js" : "http://localhost:4300/main.js"),
      activeWhen: "/pages",
      customProps: {
        some: 'value'
      }
    });

    registerApplication({
      name: "micro-dashboard",
      app: (): Promise<LifeCycles> => (window as any).System.import(environment.production ? "http://localhost:5000/micro-dashboard/main.js" : "http://localhost:4202/main.js"),
      activeWhen: "/dash",
      customProps: {
        some: 'value',
        authToken: "d83jD63UdZ6RS6f70D0"
      }
    });

    registerApplication({
      name: "micro-footer",
      app: (): Promise<LifeCycles> => (window as any).System.import(environment.production ? "http://localhost:5000/micro-footer/main.js" : "http://localhost:4203/main.js"),
      activeWhen: "/",
    });
    
    start();
  }
}
