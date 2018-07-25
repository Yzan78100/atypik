import {Component, ViewEncapsulation, OnInit} from '@angular/core';

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

export class AppNavbarComponent implements OnInit {

  userForm: FormGroup;
  userConn: FormGroup;
  closeResult: string;
  token: any;
  user: any;

  constructor(private modalService: NgbModal, private configService: ConfigService) {

    this.userConn = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

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

    this.checkConnectStart();
  }

  ngOnInit() {

  };


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

  login() {
    console.log(this.userForm);
    const dataform = {
      'email': this.userConn.value.email,
      'password': this.userConn.value.password
    };

    this.PostLogin(dataform).subscribe(data => {
      if (data != undefined || data != null) {
        localStorage.setItem('Token', JSON.stringify(data));
        this.checkConnectStart();
      }
    });
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
    this.PostDataUsers(dataform).subscribe(data => {
      console.log(data);
    });
  }

  PostDataUsers(data): Observable<any[]> {
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

  checkConnectStart() {
    this.token =  localStorage.getItem('Token');
   if(this.token  != null || this.token  != undefined) {
     const tokenUser = JSON.parse(this.token);
     console.log(tokenUser );
     console.log(tokenUser.userId);
     console.log('User is already connected');
     this.GetUser(tokenUser.userId).subscribe( user => {
console.log('toto');
       this.user = user;
       this.ngOnInit();
       console.log(user);
     });
   }
  }

  PostLogin(data): Observable<any> {
    return Observable.create(observer => {
      this.configService.postData('http://api.luggfly.com/api/users/login', data).subscribe(datalot => {
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


  GetUser(id): Observable<any> {
    return Observable.create(observer => {
      this.configService.getlotData('http://api.luggfly.com/api/users/' + id).subscribe(datalot => {
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
