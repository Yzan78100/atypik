import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs/Observable';
import  {Logements} from "../models/logement";
let lot : any[] = [
];

@Component({
	selector: 'app-logement',
	templateUrl: './logement.component.html',
	styleUrls: ['./logement.component.css'],
	providers: [NgbRatingConfig, ConfigService]
})
export class LogementComponent implements OnInit {

Datalot : Logements[];
logement: Logements;



	constructor(config: NgbRatingConfig, private configService: ConfigService) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
		this.Datalot = [];
	}

  ngOnInit() {
  this.getLotData().subscribe( res => {
   this.Datalot = res;
  });
}


	getLotData(): Observable<any[]> {
    return Observable.create(observer => {
		this.configService.getlotData('http://api.luggfly.com/api/logements').subscribe(datalot => {
          observer.next(datalot);
        }, error => {
		  console.log(error);
          if (error._body)
            observer.error(JSON.parse(error._body));
          else
            observer.next(JSON.parse(error));
        });
    });
  }

}
