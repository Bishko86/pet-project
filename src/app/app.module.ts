import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { OfficeComponent } from './office/office.component';
import { FeaturesComponent } from './features/features.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PromoComponent } from './promo/promo.component';
import { CardComponent } from './card/card.component';
import { DataOfficeService } from './service/data-office.service';
import { FeaturesDataService } from './service/features-data.service';
import { ShadowBlockDirective } from './directive/shadow-block.directive';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TitleStyleDirective } from './directive/title-style.directive';
import { OfficeStyleDirective } from './directive/office-style.directive';
import { SetLanguageService } from './service/set-language.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PromoComponent,
    OfficeComponent,
    FeaturesComponent,
    ShadowBlockDirective,
    WhyUsComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    FilterPipe,
    TitleStyleDirective,
    OfficeStyleDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DataOfficeService, FeaturesDataService, SetLanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
