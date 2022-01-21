import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-core-container',
  templateUrl: './core-container.component.html',
  styleUrls: ['./core-container.component.scss']
})
export class CoreContainerComponent implements OnInit {
  sideBarIsOpen: boolean;

  constructor() {
    this.sideBarIsOpen = true;
  }

  ngOnInit(): void {
  }

  handleSideBar(): void {
    this.sideBarIsOpen = !this.sideBarIsOpen;
  }

}
