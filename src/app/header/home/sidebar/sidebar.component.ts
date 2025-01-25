import { Component } from '@angular/core';
import { SubscireServiceService } from '../../../subscire-service.service'

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers: [SubscireServiceService]
})
export class SidebarComponent {

  constructor(private subService: SubscireServiceService){}
  onSubscribe(){
    this.subService.onSubscribeClicked()
  }
}
