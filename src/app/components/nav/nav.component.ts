import { Component, OnInit } from '@angular/core';
import { navigateToUrl } from "single-spa";

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(e): void {
    var likeButtonElement = e.target as HTMLElement;
    var id = e.target.id;
    console.log(id);
    navigateToUrl("/"+id);
  }

}
