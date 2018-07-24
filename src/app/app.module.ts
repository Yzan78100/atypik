import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { LogementComponent } from './logement/logement.component';
import { AssuranceComponent } from './assurance/assurance.component';
import { ThemeComponent } from './theme/theme.component';
import { GroupeComponent } from './groupe/groupe.component';
import { PartnerComponent } from './partner/partner.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { BatimentsComponent } from './batiments/batiments.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { DescriptionComponent } from './description/description.component';
import { ProprioComponent } from './proprio/proprio.component';
import { AdminComponent } from './admin/admin.component';
import 'hammerjs';
import 'mousetrap';
import {ModalGalleryModule} from '@ks89/angular-modal-gallery';
import {ConfigService} from './config.service';
import { CreationComponent } from './creation/creation.component';


const appRoutes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'batiment', component: BatimentsComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'propriétaire', component: ProprioComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'création', component: CreationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SearchComponent,
    LogementComponent,
    AssuranceComponent,
    ThemeComponent,
    GroupeComponent,
    PartnerComponent,
    FooterComponent,
    BatimentsComponent,
    AcceuilComponent,
    DetailsComponent,
    DescriptionComponent,
    ProprioComponent,
    AdminComponent,
    CreationComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
	ModalGalleryModule.forRoot(),
    RouterModule.forRoot(
        appRoutes
      ),
    NgbModule.forRoot()
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
