import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { OfficeComponent } from './components/office/office.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PromoComponent } from './components/promo/promo.component';
import { DataOfficeService } from './service/data-office.service';
import { HttpDataService } from './service/http-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SetLanguageService } from './service/set-language.service';
import { SharedModule } from './shared/shared.module';
import { TranslateDatePipe } from './pipes/translate-date.pipe';
import { registerLocaleData } from '@angular/common';
import localeUa from '@angular/common/locales/uk';
registerLocaleData(localeUa);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PromoComponent,
    OfficeComponent,
    WhyUsComponent,
    FooterComponent,
    HomeComponent,
    TranslateDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DataOfficeService,  SetLanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
