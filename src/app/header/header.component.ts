import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SubscireServiceService } from '../subscire-service.service'
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-header',
  imports: [HomeComponent, CommonModule, AdminComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [SubscireServiceService]
})
export class HeaderComponent {

  selectedTab: string = 'home'
  constructor(private subService: SubscireServiceService){}

  HomeClicked(){
    this.selectedTab = 'home';
  }
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  onSubscribe(){
    this.subService.onSubscribeClicked()
  }
}
