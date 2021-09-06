import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { OfficeComponent } from './office/office.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PromoComponent } from './promo/promo.component';
import { DataOfficeService } from './service/data-office.service';
import { HttpDataService } from './service/http-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SetLanguageService } from './service/set-language.service';
import { SharedModule } from './directive/shared.module';
import { TranslateDatePipe } from './directive/pipes/translate-date.pipe';
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
