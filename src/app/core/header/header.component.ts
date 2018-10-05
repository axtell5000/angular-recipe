/**
 * Created by User on 2017/06/12.
 */
import {Component} from '@angular/core';
import {Response} from '@angular/http';

import {DataStorageService} from '../../shared/data-service.service';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipe()
      .subscribe(
        (response: Response) => {
        console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes(); // We dont need to subscribe here because we did it in the Data service
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
