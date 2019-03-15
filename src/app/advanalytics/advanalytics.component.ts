import { Component, OnInit } from '@angular/core';
import { XchangesvcService } from '../services/Xchangesvc.service';

@Component({
  selector: 'adv-analytics',
  templateUrl: './advanalytics.component.html',
  styleUrls: ['./advanalytics.component.css']
})
export class AdvanalyticsComponent implements OnInit {

    constructor(
       private mySvc: XchangesvcService
    ) { }

  ngOnInit() {
  }
  
  
  
  callaService(){
      var message = this.mySvc.sayHello();
	  alert(message);
  }

}
