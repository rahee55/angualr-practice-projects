import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscireServiceService {

  onSubscribeClicked(){

    let isConfirm = confirm("Are you sure you want to subscribe ?")
    if(isConfirm){
      alert(" Thanks for subscribing our service ")
    }
  }
}
