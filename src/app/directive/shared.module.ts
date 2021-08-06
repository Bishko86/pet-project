import { NgModule } from "@angular/core";
import { OfficeStyleDirective } from "./office-style.directive";
import { FilterPipe } from "./pipes/filter.pipe";
import { ShadowBlockDirective } from "./shadow-block.directive";
import { TitleStyleDirective } from "./title-style.directive";

@NgModule({
    declarations:[
        OfficeStyleDirective,
        ShadowBlockDirective,
        TitleStyleDirective,
        FilterPipe
    ],
    exports:[
        OfficeStyleDirective,
        ShadowBlockDirective,
        TitleStyleDirective,
        FilterPipe
    ]
})

export class SharedModule {}