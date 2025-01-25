import { Component } from '@angular/core';
import { SubscireServiceService } from '../../../subscire-service.service'

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers: [SubscireServiceService]
})
export class HeroComponent {

  constructor(private subService: SubscireServiceService){}
  onSubscribe(){
    this.subService.onSubscribeClicked()
  }
}
