import {BrowserModule} from '@angular/platform-browser';
import {CommonModule, HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {SmartwatchOverviewPageComponent} from './pages/smartwatch-overview-page/smartwatch-overview-page.component';
import {NavComponent} from './utility-components/nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2CompleterModule} from 'ng2-completer';
import {CookieModule, CookieService} from 'ngx-cookie';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {QRCodeModule} from 'angularx-qrcode';
import {NgxPermissionsModule} from 'ngx-permissions';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {MatDialogModule} from '@angular/material/dialog';
import {
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {ColorPickerModule} from 'ngx-color-picker';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {SmartwatchService} from './services/smartwatch.service';
import {SimpleTranslateComponent} from './utility-components/simple-translate/simple-translate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SmartwatchOverviewPageComponent,
    SimpleTranslateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Ng2CompleterModule,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    QRCodeModule,
    MultiselectDropdownModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ColorPickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatExpansionModule,
    InfiniteScrollModule
  ],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    HttpClient,
    CookieService,
    SmartwatchService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
