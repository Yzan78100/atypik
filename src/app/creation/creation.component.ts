import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {
  userForm: FormGroup;
  constructor(private modalService: NgbModal, private configService: ConfigService) {

    this.userForm = new FormGroup({
      image: new FormControl('', [Validators.required, Validators.minLength(2)]),
      nom: new FormControl('', [Validators.required, Validators.minLength(5)]),
      tag: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ville: new FormControl('', [Validators.required, Validators.minLength(5)]),
      personnes: new FormControl('', [Validators.required, Validators.minLength(5)]),
      caution: new FormControl('', [Validators.required, Validators.minLength(3)]),
      prix: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  signUp() {
    console.log(this.userForm);
    const dataform = {
      'image': this.userForm.value.image,
      'nom': this.userForm.value.nom,
      'tag': this.userForm.value.tag,
      'ville': this.userForm.value.ville,
      'personnes': this.userForm.value.personnes,
      'caution': this.userForm.value.caution,
      'prix': this.userForm.value.prix,
      'description': this.userForm.value.description,
    };
    this.PostData(dataform).subscribe(data => {
      console.log(data);
    });
  }

  PostData(data): Observable<any[]> {
    return Observable.create(observer => {
      this.configService.postData('http://api.luggfly.com/api/logements', data).subscribe(datalot => {
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
