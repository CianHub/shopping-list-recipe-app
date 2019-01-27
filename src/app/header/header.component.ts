import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private dataService: DataStorageService,
    public authService: AuthService
  ) {}

  onSaveData() {
    this.dataService.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dataService.getRecipes();
  }

  onLogout = () => this.authService.logout();
}
