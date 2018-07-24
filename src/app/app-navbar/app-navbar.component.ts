import {Component, ViewEncapsulation} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppNavbarComponent {

  userForm: FormGroup;
  closeResult: string;

  constructor(private modalService: NgbModal, private configService: ConfigService) {

    this.userForm = new FormGroup({
      lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      inputAddress: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Address: new FormControl('', [Validators.required, Validators.minLength(2)]),
      Pays: new FormControl('', [Validators.required, Validators.minLength(2)]),
      inputZip: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }


  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  signUp() {
    console.log(this.userForm);
    const dataform = {
      'firstname': this.userForm.value.firstname,
      'lastname': this.userForm.value.lastname,
      'password': this.userForm.value.password,
      'email': this.userForm.value.email,
      'Address': this.userForm.value.inputAddress,
      'Pays': this.userForm.value.Pays,
      'Zip': this.userForm.value.inputZip
    };
    this.PostData(dataform).subscribe(data => {
      console.log(data);
    });
  }

  PostData(data): Observable<any[]> {
    return Observable.create(observer => {
      this.configService.postData('http://api.luggfly.com/api/users', data).subscribe(datalot => {
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
