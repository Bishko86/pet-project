import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { HttpLoaderFactory } from "../app.module";
import { SharedModule } from "../directive/shared.module";
import { HttpDataService } from "../service/http-data.service";
import { CardComponent } from "./card/card.component";
import { FeaturesComponent } from "./features.component";

@NgModule({
    declarations: [
        CardComponent,
        FeaturesComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: FeaturesComponent },
            { path: 'features/:id/:username', component: CardComponent }
        ]),TranslateModule.forChild({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          }),
          InfiniteScrollModule,
          ReactiveFormsModule
    ],
    exports:[RouterModule],
    providers:[HttpDataService]
})

export class FeaturesModule { }