import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import  {Logements} from "../models/logement";
let lot : any[] = [
];

@Component({
	selector: 'app-logement',
	templateUrl: './logement.component.html',
	styleUrls: ['./logement.component.css'],
	providers: [NgbRatingConfig, ConfigService]
})
export class LogementComponent {

Datalot : Logements[];
logement: Logements;



	constructor(config: NgbRatingConfig, private configService: ConfigService) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
		this.Datalot = [];
		this.getLotData();
		console.log('toto');
	}




	getLotData(): Observable<any[]> {
		console.log('bondamamao');

    return Observable.create(observer => {
		console.log('toti');
		this.configService.getlotData().subscribe(datalot => {

			console.log(datalot);

          observer.next(this.Datalot);
        }, error => {

          if (error._body)
            observer.next(JSON.parse(error._body));
          else
            observer.next(JSON.parse(error));
        });

    });
  }

}
