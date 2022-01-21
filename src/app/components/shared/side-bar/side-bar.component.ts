import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {getActualRoute} from '../../../utils/helpers';
import {ROUTE_TO_POKEMON, ROUTE_TO_SYSTEM} from '../../../utils/constants';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  actualRoute: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.actualRoute = this.assignActiveItem();
  }

  navigate(url: string): void {
    this.router.navigate([ROUTE_TO_SYSTEM, ROUTE_TO_POKEMON, url]).then(() => {
      this.actualRoute = this.assignActiveItem();
    });
  }

  assignActiveItem(): string {
    return getActualRoute(this.router.url);
  }

}
